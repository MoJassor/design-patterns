import Logger from "./Logger";

class Singleton {

	private static instance: Logger;

	constructor() {
		if (!Singleton.instance) {
			Singleton.instance = new Logger();
			Singleton.instance.info('new Singleton instance has been created');
		}
	}

	getInstance() {
		return Singleton.instance;
	}
}

export default Singleton;




