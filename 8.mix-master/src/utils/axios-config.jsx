import axios from 'axios';

export const globalAxiosInstance = axios.create({
    baseURL:'https://www.thecocktaildb.com/api/json/v1/1/',

})


export const newsletterAxiosInstance = axios.create({
    baseURL:'https://www.course-api.com/cocktails-newsletter'
})