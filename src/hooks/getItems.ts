import axios from 'axios';

export const getItems = async (url: string) => {
    let data
    try {
        const response = await axios.get(url);
        console.log(response);
        data = response.data;
        console.log({data});

    } catch (error) {
        console.error(error);
    }
    return data
}
