module com.data {
	export class PanelInfo {
		/**面板id */
		private _panelId:string;
		/**面板类 */
		private _panelClass:any;
		/**面板资源路径(gui包名) */
		private _panelRes:string;
		public constructor(panelId:string, panelClass, panelRes){
			this._panelId = panelId;
			this._panelClass = panelClass;
			this._panelRes = panelRes;
		}
		public get panelId():string{
			return this._panelId;
		}
		public get panelClass():any{
			return this._panelClass;
		}
		public get panelRes():string{
			return this._panelRes;
		}

	}
}