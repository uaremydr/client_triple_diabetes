module com.utils {
	import PanelInfo = com.data.PanelInfo;
	import LoginPanel = com.view.login.LoginPanel;
	import TypePanelId = com.type.TypePanelId;
	import TypeContainer = com.type.TypeContainer;

	export class PanelRegister {
		/**实例 */
		private static _instance:PanelRegister;
		/**获取实例 */
		public static get instance():PanelRegister{
			if(!this._instance){
				this._instance = new PanelRegister();
			}
			return this._instance;
		}
		/**必须为私有构造方法 */
		private constructor() {
		}
		/**面板信息 */
		private _panelInfoMap:Map<string, PanelInfo> = new Map<string, PanelInfo>();

		/**删除注册信息 */
		public deletePanelInfo(panelId:string):boolean{
			return this._panelInfoMap.delete(panelId);
		}
		/**注册面板信息 */
		public registerPanelInfo():void{
			this.registerInfo(TypePanelId.LOGIN, new PanelInfo(TypePanelId.LOGIN, LoginPanel, "login", "login", TypeContainer.BOTTOM));
		}
		private registerInfo(panelId:string, panelInfo:PanelInfo):void{
			this._panelInfoMap.set(panelId, panelInfo);
		}
		/**根据面板id获取面板信息 */
		public getPanelInfoById(panelId:string):PanelInfo{
			return this._panelInfoMap.get(panelId);
		}

	}
}