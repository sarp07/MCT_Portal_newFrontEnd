import React from 'react';
import Container from '../common/container';
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaCoins } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";

const Process = () => {
      return (
            <div className='process w-full h-auto bg-mainDark'>
                  <Container>
                        <div className="process-container w-full h-full flex flex-col pt-12 pb-16 gap-16">
                              <div className="title-container flex w-full justify-center items-center">
                                    <h3 className='font-bold text-3xl text-white'>HOW IT WORKS</h3>
                              </div>
                              <div className="process-parts flex md:flex-row flex-col gap-20">
                                    <div className="process-part flex-1 flex flex-col w-full items-center gap-6">
                                          <BiSolidDonateHeart className='w-36 h-auto' color='white' />
                                          <div className="title-and-text flex flex-col gap-3 items-center">
                                                <div className="title">
                                                      <h5 className='text-2xl font-bold text-white'>Invest</h5>
                                                </div>
                                                <div className="text">
                                                      <p className='text-md text-white'>Invest your money easily.</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="process-part flex-1 flex flex-col w-full items-center gap-6">
                                          <FaCoins className='w-36 h-auto' color='white' />
                                          <div className="title-and-text flex flex-col gap-3 items-center">
                                                <div className="title">
                                                      <h5 className='text-2xl font-bold text-white'>Token</h5>
                                                </div>
                                                <div className="text">
                                                      <p className='text-md text-white'>Own a token.</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="process-part flex-1 flex flex-col w-full items-center gap-6">
                                          <FaHandsHelping className='w-36 h-auto' color='white' />
                                          <div className="title-and-text flex flex-col gap-3 items-center">
                                                <div className="title">
                                                      <h5 className='text-2xl font-bold text-white'>Help</h5>
                                                </div>
                                                <div className="text">
                                                      <p className='text-md text-white'>Help someone in need.</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="process-part flex-1 flex flex-col w-full items-center gap-6">
                                          <FaRepeat className='w-36 h-auto' color='white' />
                                          <div className="title-and-text flex flex-col gap-3 items-center">
                                                <div className="title">
                                                      <h5 className='text-2xl font-bold text-white'>Repeat</h5>
                                                </div>
                                                <div className="text">
                                                      <p className='text-md text-white'>Keep helping.</p>
                                                </div>
                                          </div>
                                    </div>



                              </div>
                        </div>
                  </Container>
            </div>
      )
}

export default Process
