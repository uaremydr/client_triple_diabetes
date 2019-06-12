module com.data.info {
	export class LoaderInfo {
		/**加载资源路径 */
		private _url:string;
		/**加载返回方法 */
		private _completeFunc:Function;
		/**加载返回对象 */
		private _thisObject:Object;
		/**返回方法参数 */
		private _argsArray:Array<any>;

		public get url():string{
			return this._url;
		}
		public get completeFunc():Function{
			return this._completeFunc;
		}
		public get thisObject():Object{
			return this._thisObject;
		}
		public get argsArray():Array<any>{
			return this._argsArray;
		}

		/**
		 * @param url:				加载路径
		 * @param completeFunc:		加载数据返回方法
		 * @param thisObject:		加载返回方法对象
		 * @param argsArray:		加载返回方法参数
		 */
		public constructor(url:string, completeFunc:Function, thisObject:Object, argsArray:Array<any> = []) {
			this._url = url;
			this._completeFunc = completeFunc;
			this._thisObject = thisObject;
			this._argsArray = argsArray;
		}
	}
}