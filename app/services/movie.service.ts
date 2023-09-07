import axios from "axios";

const API_KEY = "38c5ee3c5f77a123efcd37fc236bdace";
const API_BASE_URL = "https://api.themoviedb.org/3";

const client = axios.create({
    baseURL: API_BASE_URL,
    params: { api_key: API_KEY }
});

export const searchMovies = async (query: string) => {
    try {
        const response = await client.get('/search/movie', {
            params: { query },
        });

        console.log(response);

        if(response.data && response.data.results){
            return response.data.results;
        }
        else{
            console.error("Couldn't get the data");
        }

    } catch (error: any) {
        console.log(error.message);
        return [];
    }
}
