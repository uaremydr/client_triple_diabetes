module com.data.center {
	export class CenterTemplate{
		/**实例 */
		private static _instance:CenterTemplate;
		/**获取实例 */
		public static get instance():CenterTemplate{
			if(!this._instance){
				this._instance = new CenterTemplate();
			}
			return this._instance;
		}
		/**必须为私有构造方法 */
		private constructor() {
		}
		
	}
}