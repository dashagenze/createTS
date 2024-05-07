import {useEffect, useState} from "react";
import { IItem } from '../types/IItem.ts'

export default function useFetch (url: string): {itemsList: IItem[], isLoading: boolean} {
    const [itemsList, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

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
