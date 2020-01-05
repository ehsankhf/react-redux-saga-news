import 'whatwg-fetch';
import qs from 'qs';

import config from '../config';

const baseUrl = 'https://newsapi.org';

export default class API {
    static getArticles(source) {
        return fetch(`${baseUrl}/v2/everything?${qs.stringify({apiKey: config.apiKey, source})}`);
    }

    static getSourcesList() {
        return fetch(`${baseUrl}/v2/sources?${qs.stringify({apiKey: config.apiKey})}`);
    }

    static getHeadlines() {
        return fetch(`${baseUrl}/v2/top-headlines?${qs.stringify({apiKey: config.apiKey})}`);
    }
}
