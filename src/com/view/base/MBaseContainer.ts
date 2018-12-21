module com.view.base {
	export class MBaseContainer extends fairygui.GComponent{
		public constructor() {
			super();
		}
		// /**事件列表 */
		// private _eventArr:Array<egret.Event>;
		// /**重写添加事件，保存所有添加事件 */
		// public addEventListener(type:string, listener:Function, thisObject:any):void{
		// 	super.addEventListener(type, listener, thisObject);
		// 	if(!this._eventArr){
		// 		this._eventArr = new Array<egret.Event>();
		// 	}
		// 	this._eventArr.push();
		// }
		/**添加原生显示对象 */
		public addProtoChild(child:egret.DisplayObject):boolean{
			if(child && this._rootContainer.addChild(child)){
				return true;
			}
			return false;
		}
		/**移除原生显示对象 */
		public removeProtoChild(child:egret.DisplayObject):boolean{
			if(child && this._rootContainer.removeChild(child)){
				return true;
			}
			return false;
		}
		/**设置容器是否可点击 */
		public set touchEnabled(value:boolean){
			this._rootContainer.touchEnabled = value;
		}
		/**获取容器是否可点击 */
		public get touchEnabled():boolean{
			return this._rootContainer.touchEnabled;
		}
		/**设置容器子对象是否可点击 */
		public set touchChildren(value:boolean){
			this._rootContainer.touchChildren = value;
		}
		/**获取容器子对象是否可点击 */
		public get touchChildren():boolean{
			return this._rootContainer.touchChildren;
		}

	}
}