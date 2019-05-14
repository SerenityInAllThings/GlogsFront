import querystring, { ParsedUrlQueryInput } from 'querystring';

export function request(method: HttpMethod, url: string, payload: object, querystringobj: ParsedUrlQueryInput) {
	return new Promise<any>((resolve, reject) => {
		const xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = () => { 
			if (xmlHttp.readyState == 4)
			{
				if (xmlHttp.status >= 200 && xmlHttp.status < 300)
					resolve(xmlHttp.responseText);
				else
					reject(xmlHttp.responseText);
			}
		}
		if (querystringobj)
			url = url += querystring.stringify(querystringobj)
		xmlHttp.open(method, url, true); // true for asynchronous 
		if (payload)
			xmlHttp.send(JSON.stringify(payload));
		else
			xmlHttp.send(null);

	});
}

export enum HttpMethod {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
}