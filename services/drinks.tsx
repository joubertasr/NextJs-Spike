import axios from 'axios';
import { URLSearchParams } from 'url';

import fetcher from './fetcher';

interface getOptions {
    searchTerm:     string,
    pageNumber:     number,
    pageSize:       number
  }
  


export default class Drinks {
    public static endpoint = 'https://mock-api.drinks.test.siliconrhino.io/events';

    public static async getDrinksFromAPI(options: getOptions) {
        let url = this.endpoint;
        const urlParams = new URLSearchParams();

        if (options.hasOwnProperty('searchTerm') && options.searchTerm) {
            urlParams.set('search', options.searchTerm);
        }
        if (options.hasOwnProperty('pageNumber') && options.pageNumber) {
            urlParams.set('page', options.pageNumber.toString());
        }
        if (options.hasOwnProperty('pageSize') && options.pageSize) {
            urlParams.set('pageSize', options.pageSize.toString());
        }

        const fetchUrl = url + '?' + urlParams.toString();
        console.log('??????', fetchUrl);
        const drinksRes = await fetcher(fetchUrl);
        console.log('    ::', drinksRes.data);
        //return [];
        return drinksRes.data;
    }
};