class Global {
	/**
	 * 主要用于存储从客户端获取的需要用上的数据
	 */
	private constructor() {
	}
	/**全局舞台 */
	public static gStage:egret.Stage;
	/**设备物理像素和设备独立像素的比例(物理像素 / 独立像素)*/
	public static gDevicePixelRatio:number;
	/**网页当前宽度*/
	public static gPageWidth:number;
	/**网页当前高度*/
	public static gPageHeight:number;
	/**浏览器当前宽度*/
	public static gBrowserWidth:number;
	/**浏览器当前高度*/
	public static gBrowserHeight:number;
	/**可用屏幕宽度(相对于显示屏，除去任务栏)*/
	public static gAvailWidth:number;
	/**可用屏幕高度(相对于显示屏，除去任务栏)*/
	public static gAvailHeight:number;
	/**设计用的宽高比（此比例等于index.html中设置的屏幕宽高比）*/
	public static gDesignScale:number = 1080 / 1920;
	/**当前设备宽高比 */
	public static gBrowserScale:number;

	/**初始化数据 */
	public static init(main:Main):void{
		this.gStage = main.stage;
		this.gDevicePixelRatio = window.devicePixelRatio;
		this.gPageWidth = document.documentElement.clientWidth;
		this.gPageHeight = document.documentElement.clientHeight;
		this.gBrowserWidth = window.innerWidth;
		this.gBrowserHeight = window.innerHeight;
		this.gBrowserScale = window.innerWidth / window.innerHeight;
		this.gAvailWidth = screen.availWidth;
		this.gAvailHeight = screen.availHeight;
		alert(
			this.gPageWidth + "," +
			this.gPageHeight + "," +
			this.gBrowserWidth + "," +
			this.gBrowserHeight + "," +
			this.gAvailWidth + "," +
			this.gAvailHeight
		);
		this.gStage.addEventListener(egret.Event.RESIZE, this.screenAdaptive1, this);
	}
	/**
	 * 屏幕适配  
	 * 方案一：背景图适配长的一边，内容适配短的一边
	 */
	public static screenAdaptive1():void{
		if(this.gDesignScale >= this.gBrowserScale){//设计比例大于实际宽长比例
			this.gStage.scaleMode = egret.StageScaleMode.FIXED_HEIGHT;
			// this.gStage.scaleX = this.
		}else{
			this.gStage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
		}
	}
}