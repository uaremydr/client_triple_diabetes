module com.extend {
	/**简易HashMap泛型实现 */
	export class HashMap<K, V> {
		/**存储列表 */
		private _list:Entry<K, V>[];
		public constructor() {
			this.clear();
		}
		/**clone复制当前对象 */
		public clone():HashMap<K, V>{
			let map:HashMap<K, V> = new HashMap<K, V>();
			if(this._list && this._list.length > 0){
				for(let i in this._list){
					let e:Entry<K, V> = this._list[i];
					map.put(e.key, e.val);
				}
			}
			return map;
		}
		/**获取长度 */
		public get length():number{
			return this._list.length;
		}
		/**是否存在当前键 */
		public containsKey(k:K):boolean{
			let i:number = this.getIndexByKey(k);
			return i != -1;
		}
		/**是否存在当前值 */
		public containsValue(v:V):boolean{
			let i:number = this.getIndexByValue(v);
			return i != -1;
		}
		/**移除键值对 */
		public remove(k:K):Entry<K, V>{
			let i:number = this.getIndexByKey(k);
			if(i != -1){
				let d:Entry<K, V> = this._list.splice(i, 1)[0];
				return d;
			}
			return null;
		}
		/**添加键值对 */
		public put(k:K, v:V):void{
			let d:Entry<K, V> = new Entry<K, V>();
			d.key = k;
			d.val = v;
			let i:number = this.getIndexByKey(k);
			if(i == -1){//如果不存在，则添加值
				this._list.push(d);
			}else{//如果存在，则刷新值
				this._list[i] = d;
			}
		}
		/**根据key值获取val值 */
		public get(k:K):V{
			if(this._list && this._list.length > 0){
				for(let i in this._list){
					let e:Entry<K, V> = this._list[i];
					if(e.key == k){
						return e.val;
					}
				}
			}
			return null;
		}
		/**根据key值获取index值 */
		private getIndexByKey(k:K):number{
			if(this._list && this._list.length > 0){
				for(let i in this._list){
					let e:Entry<K, V> = this._list[i];
					if(e.key == k){
						return Number(i);
					}
				}
			}
			return -1;
		}
		/**根据val值获取index值 */
		private getIndexByValue(v:V):number{
			if(this._list && this._list.length > 0){
				for(let i in this._list){
					let e:Entry<K, V> = this._list[i];
					if(e.val == v){
						return Number(i);
					}
				}
			}
			return -1;
		}
		/**清理HashMap */
		public clear():void{
			this._list = [];
		}
	}
}