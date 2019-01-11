module com.data {
	export class PanelInfo {
		/**面板id */
		private _panelId:string;
		/**面板类 */
		private _panelClass:any;
		/**资源路径(default.res.json中group名) */
		private _panelGroup:string;
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
		public get panelLayer():string{
			return this._panelLayer;
		}
		/**
		 * @param panelId:			面板id
		 * @param panelClass:		面板注册类
		 * @param panelRes:			面板资源group名字
		 * @param panelLayer:		面板层级
		 */
		public constructor(panelId:string, panelClass:any, panelRes:string, panelLayer:string){
			this._panelId = panelId;
			this._panelClass = panelClass;
			this._panelGroup = panelRes;
			this._panelLayer = panelLayer;
		}

	}
}