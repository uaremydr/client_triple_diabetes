//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

import MainStage = com.view.main.MainStage;
import PanelRegister = com.utils.PanelRegister;
import LanguageUtils = com.utils.LanguageUtils;

class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        //参考：https://blog.csdn.net/wangji5850/article/details/51180314?locationNum=6&fps=1；
        //参考：https://segmentfault.com/a/1190000011041164
        //参考：https://blog.csdn.net/u013451157/article/details/78686881
        window.onerror = function(msg,url,line,col,error){
            //没有URL不上报！上报也不知道错误
            if (msg != "Script error." && !url){
                return true;
            }
            //采用异步的方式
            setTimeout(function(){
                let data:any = {};
                //不一定所有浏览器都支持col参数
                col = col || (window.event && window.event["errorCharacter"]) || 0;
        
                data.url = url;
                data.line = line;
                data.col = col;
                if (!!error && !!error.stack){
                    //如果浏览器有堆栈信息
                    //直接使用
                    data.msg = error.stack.toString();
                }else if (!!arguments.callee){
                    //尝试通过callee拿堆栈信息
                    let ext:Array<any> = [];
                    let func:Function = arguments.callee;
                    let i:number = 3;
                    while (func && (--i > 0)) {
                        ext.push(func.toString());
                        if (func === func.caller) {
                            break;//如果有循环
                        }
                        func = func.caller;
                    }
                    data.msg = data.url + data.line + data.col + ext.join(",");
                }
                Log.showError(data.msg);
            },0);
            return true;
        };
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        // this.stage.addEventListener(egret.Event.RESIZE, this.resizeHandler, this);
        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {//没有try_catch到的错误就交给window.onerror()处理，
            if(e.stack){
                Log.showError(e.stack.toString());
            }else{
                Log.showError(e);
            }
        })

    }
    
    private async runGame() {
        Global.init(this);//初始化全局数据
        await this.loadResource();
        LanguageUtils.initLang("resource/config/language_zh_CN.json", this.createGameScene, this);
    }

    private async loadResource() {
        try {
            await RES.loadConfig("resource/default.res.json", "resource/");
            let loadingView:LoadingUI = LoadingUI.instance;
            Global.stage.addChild(loadingView);
            await RES.loadGroup("preload", 0, loadingView);
            loadingView.clearProgress();
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            if(e.stack){
                Log.showError(e.stack.toString());
            }else{
                Log.showError(e);
            }
        }
    }

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {
        PanelRegister.instance.registerPanelInfo();//注册面板信息
        let mainStage:MainStage = new MainStage();
    }

}