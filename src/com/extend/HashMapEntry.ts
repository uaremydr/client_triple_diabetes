module com.extend {
	export class HashMapEntry<K, V> {
		public constructor() {
		}
		private _key:K;
		private _val:V;
		public get key():K{
			return this._key;
		}
		public set key(k:K){
			this._key = k;
		}
		public get val():V{
			return this._val;
		}
		public set val(v:V){
			this._val = v;
		}
	}
}