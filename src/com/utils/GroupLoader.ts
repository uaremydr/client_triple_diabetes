module com.utils {
	import LoaderInfo = com.data.info.LoaderInfo;

	export class GroupLoader {
		/**实例 */
		private static _instance:GroupLoader;
		/**获取实例 */
		public static get instance():GroupLoader{
			if(!this._instance){
				this._instance = new GroupLoader();
			}
			return this._instance;
		}
		/**必须为私有构造方法 */
		private constructor() {
		}
		/**加载资源信息 */
		private _info:LoaderInfo;
		/**加载group */
		public loadGroup(info:LoaderInfo){
			RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
			RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
			this._info = info;
			RES.loadGroup(info.url);
		}
		private onResourceLoadComplete(event:RES.ResourceEvent):void {
			if(event.groupName == this._info.url){
				RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
				RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
				RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
				RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
				this._info.completeFunc.apply(this._info.thisObject, this._info.argsArray);
			}
		}
		private onResourceLoadError(event:RES.ResourceEvent):void {
			Log.showWarn("GroupLoader.onResourceLoadError():" + event.groupName + " has failed to load");
			//跳过当前错误加载
			this.onResourceLoadComplete(event);
		}

		private onResourceProgress(event:RES.ResourceEvent):void {
			if (event.groupName == this._info.url){
			}
		}

		private onItemLoadError(event:RES.ResourceEvent):void {
			Log.showWarn("GroupLoader.onItemLoadError():" + event.resItem.url + " has failed to load");
		}

	}
}