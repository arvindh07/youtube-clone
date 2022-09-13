const axios = require("axios");

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    method: 'GET',
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': 'bb90c887camshcbc56ebef74a386p1f745djsnadf3a530ca56',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchData = async (url) => {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data.items;
}

