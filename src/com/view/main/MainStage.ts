module com.view.main {
	import GObject = fairygui.GObject;
	import GRoot = fairygui.GRoot;
	import DisplayObject = egret.DisplayObject;
	// import DisplayObjectContainer = egret.DisplayObjectContainer;
	
	export class MainStage{
		/**fairygui舞台 */
		private guiStage:DisplayObject;

		public constructor() {
			this.init();
		}
		/**初始化 */
		private init():void{
			this.guiStage = GRoot.inst.displayObject;
			Global.stage.addChild(this.guiStage);
		}
	}
}