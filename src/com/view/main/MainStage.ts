module com.view.main {
	import GObject = fairygui.GObject;
	import GRoot = fairygui.GRoot;
	import DisplayObject = egret.DisplayObject;
	import DisplayObjectContainer = egret.DisplayObjectContainer;
	
	export class MainStage extends DisplayObjectContainer{
		/**fairygui舞台 */
		private guiStage:DisplayObject;

		public constructor() {
			super();
			this.init();
		}
		/**初始化 */
		private init():void{
			this.guiStage = GRoot.inst.displayObject;
			this.addChild(this.guiStage);
		}
	}
}