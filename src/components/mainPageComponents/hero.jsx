import React from 'react'
import HappyPerson1 from '../../images/heroimages/helpingpeople4.jpg';
import HappyPerson2 from '../../images/heroimages/helpingpeople2.jpeg';
import HappyPerson3 from '../../images/heroimages/helpingpeople3.jpeg';
import Container from '../common/container'
const Hero = () => {
      return (
            <div className='hero w-full h-[700px] bg-white border-b pb-12'>
                  <Container>
                        <div className="container flex md:flex-row flex-col w-full h-full justify-between">
                              <div className="left-part flex-[4] w-full relative h-full bg-white flex items-center md:my-0 my-4">
                                    <div className="ball md:w-[420px] md:h-[420px] h-[300px] w-[300px] rounded-full overflow-hidden absolute z-30">
                                          <img src={HappyPerson1} alt="" className='w-full h-full object-cover rounded-full' />
                                    </div>
                                    <div className="ball2 md:w-[350px] md:h-[350px] h-[250px] w-[250px] rounded-full overflow-hidden absolute md:right-16 right-2 z-20 bottom-0">
                                          <img src={HappyPerson2} alt="" className='w-full h-full object-cover rounded-full' />
                                    </div>
                                    <div className="ball2 md:w-[320px] md:h-[320px] h-[200px] w-[200px] rounded-full overflow-hidden absolute right-0 z-10 md:top-12 top-0">
                                          <img src={HappyPerson3} alt="" className='w-full h-full object-cover rounded-full absolute' />
                                    </div>
                              </div>
                              <div className="right-part flex-[3] w-full relative py-2 px-4 flex justify-end ">
                                    <div className="flex flex-col justify-center gap-8">
                                          <div className="slogan flex flex-col gap-3 font-bold items-end pt-12 justify-end">
                                                <h2 className='md:text-5xl text-4xl text-mainDark'>Tokens for Change</h2>
                                                {/* <h2 className='text-lg text-gray-700'>with</h2> */}
                                                <h2 className='md:text-5xl text-4xl text-mainColor'>Loans for Life</h2>
                                          </div>
                                          <div className="button justify-end flex pt-6">
                                                <button className='bg-mainDark text-white px-6 py-2 rounded-lg'>Invest for Hope</button>
                                          </div>

                                    </div>
                              </div>
                        </div>
                  </Container>
            </div>
      )
}

export default Hero
