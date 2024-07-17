import React from 'react';
import LoginForm from '../molecules/LoginForm';
import cafeImage from '/cafe02.jpg';  

const LoginContainer = () => {
    const handleLogin = () => {
        alert('Inicio de sesión enviado');
    };

    return (
        <div 
            className="flex items-center justify-center h-screen bg-cover bg-center" 
            style={{ backgroundImage: `url(${cafeImage})` }}  
        >
            <div className="bg-customTan p-10 rounded-lg shadow-lg">
                <h1 className="text-2xl text-white  mb-4 text-center">Administrador</h1>
                <LoginForm onSubmit={handleLogin} />
            </div>
        </div>
    );
};

export default LoginContainer;
