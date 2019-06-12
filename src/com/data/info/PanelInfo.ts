module com.data {
	export class PanelInfo {
		/**面板id */
		private _panelId:string;
		/**面板类 */
		private _panelClass:any;
		/**资源路径(default.res.json中group名) */
		private _panelGroup:string;
		/**gui资源名字 */
		private _panelGui:string;
		/**面板层级 */
		private _panelLayer:any;

		public get panelId():string{
			return this._panelId;
		}
		public get panelClass():any{
			return this._panelClass;
		}
		public get panelGroup():string{
			return this._panelGroup;
		}
		public get panelGui():string{
			return this._panelGui;
		}
		public get panelLayer():string{
			return this._panelLayer;
		}
		/**
		 * @param panelId:			面板id
		 * @param panelClass:		面板注册类
		 * @param panelGroup:		面板资源group名字
		 * @param panelGui:			gui资源名字
		 * @param panelLayer:		面板层级
		 */
		public constructor(panelId:string, panelClass:any, panelGroup:string, panelGui:string, panelLayer:string){
			this._panelId = panelId;
			this._panelClass = panelClass;
			this._panelGroup = panelGroup;
			this._panelGui = panelGui;
			this._panelLayer = panelLayer;
		}

	}
}