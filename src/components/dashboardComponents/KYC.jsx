import React from 'react'
import Dashboard from '../../pages/Dashboard'

const KYC = () => {
      return (
            <Dashboard>
                  <div className="container flex flex-col w-auto flex-1 md:gap-0 gap-20">
                        <h5 className='text-xl font-bold'>KYC</h5>
                        <div className="kyc w-full h-full flex flex-col items-center justify-center gap-6">
                              <div className="photos kyc w-full h-full flex md:flex-row flex-col items-center md:gap-6 gap-20 text-sm">
                                    <div className="photo-input flex flex-col items-start gap-4 flex-1">
                                          <h5>Upload your ID picture's front:</h5>
                                          <input type="file" name="id-front" id="id-front" className='w-56' />
                                    </div>
                                    <div className="photo-input flex flex-col items-start gap-4 flex-1">
                                          <h5>Upload your ID picture's back:</h5>
                                          <input type="file" name="id-back" id="id-back" className='w-56' />
                                    </div>
                                    <div className="photo-input flex flex-col items-start gap-4 flex-1">
                                          <h5>Upload your face picture:</h5>
                                          <input type="file" name="face" id="face" className='w-56' />
                                    </div>
                              </div>
                              <div className="send-button">
                                    <button className='px-6 py-2 bg-mainDark rounded-lg text-white'>UPLOAD</button>
                              </div>
                        </div>
                  </div>
            </Dashboard>
      )
}

export default KYC
