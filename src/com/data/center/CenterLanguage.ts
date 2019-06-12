module com.data.center {
	import StringFormatUtils = com.utils.StringFormatUtils;
	import LoaderInfo = com.data.info.LoaderInfo;

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
		/**是否正在加载语言 */
		private _isLoad:boolean;
		/**加载数据信息 */
		private _loaderInfo:LoaderInfo;
		
		/**当前正在加载的语言路径 */
		public get currRes():string{
			return this._loaderInfo.url;
		}
		
		/**初始化 */
		public init(info:LoaderInfo):void{
			if(this._loaderInfo){
				return;
			}
			if(this._isLoad){
				Log.showWarn("CenterLanguage.init():language is loading");
				return;
			}
			this._loaderInfo = info;
			try{
				this._isLoad = true;
				RES.getResByUrl(info.url, this.onResComplete, this, RES.ResourceItem.TYPE_JSON);
			}catch(e){
				if(e.stack){
					Log.showError(e.stack.toString());
				}else{
					Log.showError(e);
				}
				Log.showWarn("CenterLanguage.init():fail to load " + this._loaderInfo.url);
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
			RES.destroyRes(this._loaderInfo.url);//销毁语言缓存
			this._loaderInfo.completeFunc.apply(this._loaderInfo.thisObject);
			this._loaderInfo = null;
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