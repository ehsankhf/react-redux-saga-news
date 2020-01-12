import 'whatwg-fetch';
import qs from 'qs';

import config from '../../config';

const baseUrl = 'https://newsapi.org';

export default class API {
    static async getArticles(sources) {
        const response = await fetch(`${baseUrl}/v2/everything?${qs.stringify({
            apiKey: config.apiKey,
            language: 'en',
            q: '*',
            sources: sources === '*' ? undefined : sources
        })}`);
        const {articles} = await response.json();
        return articles
    }

    static async getSourcesList() {
        const response = await fetch(`${baseUrl}/v2/sources?${qs.stringify({
            apiKey: config.apiKey,
            language: 'en'
        })}`);

        const {sources} = await response.json();
        return sources
    }

    static async getHeadlines() {
        const response = await fetch(`${baseUrl}/v2/top-headlines?${qs.stringify({
            apiKey: config.apiKey,
            language: 'en'
        })}`);

        const {articles} = await response.json();
        return articles
    }
}
