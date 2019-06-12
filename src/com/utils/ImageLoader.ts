module com.utils {
	import Texture = egret.Texture;
	import LoaderInfo = com.data.info.LoaderInfo;

	export class ImageLoader {
		/**实例 */
		private static _instance:ImageLoader;
		/**获取实例 */
		public static get instance():ImageLoader{
			if(!this._instance){
				this._instance = new ImageLoader();
			}
			return this._instance;
		}
		private constructor() {
		}
		/**纹理集信息 */
		private _textureMap:Map<string, Texture> = new Map<string, Texture>();
		/**返回方法信息 */
		private _completeFuncMap:Map<string, Array<LoaderInfo>> = new Map<string, Array<LoaderInfo>>();
		
		/**根据路径获取外部图片纹理集(异步获取)
		 * completeFunc(t:Texture)
		 */
		public async getImgByResUrl(url:string, completeFunc:Function, thisObject:any):Promise<any>{
			let funcArr:Array<LoaderInfo> = this._completeFuncMap.get(url);
			if(funcArr){
				var loaderInfo:LoaderInfo;
				for(var i:number=0; i<funcArr.length; i++){
					loaderInfo = funcArr[i];
					if(loaderInfo.completeFunc == completeFunc){
						Log.showWarn("ImageLoader.getImgByResUrl():" + LanguageUtils.getLang("ImageLoader_1", [url]));
						return;
					}
				}
			}else{
				funcArr = new Array<LoaderInfo>();
				this._completeFuncMap.set(url, funcArr);
			}
			funcArr.push(new LoaderInfo(url, completeFunc, thisObject));
			
			let t:Texture = this._textureMap.get(url);
			if(!t){
				try {
					RES.getResByUrl(url, this.onImageLoadComplete, this, RES.ResourceItem.TYPE_IMAGE);
				} catch (e) {
					if(e.stack){
						Log.showError(e.stack.toString());
					}else{
						Log.showError(e);
					}
				}
			}else{
				this.onImageLoadComplete(t, url);
			}
		}
		/**加载资源 */
		private onImageLoadComplete(t:Texture, url:string):void{
			let funcArr:Array<LoaderInfo> = this._completeFuncMap.get(url);
			if(funcArr){
				var i:number = funcArr.length - 1;
				var info:LoaderInfo;
				for(i; i>=0; i--){
					info = funcArr[i];
					info.completeFunc.apply(info.thisObject, info.argsArray.unshift(t));
				}
			}
			this._completeFuncMap.delete(url);//清空加载信息
		}

	}
}