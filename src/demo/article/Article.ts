module demo.article {
	export class Article {
		private _type:string;
		private _content:string;
		public constructor() {
		}
		public set type(t:string){
			this._type = t;
		}
		public set content(c:string){
			this._content = c;
		}
	}
}