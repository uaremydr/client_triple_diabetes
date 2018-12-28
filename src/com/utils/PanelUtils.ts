module com.utils {
	import PanelInfo = com.data.PanelInfo;
	import HashMap = com.extend.HashMap;
	import GRoot = fairygui.GRoot;
	import UIPackage = fairygui.UIPackage;
	import LanguageUtils = com.utils.LanguageUtils;

	export class PanelUtils {
		public constructor() {
		}
		/**面板缓存 */
		private static panelInstMap:HashMap<string, any> = new HashMap<string, any>();
		/**根据面板id打开面板 */
		public static openPanelById(panelId:string):void{
			let panelInfo:PanelInfo = PanelRegister.instance.getPanelInfoById(panelId);
			if(panelInfo.panelGroup){
				let group:string = panelInfo.panelGroup;
				if(RES.getGroupByName(group)){
					if(RES.getGroupByName(group).length > 0){
						this.onGroupLoadComplete(panelInfo);
					}else{
						//当前group不存在
						Log.showWarn("PanelUtils.openPanelById():" + LanguageUtils.getLang("PanelUtils_1", [group]));
					}
				}else{
					GroupLoader.instance.loadGroup(group, this.onGroupLoadComplete, this, panelInfo);
				}
			}
		}
		/**group加载完成 */
		private static onGroupLoadComplete(info:any):void{
			let panelInfo:PanelInfo = info as PanelInfo;
			let panel:any = this.panelInstMap.get(panelInfo.panelId);
			if(!panel){
				let cls:any = panelInfo.panelClass;
				panel = new cls();
				this.panelInstMap.put(panelInfo.panelId, panel);
			}
			GRoot.inst.addChild(panel);
			panel.x = (Global.stage.width - panel.width) / 2;
			panel.y = (Global.stage.height - panel.height) / 2;
		}
	}
}