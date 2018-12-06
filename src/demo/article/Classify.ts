module demo.article {
	export class Classify {
		private _type:string;
		private _articles:Array<Article>;
		public constructor() {

		}
		public setData(type:string, articles:Array<Article>):void{
			this._type = type;
			this._articles = articles;
			for(let i in this._articles){
				this._articles[i].type = this._type;
			}
		}
	}
}