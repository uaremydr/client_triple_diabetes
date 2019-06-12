module com.utils {
	export class StringFormatUtils {
		private constructor() {
		}
		/**字符串替换(替换字符串中的{}) */
		public static replaceStr(str:string, subs:Array<any>):string{
			if(!str || subs.length < 1){
				return str;
			}
			for(let i:number=0; i<subs.length; i++){
				str = str.replace(new RegExp("\\{" + i + "\\}", "g"), subs[i]);
			}
			return str;
		}
	}
}