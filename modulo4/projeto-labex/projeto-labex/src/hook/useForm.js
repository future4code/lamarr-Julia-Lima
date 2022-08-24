import {useState} from "react";

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)
    
    const onChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }
    const clear = () => {
        setForm(initialState) //limpar inputs
    }
    return [form, onChange, clear] 
}

export default useForm;


