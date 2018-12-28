module com.type {
	export class TypeTemplate {
		private static BASE:number = 0;
		private static get NEXT():string{
			return "TypeTemplate" + this.BASE++;
		}
		/**例子 */
		public static EXAMPLE:string = TypeTemplate.NEXT;
	}
}