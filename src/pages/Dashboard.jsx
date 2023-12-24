import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import Container from '../components/common/container';
import ProfileImage from '../images/heroimages/happyperson1.png';
import { useAuth } from '../AuthContext';

const Dashboard = ({ children }) => {
      const { token, userId } = useAuth();
      const [userType, setUserType] = useState(null);
      const [userInfo, setUserInfo] = useState(null);

      useEffect(() => {
            checkUserType();
            fetchUserInfo();
      }, [token, userId]);

      const checkUserType = () => {
            if (token) {
                  setUserType(2); // Bu kısmı güncelleyebilirsiniz, kullanıcı tipi nereden alınıyor?
            } else {
                  setUserType(null);
            }
      };

      const fetchUserInfo = () => {
            // Eğer token varsa, kullanıcının bilgilerini getir
            if (token) {
                  fetch('http://localhost:3001/api/users', {
                        method: 'GET',
                        headers: {
                              'Content-Type': 'application/json',
                              Authorization: `Bearer ${token}`,
                        },
                  })
                        .then((response) => response.json())
                        .then((data) => {


                              const user = data.find((user) => user.userId === userId);

                              if (user) {
                                    setUserInfo(user);
                                    setUserType(user.type);
                              } else {
                                    console.error('User not found');
                              }
                        })
                        .catch((error) => console.error('Error fetching user info:', error));
            }
      };

      return (
            <Layout>
                  <div className="inventor-dashboard w-full md:min-h-[600px] h-auto my-20">
                        <Container>
                              <div className="inventor-dashboard-container w-full h-full flex md:flex-row flex-col gap-2">
                                    <div className="dashboard flex flex-col border rounded-md flex-[2] h-full w-full ">
                                          <div className="profile w-full h-full flex flex-1 pl-4 py-4">
                                                <div className="profile-image w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                                                      <img src={ProfileImage} alt="profile" className="object-cover rounded-full w-24 h-24" />
                                                </div>
                                                <div className="user-info flex flex-col justify-center gap-3 mt-2 w-full flex-1 items-center">
                                                      <div className="infos flex flex-col gap-1 text-sm justify-end md:w-auto w-full items-end md:pr-0 pr-4">
                                                            <p>{userInfo?.username}</p>
                                                            <p className="flex justify-end">{userInfo?.name} <br /> {userInfo?.surname}</p>
                                                      </div>
                                                      <div className="user-type flex w-full justify-end pr-4">
                                                            {userType !== null && (
                                                                  <p className={`text-xs text-right pt-2 ${userType === 2 ? 'text-mainColor' : 'text-mainDark'}`}>
                                                                        {userType === 2 ? 'Borrower' : 'Investor'}
                                                                  </p>
                                                            )}
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="dashboard-links w-full h-auto border-t pb-60">
                                                <a href="/dashboard/wallet">
                                                      <div className="link w-full border-b flex pl-6 py-2 hover:bg-slate-50">
                                                            <h5>WALLET</h5>
                                                      </div>
                                                </a>
                                                <a href="/dashboard/kyc">
                                                      <div className="link w-full border-b flex pl-6 py-2 hover:bg-slate-50">
                                                            <h5>KYC</h5>
                                                      </div>
                                                </a>
                                                {userType === 2 && (
                                                      <a href="/dashboard/transactions">
                                                            <div className="link w-full flex pl-6 py-2 border-b hover:bg-slate-50">
                                                                  <h5>LOAN APPLICATION</h5>
                                                            </div>
                                                      </a>
                                                )}
                                                {userType === 3 && (
                                                      <>
                                                            <a href="/dashboard/investment">
                                                                  <div className="link w-full border-b flex pl-6 py-2 hover:bg-slate-50">
                                                                        <h5>INVESTMENT</h5>
                                                                  </div>
                                                            </a>
                                                            <a href="">
                                                                  <div className="link w-full border-b flex pl-6 py-2 hover:bg-slate-50">
                                                                        <h5>STAKE</h5>
                                                                  </div>
                                                            </a>
                                                      </>
                                                )}
                                                <a href="/dashboard/settings">
                                                      <div className="link w-full border-b flex pl-6 py-2 hover:bg-slate-50">
                                                            <h5>SETTINGS</h5>
                                                      </div>
                                                </a>
                                          </div>
                                    </div>
                                    <div className="page flex-[7] w-full h-auto border rounded flex px-8 py-8">{children}</div>
                              </div>
                        </Container>
                  </div>
            </Layout>
      );
};

export default Dashboard;
