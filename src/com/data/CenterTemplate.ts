module com.data {
	
	export class CenterTemplate{
		private static _instance:CenterTemplate;

		public static get instance():CenterTemplate{
			if(!this._instance){
				this._instance = new CenterTemplate();
			}
			return this._instance;
		}
		
		private constructor() {
		}
		
	}
}