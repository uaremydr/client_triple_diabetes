module com.data.center {
	/**
	 * 所有center主要是用来存数据的
	 */
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