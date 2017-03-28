export class Singleton {
	static registry = {};

	static get(name:string){
		if ( Singleton.registry[name] === undefined ) {
			return {};
		} else {
			return Singleton.registry[name];
		}
	}

	static set(name:string, obj: any){
		Singleton.registry[name] = obj;
	}
}
