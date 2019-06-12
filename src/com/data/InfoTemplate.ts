module com.data.info {
	/**
	 * 所有info主要是用来规范数据格式的
	 */
	export class InfoTemplate{
		/**模板 */
		private _temp:any;

		public get temp():any{
			return this._temp;
		}

		/**
		 * @param temp:	模板
		 */
		public constructor(temp:any) {
			this._temp = temp;
		}
		
	}
}