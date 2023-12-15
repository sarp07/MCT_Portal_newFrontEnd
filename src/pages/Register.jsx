import React, { useState } from 'react';
import Layout from '../Layout';
import { useNavigate } from 'react-router-dom';
import Container from '../components/common/container.jsx';
import {
      useAddress,
} from "@thirdweb-dev/react";

const Register = () => {
      const navigate = useNavigate();
      const address = useAddress();
      const [activeForm, setActiveForm] = useState('investor');
      const [name, setName] = useState('');
      const [surname, setSurname] = useState('');
      const [email, setEmail] = useState('');
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [successMessage, setSuccessMessage] = useState('');
      const [errorMessage, setErrorMessage] = useState('');

      const handleButtonClick = (formType) => {
            setActiveForm(formType);
      };

      const getTypeForActiveForm = () => {
            return activeForm === 'investor' ? 3 : 2;
      };

      const handleRegisterButtonClick = () => {
            const user = {
                  username: username,
                  name: name,
                  surname: surname,
                  email: email,
                  password: password,
                  walletAddress: address,
                  type: getTypeForActiveForm(),
            };

            fetch('http://localhost:3001/api/add-user', {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(user),
            })
                  .then(response => response.json())
                  .then(data => {
                        console.log(data);

                        if (data.message === 'User added successfully') {
                              // Başarılı kayıt durumunda successMessage state'ini güncelle
                              setSuccessMessage('User added successfully');

                              // 3 saniye sonra /login sayfasına yönlendir
                              setTimeout(() => {
                                    navigate('/login');
                              }, 3000);
                        } else {
                              // Hata durumunda errorMessage state'ini güncelle
                              setErrorMessage('Error registering user');
                        }
                  })
                  .catch(error => {
                        console.error('Error registering user:', error);
                        // Hata durumunda errorMessage state'ini güncelle
                        setErrorMessage('Error registering user');
                  });
      };
      return (
            <Layout>
                  <Container>
                        <div className="register my-6 w-5/6 mx-auto flex flex-col gap-6">
                              <div className="buttons flex border">
                                    <div className={`button-container border-r flex-1 justify-center items-center py-4 cursor-pointer ${activeForm === 'investor' ? 'bg-mainDark text-white' : ''
                                          }`} onClick={() => handleButtonClick('investor')}>
                                          <div className="button flex justify-center items-center">
                                                <button className='w-full h-full'>Investor Register</button>
                                          </div>
                                    </div>
                                    <div className={`button-container border-r flex-1 justify-center items-center py-4 cursor-pointer ${activeForm === 'borrower' ? 'bg-mainDark text-white' : ''
                                          }`} onClick={() => handleButtonClick('borrower')}>
                                          <div className="button flex justify-center items-center">
                                                <button className='w-full h-full'>Borrower Register</button>
                                          </div>
                                    </div>
                              </div>
                              {activeForm === 'investor' && (
                                    <div className="investor-register h-auto w-full border flex justify-center items-center flex-col py-20">
                                          <div className="title text-center pb-8">
                                                <h5 className='text-lg'>Register to be an investor</h5>
                                          </div>
                                          <div className="input-parts flex justify-between w-full gap-12 px-12 mt-6 md:flex-row flex-col">
                                                <div className="left-part flex-1 w-full">
                                                      <div className="inputs flex flex-col gap-4 flex-1">
                                                            <div className="input flex flex-col w-full">
                                                                  <p className='input-text'>Name</p>
                                                                  <input name='name' type="text" className='border rounded-md py-1 outline-none pl-2' onChange={(e) => setName(e.target.value)} />
                                                            </div>
                                                            <div className="input flex flex-col">
                                                                  <p className='input-text'>Surname</p>
                                                                  <input name='surname' type="text" className='border rounded-md py-1 outline-none pl-2' onChange={(e) => setSurname(e.target.value)} />
                                                            </div>
                                                            <div className="input flex flex-col">
                                                                  <p className='input-text'>Email</p>
                                                                  <input name='email' type="email" className='border rounded-md py-1 outline-none pl-2' onChange={(e) => setEmail(e.target.value)} />
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="right-part flex-1 w-full">
                                                      <div className="inputs flex flex-col gap-4 flex-1">
                                                            <div className="input flex flex-col w-full">
                                                                  <p className='input-text'>Username</p>
                                                                  <input name='username' type="text" className='border rounded-md py-1 outline-none pl-2' onChange={(e) => setUsername(e.target.value)} />
                                                            </div>
                                                            <div className="input flex flex-col">
                                                                  <p className='input-text'>Password</p>
                                                                  <input name='password' type="password" className='border rounded-md py-1 outline-none pl-2' onChange={(e) => setPassword(e.target.value)} />
                                                            </div>
                                                            <div className="input flex flex-col">
                                                                  <p className='input-text'>Wallet Address</p>
                                                                  <label type="text" className='border rounded-md py-1 outline-none pl-2'>{address}</label>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="register-button pt-16">
                                                <button className='px-4 py-2 bg-mainDark text-white rounded-lg' onClick={handleRegisterButtonClick}>
                                                      Be an Investor
                                                </button>
                                          </div>
                                          {/* Success message */}
                                          {successMessage && <p className="text-green-500">{successMessage}</p>}
                                          {/* Error message */}
                                          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
                                    </div>
                              )}
                              {activeForm === 'borrower' && (
                                    <div className="borrower-register h-auto w-full border flex justify-center items-center flex-col py-20">
                                          <div className="title text-center pb-8">
                                                <h5 className='text-lg'>Register to be a borrower</h5>
                                          </div>
                                          <div className="input-parts flex justify-between w-full gap-12 px-12 mt-6 md:flex-row flex-col">
                                                <div className="left-part flex-1 w-full">
                                                      <div className="inputs flex flex-col gap-4 flex-1">
                                                            <div className="input flex flex-col w-full">
                                                                  <p className='input-text'>Name</p>
                                                                  <input name='name' type="text" className='border rounded-md py-1 outline-none pl-2' onChange={(e) => setName(e.target.value)} />
                                                            </div>
                                                            <div className="input flex flex-col">
                                                                  <p className='input-text'>Surname</p>
                                                                  <input name='surname' type="text" className='border rounded-md py-1 outline-none pl-2' onChange={(e) => setSurname(e.target.value)} />
                                                            </div>
                                                            <div className="input flex flex-col">
                                                                  <p className='input-text'>Email</p>
                                                                  <input name='email' type="text" className='border rounded-md py-1 outline-none pl-2' onChange={(e) => setEmail(e.target.value)} />
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="right-part flex-1 w-full">
                                                      <div className="inputs flex flex-col gap-4 flex-1">
                                                            <div className="input flex flex-col w-full">
                                                                  <p className='input-text'>Username</p>
                                                                  <input name='username' type="text" className='border rounded-md py-1 outline-none pl-2' onChange={(e) => setUsername(e.target.value)} />
                                                            </div>
                                                            <div className="input flex flex-col">
                                                                  <p className='input-text'>Password</p>
                                                                  <input name='password' type="text" className='border rounded-md py-1 outline-none pl-2' onChange={(e) => setPassword(e.target.value)} />
                                                            </div>
                                                            <div className="input flex flex-col">
                                                                  <p className='input-text'>Wallet Address</p>
                                                                  <label type="text" className='border rounded-md py-1 outline-none pl-2'>{address}</label>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="register-button pt-16">
                                                <button className='px-4 py-2 bg-mainDark text-white rounded-lg' onClick={handleRegisterButtonClick}>
                                                      Be a Borrower
                                                </button>
                                          </div>
                                          {/* Success message */}
                                          {successMessage && <p className="text-green-500">{successMessage}</p>}
                                          {/* Error message */}
                                          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
                                    </div>
                              )}
                        </div>
                  </Container>
            </Layout>
      )
}

export default Register
