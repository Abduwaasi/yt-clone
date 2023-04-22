const baseUrl = "https://youtube-v31.p.rapidapi.com"
import getConfig from "next/config";

export default async function fetchData(url) {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
            // 'X-RapidAPI-Key': '7dfa3fcee4mshba1de027cde6fc4p1da804jsn71befef17349',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }

    };
    try {
        const res = await fetch(`${baseUrl}/${url}`, options)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}