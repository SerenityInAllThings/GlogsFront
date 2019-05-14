export default class AuthManager {
	private static bearerLocalStorageKey = 'GLOGSBearer';
	private static _instance: AuthManager;
	public static get instance(): AuthManager {
		if (!this._instance)
			this._instance = new AuthManager();
		return this._instance;
	}

	private _bearer: string;
	public get bearer() { return this._bearer; }

	private constructor() {
		const storedBearer = window.localStorage.getItem(AuthManager.bearerLocalStorageKey);
		this._bearer = storedBearer || this.getBearer();
			
	}

	private getBearer(): string {
		
	}
}