/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module com.module.login {

	export class UI_GameLoginPanel extends fairygui.GComponent {

		public m_btn_start:fairygui.GButton;
		public m_btn_test1:fairygui.GButton;
		public m_btn_test2:fairygui.GButton;

		public static URL:string = "ui://0obbefo5nynw1";

		public static createInstance():UI_GameLoginPanel {
			return <UI_GameLoginPanel><any>(fairygui.UIPackage.createObject("login","GameLoginPanel"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_btn_start = <fairygui.GButton><any>(this.getChild("btn_start"));
			this.m_btn_test1 = <fairygui.GButton><any>(this.getChild("btn_test1"));
			this.m_btn_test2 = <fairygui.GButton><any>(this.getChild("btn_test2"));
		}
	}
}