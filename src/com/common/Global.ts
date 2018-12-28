class Global {
	private constructor() {
	}
	/**全局舞台 */
	public static stage:egret.Stage;

	/**初始化数据 */
	public static init(main:Main):void{
		this.stage = main.stage;
	}
}