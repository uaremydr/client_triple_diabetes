module com.view.login {
	import loginBinder = com.module.login.loginBinder;
	import GComponent = fairygui.GComponent;
	import UI_GameLoginPanel = com.module.login.UI_GameLoginPanel;

	export class LoginPanel extends GComponent{
		private _view:UI_GameLoginPanel;
		public get width():number{
			egret.superGetter(LoginPanel, this, "width");
			return this._view.width;
		}
		public constructor() {
			super();
			loginBinder.bindAll();
			this._view = UI_GameLoginPanel.createInstance();
			this.addChild(this._view);
		}
	}
}