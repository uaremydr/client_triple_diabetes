/**日志工具类 */
class Log {
	private constructor() {
	}
	//显示报错
	public static showError(args:any):void{
		try {
			egret.error(args);
			let str: string = "Error Start.\n" + args + "\nError End.";
			if(Config.isRelease){//Releas版的错误日志要上报后端
				
			}
			if(Config.isDebug){//Debug版本错误日志直接弹出
				alert(str);//弊端为如果一次报多个错误，会弹框很多，可以自己写报错面板解决问题；
			}
		}catch (e) {
			let txt: string = "Log.showError()_" + e.toString();
			egret.error(txt);
			if(Config.isDebug){
				alert(txt);
			}
		}
	}
	//显示警告
	public static showWarn(args:any):void{
		egret.warn(args);
	}
	//显示日志(记录步骤的时候使用，主要在调用异步方法或库方法时反馈脚印)
	public static showLog(args:any):void{
		egret.log(args);
	}
	/**输出到控制台 */
	public static consoleLog(args:any):void{
		console.log(args);
	}

}