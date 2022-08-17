import React from 'react';
import useForm from '../hook/useForm';

const ApplicationFormPage = () => {
    const [form, onChange] = useForm ({name:"", age:"", text:"", profession:"", country:"" })
    
    const inscrever = (event) => {
        event.preventDefault()
    }

    return (  
        <div>
            <p>Inscreva-se para uma viagem!</p>

            <form onSubmit={inscrever}>
                <label htmlFor="name">Name:</label>
                <input
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={onChange}
                    type="name"
                    required
                />

                <label htmlFor="age">Age:</label>
                <input
                    name="age"
                    id="age"
                    placeholder="age"
                    value={form.age}
                    onChange={onChange}
                    type="number"
                    required
                />

                <label htmlFor="Application Text">Application Text:</label>
                <input
                    name="text"
                    id="Application Text"
                    placeholder="Application Text"
                    value={form.name}
                    onChange={onChange}
                    type="text"
                    required
                />

                <label htmlFor="profession">Profession:</label>
                <input
                    name="profession"
                    id="Profession"
                    placeholder="Profession"
                    value={form.profession}
                    onChange={onChange}
                    type="text"
                    required
                />

                <label htmlFor="country">Country:</label>
                <input
                    name="country"
                    id="country"
                    placeholder="Country"
                    value={form.country}
                    onChange={onChange}
                    type="text"
                    required
                />
                <button type="submit">Inscrever</button>

                   
               
            </form>

        </div>
    
    
    
    )
    
   
    
}

export default ApplicationFormPage;