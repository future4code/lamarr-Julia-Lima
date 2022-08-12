import axios from "axios";
import { useState, useEffect } from "react";

const UseRequestData = () => {
    const [requestData, setRequestData] = useState([])

    useEffect(() => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips").then(response => {
            setRequestData(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    return requestData;
}
export default UseRequestData;