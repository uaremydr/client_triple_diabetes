module com.data.center {
	import StringFormatUtils = com.utils.StringFormatUtils;

	export class CenterLanguage{
		/**实例 */
		private static _instance:CenterLanguage;
		/**获取实例 */
		public static get instance():CenterLanguage{
			if(!this._instance){
				this._instance = new CenterLanguage();
			}
			return this._instance;
		}
		/**必须为私有构造方法 */
		private constructor() {
		}
		/**语言数据 */
		private _langData:Object;
		/**当前加载的语言路径 */
		private _currRes:string;
		/**是否正在加载语言 */
		private _isLoad:boolean;
		/**加载完成返回 */
		private _compFunc:Function;
		/**返回对象 */
		private _thisObject:any;
		
		public get currRes():string{
			return this._currRes;
		}
		
		/**初始化 */
		public init(res:string, compFunc:Function, thisObject:any):void{
			if(this._currRes == res){
				return;
			}
			if(this._isLoad){
				Log.showWarn("CenterLanguage.init():language is loading");
			}
			this._currRes = res;
			try{
				this._isLoad = true;
				this._compFunc = compFunc;
				this._thisObject = thisObject;
				RES.getResByUrl(res, this.onResComplete, this, RES.ResourceItem.TYPE_JSON);
			}catch(e){
				if(e.stack){
					Log.showError(e.stack.toString());
				}else{
					Log.showError(e);
				}
				Log.showWarn("CenterLanguage.init():fail to load " + this._currRes);
			}
		}
		/**加载数据返回 */
		private onResComplete(jsonObj:Object):void{
			this._isLoad = false;
			if(this._langData){
				this._langData = Object.assign(this._langData, jsonObj);
			}else{
				this._langData = jsonObj;
			}
			RES.destroyRes(this._currRes);//销毁语言缓存
			this._compFunc.apply(this._thisObject);
			this._compFunc = null;
			this._thisObject = null;
		}
		/**根据名字获取字符串 */
		public getLang(name:string, args:Array<string> = []):string{
			if(this._langData && this._langData[name]){
				let str:string = this._langData[name];
				return str;
			}
			return "";
		}
	}
}