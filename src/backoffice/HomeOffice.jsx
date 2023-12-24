import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import Container from '../components/common/container';
import { useAuth } from '../AuthContext';

const HomeOffice = ({ children }) => {
      const { token, userId } = useAuth();
      const [userType, setUserType] = useState(null);
      const [userInfo, setUserInfo] = useState(null);

      const showMainPage = !children;

      return (
            <Layout>
                  <div className="inventor-dashboard w-full md:min-h-[600px] h-auto my-20">
                        <Container>
                              <div className="inventor-dashboard-container w-full h-full flex md:flex-row flex-col gap-2">
                                    <div className="dashboard flex flex-col border rounded-md flex-[2] h-full w-full ">
                                          <div className="profile w-full h-full flex flex-1 pl-4 py-4">

                                                <div className="user-info flex flex-col justify-center gap-3 mt-2 w-full flex-1 items-center">
                                                      <div className="infos flex flex-col gap-1 text-sm justify-end md:w-auto w-full items-end md:pr-0 pr-4">
                                                            <p>Manage Portal</p>
                                                      </div>
                                                      <div className="user-type flex w-full justify-end pr-4">
                                                            <p>Back Office</p>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="dashboard-links w-full h-auto border-t pb-60">
                                                <a href="/backoffice/dashobard">
                                                      <div className="link w-full border-b flex pl-6 py-2 hover:bg-slate-50">
                                                            <h5>Dashboard</h5>
                                                      </div>
                                                </a>
                                                <a href="/backoffice/users">
                                                      <div className="link w-full border-b flex pl-6 py-2 hover:bg-slate-50">
                                                            <h5>Users</h5>
                                                      </div>
                                                </a>
                                                <a href="/backoffice/kyc">
                                                      <div className="link w-full border-b flex pl-6 py-2 hover:bg-slate-50">
                                                            <h5>KYC Application</h5>
                                                      </div>
                                                </a>
                                                <a href="/backoffice/investment">
                                                      <div className="link w-full border-b flex pl-6 py-2 hover:bg-slate-50">
                                                            <h5>Investments</h5>
                                                      </div>
                                                </a>
                                                <a href="/backoffice/settings">
                                                      <div className="link w-full border-b flex pl-6 py-2 hover:bg-slate-50">
                                                            <h5>Settings</h5>
                                                      </div>
                                                </a>
                                          </div>
                                    </div>
                                    <div className="page flex-[7] w-full h-auto border rounded flex px-8 py-8">{showMainPage ? (
                                          // Ana sayfa içeriği buraya gelecek
                                          <h1>Admin Dashboard Main Page</h1>
                                    ) : (
                                          // Menü içeriği buraya gelecek
                                          { children }
                                    )}</div>
                              </div>
                        </Container>
                  </div>
            </Layout>
      )
}

export default HomeOffice;
