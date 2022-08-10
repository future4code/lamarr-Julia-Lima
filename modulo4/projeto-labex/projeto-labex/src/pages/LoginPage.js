import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()

    const goToAdminHomePage = () => {
        navigate("/admin/trips/list")
    }
    return (
        <div>
            <p>LoginPage</p>
            <button onClick={goToAdminHomePage}>Já estou logado</button>

        </div>
    )

    
}

export default LoginPage;

