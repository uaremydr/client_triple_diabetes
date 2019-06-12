module com.type {
	export class TypePanelId {
		private static BASE:number = 0;
		private static get NEXT():string{
			return "TypePanelId" + this.BASE++;
		}
		/**登录面板 */
		public static LOGIN:string = TypePanelId.NEXT;
		/**测试报错 */
		public static TEST:string = TypePanelId.NEXT;
	}
}