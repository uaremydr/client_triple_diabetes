module com.type {
	export class TypeContainer {
		private static BASE:number = 0;
		private static get NEXT():string{
			return "TypeContainer" + this.BASE++;
		}
		/**底层 */
		public static BOTTOM:string = TypeContainer.NEXT;
		/**中层 */
		public static MIDDLE:string = TypeContainer.NEXT;
		/**上层 */
		public static TOP:string = TypeContainer.NEXT;
		/**提示层 */
		public static TIP:string = TypeContainer.NEXT;
	}
}