module com.data {
	export class PanelInfo {
		/**面板id */
		private _panelId:string;
		/**面板类 */
		private _panelClass:any;
		/**资源路径(default.res.json中group名) */
		private _panelGroup:string;

		public get panelId():string{
			return this._panelId;
		}
		public get panelClass():any{
			return this._panelClass;
		}
		public get panelGroup():string{
			return this._panelGroup;
		}

		public constructor(panelId:string, panelClass, panelRes){
			this._panelId = panelId;
			this._panelClass = panelClass;
			this._panelGroup = panelRes;
		}

	}
}