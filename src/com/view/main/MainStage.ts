module com.view.main {
	import GObject = fairygui.GObject;
	import GRoot = fairygui.GRoot;
	import DisplayObject = egret.DisplayObject;
	import TypePanelId = com.type.TypePanelId;
	import GComponent = fairygui.GComponent;
	
	export class MainStage{
		/**底层容器(底图) */
		public static CONTAINER_BOTTOM:GComponent;
		/**中层容器(菜单) */
		public static CONTAINER_MIDDLE:GComponent;
		/**顶层容器(面板) */
		public static CONTAINER_TOP:GComponent;
		/**提示层容器(提示) */
		public static CONTAINER_TIP:GComponent;

		public constructor() {
			// if (window.innerWidth >= window.innerHeight) {
			// 	Global.stage.scaleMode = egret.StageScaleMode.FIXED_HEIGHT;
			// }
			// else {
			// 	let resolution = window.innerWidth / window.innerHeight;        //自适应浏览器// window.innerWidth / window.innerHeight;
			// 	if (resolution < 1.5 || window.innerWidth >= window.innerHeight) {
			// 		if(egret.Capabilities.isMobile && egret.Capabilities.runtimeType == egret.RuntimeType.WEB)
			// 			Global.stage.scaleMode = egret.StageScaleMode.FIXED_HEIGHT;
			// 		else
			// 			Global.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
			// 	}
			// }
			MainStage.init();
		}
		/**初始化 */
		private static init():void{
			Global.gStage.addChild(GRoot.inst.displayObject);

			this.CONTAINER_BOTTOM = new GComponent();
			this.CONTAINER_BOTTOM.setSize(Global.gStage.stageWidth, Global.gStage.stageHeight);
			GRoot.inst.addChild(this.CONTAINER_BOTTOM);
			this.CONTAINER_MIDDLE = new GComponent();
			this.CONTAINER_MIDDLE.setSize(Global.gStage.stageWidth, Global.gStage.stageHeight);
			GRoot.inst.addChild(this.CONTAINER_MIDDLE);
			this.CONTAINER_TOP = new GComponent();
			this.CONTAINER_TOP.setSize(Global.gStage.stageWidth, Global.gStage.stageHeight);
			GRoot.inst.addChild(this.CONTAINER_TOP);
			this.CONTAINER_TIP = new GComponent();
			this.CONTAINER_TIP.setSize(Global.gStage.stageWidth, Global.gStage.stageHeight);
			GRoot.inst.addChild(this.CONTAINER_TIP);
		}
	}
}