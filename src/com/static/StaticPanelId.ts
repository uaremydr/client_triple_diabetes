class StaticPanelId {
	private static BASE:number = 0;
	private static get NEXT():string{
		return "StaticPanelId" + this.BASE++;
	}
	/**登录面板 */
	public static LOGIN:string = StaticPanelId.NEXT;
}