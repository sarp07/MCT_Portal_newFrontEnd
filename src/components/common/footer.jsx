import React from 'react'
import Container from './container'
import Logo from '../../images/logo.png'
import { FaTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";

const Footer = () => {
      return (
            <div className='footer w-full h-auto bg-mainDark'>
                  <Container>
                        <div className="footer-container flex flex-col h-full w-full md:pt-0 pt-4 md:gap-0 gap-4">
                              <div className="footer-main-container flex w-full h-full">
                                    <div className="logo flex-1 flex items-center">
                                          <img src={Logo} alt="logo" className='w-3/4 h-auto py-6' />
                                    </div>
                                    <div className="links flex-1 flex flex-col font-bold text-lg text-white items-center text-left justify-center gap-4">
                                          <div className="links-inside flex flex-col items-start gap-2 pr-2">
                                                <a href="/">• HOME</a>
                                                <a href="/">• GET CREDIT</a>
                                                <a href="/">• INVEST</a>
                                                <a href="/">• ABOUT</a>
                                          </div>

                                    </div>
                                    <div className="contact flex-1 flex flex-col items-center text-white md:text-sm text-xs justify-center">
                                          <div className="socials flex flex-col items-start md:gap-3 gap-2">
                                                <a href="https://twitter.com/microcredittoken">
                                                      <div className="social flex items-center md:gap-3 gap-2">
                                                            <FaTwitter className='md:w-5 w-4 h-auto' color='white' />
                                                            <h5>Twitter</h5>
                                                      </div>
                                                </a>
                                                <a href="https://t.me/mctcommunitychanneleng">
                                                      <div className="social flex items-center md:gap-3 gap-2">
                                                            <FaTelegram className='md:w-5 w-4 h-auto' color='white' />
                                                            <h5>Telegram EN</h5>
                                                      </div>
                                                </a>
                                                <a href="https://t.me/mctcommunitychannel">
                                                      <div className="social flex items-center md:gap-3 gap-2">
                                                            <FaTelegram className='md:w-5 w-4 h-auto' color='white' />
                                                            <h5>Telegram TR</h5>
                                                      </div>
                                                </a>
                                                <a href="https://www.youtube.com/watch?v=8yb1DUsE5_c">
                                                      <div className="social flex items-centermd: md:gap-3 gap-2">
                                                            <FaYoutube className='md:w-5 w-4 h-auto' color='white' />
                                                            <h5>Youtube</h5>
                                                      </div>
                                                </a>
                                                <a href="https://www.instagram.com/microcreditoken/">
                                                      <div className="social flex items-center md:gap-3 gap-2">
                                                            <AiFillInstagram className='md:w-5 w-4 h-auto' color='white' />
                                                            <h5>Instagram</h5>
                                                      </div>
                                                </a>
                                                <a href="https://www.facebook.com/microcreditoken">
                                                      <div className="social flex items-center md:gap-3 gap-2">
                                                            <FaFacebook className='md:w-5 w-4 h-auto' color='white' />
                                                            <h5>Facebook</h5>
                                                      </div>
                                                </a>
                                                <a href="https://microcreditoken.medium.com/">
                                                      <div className="social flex items-center gap-3">
                                                            <FaMedium className='w-5 h-auto' color='white' />
                                                            <h5>Medium</h5>
                                                      </div>
                                                </a>
                                          </div>
                                    </div>
                              </div>
                              <div className="copyright-text text-white flex items-center text-xs pb-2 flex-col">
                                    <p>Copyright © 2023 MicroCreditToken</p>
                                    <p>MCT Bilişim ve Kripto Varlıklar A.Ş.</p>
                              </div>
                        </div>
                  </Container>
            </div>
      )
}

export default Footer
