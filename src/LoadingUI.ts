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

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {
    private constructor() {
        super();
        this.createView();
    }
    /**实例 */
    private static _instance:LoadingUI;
    /**获取实例 */
    public static get instance():LoadingUI{
        if(!this._instance){
            this._instance = new LoadingUI();
        }
        return this._instance;
    }

    // private textField: egret.TextField;
    private preloading:HTMLElement;
    private progressbar:HTMLElement;
    private progressNum:HTMLElement;
    private progressTxt:HTMLElement;


    private createView(): void {
        this.preloading = document.getElementById("preloading");
        this.progressbar = document.getElementById("progressbar");
        this.progressNum = document.getElementById("progressNum");
        this.progressTxt = document.getElementById("progressTxt");
    }

    public onProgress(current: number, total: number): void {
        // this.progressTxt.innerHTML = "Loading..." + current + "/" + total;
        this.progressTxt.innerHTML = com.utils.StringFormatUtils.replaceStr("Loading...{0}/{1}",[current, total]);
		this.progressNum.style.width = current / total * 100 + "%";
    }

    public clearProgress():void{
        if(this.preloading){
			this.preloading.style.display = "none";
            this.preloading = null;
        }
        if(this.progressbar){
			this.progressbar.style.display = "none";
            this.progressbar = null;
        }
        if(this.progressNum){
			this.progressNum.style.display = "none";
            this.progressNum = null;
        }
        if(this.progressTxt){
			this.progressTxt.style.display = "none";
            this.progressTxt = null;
        }
    }
}
