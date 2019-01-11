module com.view.main {
	import GObject = fairygui.GObject;
	import GRoot = fairygui.GRoot;
	import DisplayObject = egret.DisplayObject;
	import PanelUtils = com.utils.PanelUtils;
	import TypePanelId = com.type.TypePanelId;
	
	export class MainStage{
		/**fairygui舞台 */
		private guiStage:DisplayObject;
		/** */

		public constructor() {
			this.init();
		}
		/**初始化 */
		private init():void{
			this.guiStage = GRoot.inst.displayObject;
			Global.stage.addChild(this.guiStage);
			PanelUtils.openPanelById(TypePanelId.LOGIN);
		}
	}
}