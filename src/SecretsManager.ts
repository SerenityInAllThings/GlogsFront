export default class SecretsManager {
	public static initialize(address: string, username: string, passwd: string) {
		this._instance = new SecretsManager(address, username, passwd);
	}

	private static _instance: SecretsManager;
	public static get instance() {
		if (!this._instance)
			console.error("Before logging, auth is required. Please Initialize using the SecretsManager.initialize");
		return this._instance;
	}

	private constructor(public address: string, public username: string, public passwd: string) { }
}