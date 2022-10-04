import axios from "axios";
import { useState, useEffect } from "react";

export function useRequestData (url) {
    const [data, setData] = useState(undefined)  // variável de estado

    const [isLoading, setIsLoading] = useState (false)

    const [error, setError]=useState("")

    useEffect(() => {
        setIsLoading(true)
        axios.get(url).then(response => {
            setIsLoading(false) 
            setData(response.data)
        }).catch(error => {
            setIsLoading(false) 
            console.log(error)
            setError(error) 
        })
    }, [url])

    return [data, isLoading, error] ;
}
