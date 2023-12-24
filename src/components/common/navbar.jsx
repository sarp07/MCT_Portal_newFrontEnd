import React, { useState, useEffect } from 'react';
import Container from './container';
import Logo from '../../images/logowithtext.png';
import { FiMenu } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import {
      ConnectWallet,
      darkTheme,
      useAddress
    } from "@thirdweb-dev/react";
import { AuthProvider, useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
      const address = useAddress();
      const navigate = useNavigate();
      const { login, logout, token } = useAuth();
      const [mobileNavbar, setMobileNavbar] = useState(false);
      const [existingData, setExistingData] = useState([]);
      const formattedAddress = address ? `${address.slice(0, 5)}...${address.slice(-3)}` : '';

      useEffect(() => {
            fetch('http://localhost:3001/api/users')
                  .then((response) => response.json())
                  .then((data) => setExistingData(data))
                  .catch((error) => console.error('Error fetching data:', error));
      }, []);

      const checkWalletStatus = () => {
            if (!address) {
                  return null; // Cüzdan bağlı değilse, herhangi bir bağlantı gösterme
            }

            const userExists = existingData.some((user) => user.walletAddress === address);

            if (!userExists) {
                  return (
                        <>
                              <a href="/register">Register</a>
                        </>
                  );
            }

            if (token) {
                  return (
                        <>
                              <a href="/dashboard">Profile</a>
                              <a style={{ cursor: 'pointer' }} onClick={handleLogout}>
                                    Logout
                              </a>
                        </>
                  );
            } else {
                  return (
                        <>
                              <a href="/login">Login</a>
                        </>
                  );
            }
      };

      const handleMobileNavbar = () => {
            setMobileNavbar(!mobileNavbar);
      };

      const handleLogout = () => {
            logout();
            navigate('/');
      };

      return (
            <div className="navbar w-full h-20 bg-white border-b relative">
                  <Container>
                        <div className="navbar-inside flex justify-between items-center h-full">
                              <div className="logo w-32 h-auto flex items-center">
                                    <a href="/">
                                          <img src={Logo} alt="logo" />
                                    </a>
                              </div>
                              <div className="links-and-button flex h-full items-center md:gap-12 gap-4">
                                    <div className="links gap-7 h-full items-center text-[15px] md:flex hidden">
                                          <a href="/">HOME</a>
                                          {checkWalletStatus()}
                                    </div>
                                    <ConnectWallet
                                          theme={darkTheme({
                                                colors: {
                                                      modalBg: "#363636",
                                                      dropdownBg: "#363636",
                                                      borderColor: "#3385FF",
                                                      accentText: "#0c0cb5",
                                                      accentButtonBg: "#0c0cb5",
                                                      separatorLine: "#363636",
                                                      danger: "#e54d2e",
                                                      primaryButtonBg: "#ededef",
                                                      accentButtonText: "#ededef",
                                                      primaryButtonText: "#7e7d86",
                                                      secondaryButtonBg: "#22232b",
                                                      secondaryButtonText: "#ededef",
                                                      connectedButtonBgHover: "#1b1c22",
                                                      skeletonBg: "#22232b",
                                                },
                                          })}
                                          btnTitle={"Connect"}
                                          switchToActiveChain={true}
                                          modalSize={"wide"}
                                          welcomeScreen={{
                                                img: {
                                                      src: "/mctLogo.png",
                                                      width: 200,
                                                      height: 200,
                                                },
                                                title: "Welcome To Micro Credit Portal",
                                                subtitle:
                                                      "This portal made with 💙 by Solazan and Baran for MCT Project. This DAPP running on Haq Network.",
                                          }}
                                          modalTitleIconUrl={"/mctLogo.png"}
                                          privacyPolicyUrl={
                                                "https://microcredittoken.com/privacy"
                                          }
                                    />
                                    <button className="md:hidden" onClick={handleMobileNavbar}>
                                          <FiMenu className="w-10 h-auto" color="#173b62" />
                                    </button>
                              </div>
                              {mobileNavbar ? (
                                    <div className="md:hidden flex flex-col absolute mobile-navbar h-auto top-20 left-0 w-screen bg-mainDark z-50 font-bold text-white">
                                          <a href="/">
                                                <div className="link w-full py-4 pl-4 border-b-slate-400 border-b">
                                                      <h1>HOME</h1>
                                                </div>
                                          </a>
                                          <a href="">
                                                <div className="link w-full py-4 pl-4 border-b-slate-400 border-b">
                                                      <h1>GET CREDIT</h1>
                                                </div>
                                          </a>
                                          <a href="">
                                                <div className="link w-full py-4 pl-4 border-b-slate-400 border-b">
                                                      <h1>INVEST</h1>
                                                </div>
                                          </a>
                                          <a href="" onClick={handleMobileNavbar}>
                                                <div className="link w-full py-4 pl-4 ">
                                                      <ScrollLink to="about-section" spy={true} smooth={true} offset={70} duration={500} onClick={handleMobileNavbar}>
                                                            <h1>ABOUT</h1>
                                                      </ScrollLink>
                                                </div>
                                          </a>
                                    </div>
                              ) : (
                                    <></>
                              )}
                        </div>
                  </Container>
            </div>
      );
};

const WrappedNavbar = () => (
      <AuthProvider>
            <Navbar />
      </AuthProvider>
);

export default WrappedNavbar;
