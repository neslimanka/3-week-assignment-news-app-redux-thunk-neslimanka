import * as actionTypes from "./actionTypes";
import axios from "axios";

const language = "tr";
const API_KEY = "f63270d84d6948238ff09ccb43a9fa46";
export function getNewsPageSuccess(category){
    return {type:actionTypes.GET_NEWSPAGE_SUCCESS,payload:category}
}
export function getNews(category){
    return async(dispatch)=>{
        const response =await axios(`https://newsapi.org/v2/everything?language=${language}&q=${category}&apiKey=${API_KEY}`);
        const data=await response.data;
        console.log(data)
        dispatch();
        return data;
    
    }
}