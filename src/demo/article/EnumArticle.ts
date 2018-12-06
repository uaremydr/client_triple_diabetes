module demo.article {
	export class EnumArticle {
		private static base:number = 0;
		private static get NEXT():number{
			return this.base++;
		}
		public static type1:string = "type1" + EnumArticle.NEXT;
		public static type2:string = "type1" + EnumArticle.NEXT;
		public static type3:string = "type1" + EnumArticle.NEXT;
		public static type4:string = "type1" + EnumArticle.NEXT;
		public static type5:string = "type1" + EnumArticle.NEXT;
		public static type6:string = "type1" + EnumArticle.NEXT;

		public constructor() {
		}
	}
}