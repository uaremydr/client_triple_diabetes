module com.utils {
	export class GroupLoader {
		/**加载group名字 */
		private _groupName:string;
		/**加载完成返回方法 */
		private _completeFunc:Function;
		/**返回对象 */
		private _thisObject:any;
		/**返回参数 */
		private _completeFuncArg:any;
		/**加载group */
		public loadGroup(groupName:string, completeFunc:Function, thisObject:any, completeFuncArg?:any){
			RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
			RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
			this._groupName = groupName;
			this._completeFunc = completeFunc;
			this._thisObject = thisObject;
			this._completeFuncArg = completeFuncArg;
			RES.loadGroup(groupName);
		}
		private onResourceLoadComplete(event:RES.ResourceEvent):void {
			if (event.groupName == this._groupName) {
				RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
				RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
				RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
				RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
				this._completeFunc.apply(this._thisObject, this._completeFuncArg);
			}
		}
		private onResourceLoadError(event:RES.ResourceEvent):void {
			Log.showWarn("Group:" + event.groupName + " has failed to load");
			//跳过当前错误加载
			this.onResourceLoadComplete(event);
		}

		private onResourceProgress(event:RES.ResourceEvent):void {
			if (event.groupName == this._groupName) {
			}
		}

		private onItemLoadError(event:RES.ResourceEvent):void {
			Log.showWarn("Url:" + event.resItem.url + " has failed to load");
		}

	}
}