module com.demo.pattern {

	export class SingletonPatternDemo {
		/**用私有方法是防止创建多个实例 */
		private constructor() {
		}
		private static _instance:SingletonPatternDemo;
		public static get instance():SingletonPatternDemo{
			return this._instance = this._instance ? this._instance : new SingletonPatternDemo();
		}
		public data:any;
	}
}