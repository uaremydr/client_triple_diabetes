module com.utils {
	import CenterLanguage = com.data.center.CenterLanguage;

	export class LanguageUtils {
		private constructor() {
		}
		/**获取language表中对应的文本 */
		public static getLang(name:string, args:Array<string> = []):string{
			let str:string = CenterLanguage.instance.getLang(name);
			if(str){
				return str = StringFormatUtils.replaceStr(str, args);
			}else{
				str = CenterLanguage.instance.getLang("CenterLanguage_1");
				if(str){
					Log.showWarn("LanguageUtils.getLang():" + StringFormatUtils.replaceStr(str, [CenterLanguage.instance.currRes]));
				}else{
					Log.showWarn("LanguageUtils.getLang():fail to read language");
				}
			}
			return "";
		}
		/**
		 * 加载语言包
		 * 可用于加载国际化语言
		 */
		public static initLang(res:string, compFunc:Function, thisObject:any):void{
			CenterLanguage.instance.init(res, compFunc, thisObject);
		}
	}
}