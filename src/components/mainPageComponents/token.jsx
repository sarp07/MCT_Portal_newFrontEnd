import React from 'react'
import Container from '../common/container'
import Logo from '../../images/logo.png'

const Token = () => {
      return (
            <div className='token w-full h-auto border-b' id='about-section'>
                  <Container>
                        <div className="token-container w-full h-full flex md:py-8 pb-8 pt-0 md:flex-row flex-col-reverse">
                              <div className="token-info flex-[3] flex flex-col justify-center gap-8 pr-12">
                                    <div className="title">
                                          <h5 className='font-bold text-mainDark text-3xl'>MicroCreditToken (1MCT)</h5>
                                    </div>
                                    <div className="text flex flex-col gap-4">
                                          <p>The MicroCreditToken (1MCT) Platform aims to incorporate blockchain technology into microfinance operations based on a pure social purpose, allowing social investors to contribute to a social cause. This platform envisions social investors choosing to participate in microfinance operations where the primary goal is a social impact.</p>
                                          <p>In doing so, the platform aspires to alleviate all forms of poverty, and applications of "Happytalism" will spread globally.</p>
                                          <p>The 1MCT (MicroCreditToken) Blockchain Project is executed by 1MCT Crypto Asset and Technology GmbH, a Switzerland-licensed entity of which TISVA is a shareholder.</p>
                                    </div>
                              </div>
                              <div className="token-img flex-[2]">
                                    <img src={Logo} alt="logo" className='md:p-0 p-8' />
                              </div>
                        </div>
                  </Container>
            </div>
      )
}

export default Token
