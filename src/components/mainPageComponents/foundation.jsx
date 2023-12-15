import React from 'react'
import TisvaLogo from '../../images/tisva.png'
import TgmpLogo from '../../images/tgmp.png'
import Container from '../common/container'

const Foundation = () => {
      return (
            <div className='foundation w-full h-auto bg-white'>
                  <Container>
                        <div className="foundation-container w-full h-full flex items-center md:gap-6 gap-12 md:py-24 py-10 flex-col md:flex-row">
                              <div className="tisva flex-1 flex gap-6 ">
                                    <div className="tisva-img w-60 h-auto flex-[2] flex items-center">
                                          <img src={TisvaLogo} alt="tisva-logo" />
                                    </div>
                                    <div className="tisva-text flex flex-col text-sm flex-[4]">
                                          <p>The Turkey Waste Prevention Foundation (TİSVA), established in Ankara on March 27, 1998, aims to efficiently use Turkey's resources and raise awareness about waste reduction. Additionally, TİSVA is involved in poverty reduction through microcredit, microfinance, food banking, and educational initiatives. Registered under number 4503 in Ankara.</p>
                                    </div>
                              </div>
                              <div className="tgmp flex-1 flex gap-6">
                                    <div className="tgmp-img w-60 h-auto flex-[2] flex items-center -mt-2">
                                          <img src={TgmpLogo} alt="tgmp-logo" />
                                    </div>
                                    <div className="tgmp-text flex flex-col text-sm flex-[4]">
                                          <p>The Turkey Grameen Microfinance Program (TGMP) is a major microfinance institution in the Middle East and North Africa (MENA) region, serving as a field partner of Grameen Trust.</p>
                                          <p>Operating in 68 provinces with 100 branches nationwide, TGMP has disbursed over 1.5 billion Turkish Lira in microcredits, positively impacting the lives of over 250,000 financially challenged women.</p>
                                    </div>
                              </div>
                        </div>
                  </Container>
            </div>
      )
}

export default Foundation
