import {useEffect, useState} from "react";

export default function useFetch (url: string) {
    const [itemsList, setData] = useState('')
    const [isLoading, setIsLoading] = useState(null)

    useEffect( () => {
        fetch(url)
            .then(response => {
                if(response.ok){
                    return response.json()
                }

            })
            .then(data => {
                setData(data);
                setIsLoading(true)
                return data
            })
            .catch(e=> console.log(e))
    }, [url]);

    useEffect(() => {
        return () => setIsLoading(false)
    });

    return {itemsList: itemsList, isLoading}
}
