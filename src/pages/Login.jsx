import React, { useState } from 'react';
import Layout from '../Layout';
import Container from '../components/common/container';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [values, setValues] = useState({
        username: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState(null);

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:3001/api/users?username=${values.username}&password=${values.password}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('Data from server:', data);

                if (Array.isArray(data) && data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        const user = data[i];

                        if (user.username === values.username && user.password === values.password) {
                            // Giriş başarılıysa, kullanıcıyı oturum açmış gibi işaretleyin
                            login("mockedAuthToken", user.userId); // Burada gerçek token ve userId almalısınız
                            setErrors({});
                            setSuccessMessage("Login successful!");
                            setTimeout(() => {
                                setSuccessMessage(null);
                                navigate('/dashboard');
                            }, 3000);
                            return;
                        }
                    }

                    setErrors({ message: "Invalid Username or Password" });
                } else {
                    setErrors({ message: "Invalid Username or Password" });
                }
            })
            .catch(error => {
                console.error('Error during login:', error);
                setErrors({ message: "An error occurred during login" });
            });
    };

    return (
        <Layout>
            <Container>
                <div className="investor-register h-auto w-full border flex justify-center items-center flex-col py-20">
                    <div className="title text-center pb-8">
                        <h5 className='text-lg'>Login</h5>
                        {successMessage && <p className="text-green-500">{successMessage}</p>}
                        {errors.message && <p className='text-red-500'>{errors.message}</p>}
                    </div>
                    <div className="input-parts flex justify-between w-1/2 gap-12 px-12 mt-6 md:flex-row flex-col">
                        <div className="right-part flex-1 w-full">
                            <div className="inputs flex flex-col gap-4 flex-1">
                                <div className="input flex flex-col w-full">
                                    <p className='input-text'>Username</p>
                                    <input
                                        type="text"
                                        name="username"
                                        className='border rounded-md py-1 outline-none pl-2'
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="input flex flex-col">
                                    <p className='input-text'>Password</p>
                                    <input
                                        type="password"
                                        name="password"
                                        className='border rounded-md py-1 outline-none pl-2'
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="register-button pt-16">
                        <button onClick={handleSubmit} className='px-4 py-2 bg-mainDark text-white rounded-lg'>Login</button>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default Login;
