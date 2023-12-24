import React, { useState } from 'react';
import Dashboard from '../../pages/Dashboard';
import { useAuth } from '../../AuthContext';

const Settings = () => {
      const { token, userId } = useAuth();
      const [name, setName] = useState('');
      const [surname, setSurname] = useState('');
      const [password, setPassword] = useState('');

      const handleUpdateProfile = () => {
            fetch(`http://localhost:3001/api/update-users/${userId}`, {
                  method: 'PUT',
                  headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                  },
                  body: JSON.stringify({
                        name,
                        surname,
                        password,
                  }),
            })
                  .then((response) => response.json())
                  .then((data) => {
                        console.log(data);
                  })
                  .catch((error) => console.error('Error updating user profile:', error));
      };

      return (
            <Dashboard>
                  <div className="container flex flex-col w-auto flex-1 gap-20">
                        <h5 className='text-xl font-bold'>PROFILE SETTINGS</h5>
                        <div className="settings w-full h-full flex md:flex-row flex-col md:gap-8 gap-4 items-center">
                              <div className="input-containers flex flex-col w-full flex-1 gap-4">
                                    <div className="input-container flex flex-col gap-1">
                                          <h5>Name:</h5>
                                          <input type="text" placeholder='name' className='outline-none border rounded-md pl-2 py-1' value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="input-container flex flex-col gap-1">
                                          <h5>Surname:</h5>
                                          <input type="text" placeholder='surname' className='outline-none border rounded-md pl-2 py-1' value={surname} onChange={(e) => setSurname(e.target.value)} />
                                    </div>
                                    <div className="input-container flex flex-col gap-1">
                                          <h5>Password:</h5>
                                          <input type="password" placeholder='Password' className='outline-none border rounded-md pl-2 py-1' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                              </div>
                        </div>
                        <div className="update-profile-button">
                              <button className='px-6 py-2 rounded-lg bg-mainDark text-white' onClick={handleUpdateProfile}>Update Profile</button>
                        </div>
                  </div>
            </Dashboard>
      );
};

export default Settings;
