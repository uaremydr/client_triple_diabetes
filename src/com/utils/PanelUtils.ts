module com.utils {
	import PanelInfo = com.data.PanelInfo;
	import GRoot = fairygui.GRoot;
	import UIPackage = fairygui.UIPackage;
	import LanguageUtils = com.utils.LanguageUtils;
	import TypeContainer = com.type.TypeContainer;
	import LoaderInfo = com.data.info.LoaderInfo;
	import TypePanelId = com.type.TypePanelId;
	import MainStage = com.view.main.MainStage

	export class PanelUtils {
		public constructor() {
		}
		/**面板缓存 */
		private static _panelInstMap:Map<string, any> = new Map<string, any>();
		/**当前打开的面板id */
		private static _currentPanelId:string = "";
		public static get currentPanelId():string{
			return this._currentPanelId;
		}
		/**初始化面板公用资源*/
		public static initCommonResource():void{
			GroupLoader.instance.loadGroup(new LoaderInfo("common", this.initComplete, this));
		}
		/**初始化完成*/
		private static initComplete():void{
			UIPackage.addPackage("common");
	        PanelUtils.openPanelById(TypePanelId.LOGIN);
		}
		/**根据面板id打开面板 */
		public static openPanelById(panelId:string):void{
			try{
				let panelInfo:PanelInfo = PanelRegister.instance.getPanelInfoById(panelId);
				if(panelInfo && panelInfo.panelGroup){
					let group:string = panelInfo.panelGroup;
					if(RES.isGroupLoaded(group)){
						if(RES.getGroupByName(group).length > 0){
							this.onGroupLoadComplete(panelInfo);
						}else{
							//当前group不存在
							Log.showWarn("PanelUtils.openPanelById():" + LanguageUtils.getLang("PanelUtils_1", [group]));
							return;
						}
					}else{
						GroupLoader.instance.loadGroup(new LoaderInfo(group, this.onGroupLoadComplete, this, [panelInfo]));
					}
				}else{
					Log.showWarn("PanelUtils.openPanelById():" + LanguageUtils.getLang("PanelUtils_6"));
					return;
				}
			}catch(e){
				if(e.stack){
					Log.showError(e.stack.toString());
				}else{
					Log.showError(e);
				}
			}
		}
		/**group加载完成 */
		private static onGroupLoadComplete(info:any):void{
			try{
				let panelInfo:PanelInfo = info as PanelInfo;
				let panel:any = this._panelInstMap.get(panelInfo.panelId);
				if(!UIPackage.getByName(panelInfo.panelGui)){
					UIPackage.addPackage(panelInfo.panelGui);
				}
				if(!panel){
					let cls:any = panelInfo.panelClass;
					panel = new cls();
					this._panelInstMap.set(panelInfo.panelId, panel);
				}
				if(panelInfo.panelLayer == TypeContainer.BOTTOM){
					MainStage.CONTAINER_BOTTOM.addChild(panel);
				}else if(panelInfo.panelLayer == TypeContainer.MIDDLE){
					MainStage.CONTAINER_MIDDLE.addChild(panel);
				}else if(panelInfo.panelLayer == TypeContainer.TOP){
					MainStage.CONTAINER_TOP.addChild(panel);
				}else if(panelInfo.panelLayer == TypeContainer.TIP){
					MainStage.CONTAINER_TIP.addChild(panel);
				}else{
					Log.showWarn("PanelUtils.onGroupLoadComplete():" + LanguageUtils.getLang("PanelUtils_2"));
					return;
				}
				this._currentPanelId = panelInfo.panelId;
				// panel.x = (Global.stage.stageWidth - panel.width) / 2;
				// panel.y = (Global.stage.stageHeight - panel.height) / 2;
			}catch(e){
				if(e.stack){
					Log.showError(e.stack.toString());
				}else{
					Log.showError(e);
				}
			}
		}
		/**根据面板id关闭面板
		 * @param panelId:面板id
		 * @param isDispose:是否释放面板缓存
		 * @param isDisposeRegister:是否释放面板注册表缓存
		 * @param isDisposeGui:是否释放fairyGui的包缓存
		 * @param isDisposeGroup:是否释放引擎加载的group资源, !!!!!谨慎使用,防止将还会再使用的资源释放掉!!!!!
		 */
		public static closePanelById(panelId:string, isDispose:boolean = false, isDisposeRegister:boolean = false, isDisposeGui:boolean = false, isDisposeGroup:boolean = false):void{
			let panelInfo:PanelInfo = PanelRegister.instance.getPanelInfoById(panelId);
			if(isDisposeGroup){
				RES.destroyRes(panelInfo.panelGroup, false);
			}
			if(isDisposeGui){
				UIPackage.removePackage(panelInfo.panelGui);
			}
			if(isDisposeRegister){
				if(PanelRegister.instance.deletePanelInfo(panelId)){
					Log.showLog("PanelUtils.closePanelById():" + LanguageUtils.getLang("PanelUtils_4"));
				}else{
					Log.showWarn("PanelUtils.closePanelById():" + LanguageUtils.getLang("PanelUtils_5"));
				}
			}
			let panel:any = this._panelInstMap.get(panelId);
			if(!panel){
				return;
			}

			panel.hide();

			if(panel.parent){
				panel.parent.removeChild(panel);
			}

			if(isDispose){
				panel.dispose();
				panel = null;
				this._panelInstMap.delete(panelId);
			}
			Log.showLog("PanelUtils.closePanelById():" + LanguageUtils.getLang("PanelUtils_3"));
		}
	}
}