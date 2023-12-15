import React, { useState } from 'react'
import Dashboard from '../../pages/Dashboard'

const Investment = () => {
      const [copiedMessage, setCopiedMessage] = useState('');
      const copyToClipboard = (text) => {
            navigator.clipboard.writeText(text).then(() => {
                  setCopiedMessage(`Copied: ${text}`);
                  setTimeout(() => setCopiedMessage(''), 2000); // Clear the message after 2 seconds
            });
      };
      const investments = [
            { id: 1, transaction: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', amount: 0.005, status: 'text', reason: 'text', time: '12.14.2023' },
            { id: 1, transaction: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', amount: 0.005, status: 'text', reason: 'text', time: '12.14.2023' },
            { id: 1, transaction: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', amount: 0.005, status: 'text', reason: 'text', time: '12.14.2023' },
            { id: 1, transaction: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', amount: 0.005, status: 'text', reason: 'text', time: '12.14.2023' },
            { id: 1, transaction: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', amount: 0.005, status: 'text', reason: 'text', time: '12.14.2023' },
            { id: 1, transaction: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', amount: 0.005, status: 'text', reason: 'text', time: '12.14.2023' },
            { id: 1, transaction: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', amount: 0.005, status: 'text', reason: 'text', time: '12.14.2023' },

            // Add more user data as needed
      ];
      return (
            <Dashboard>
                  <div className="container flex flex-col w-auto flex-1 md:gap-0 gap-20">
                        <h5 className='text-xl font-bold'>INVESTMENT</h5>
                        <div className="investment w-full h-full flex flex-col gap-6 mt-4 ">
                              <div className="invest flex flex-col md:w-1/2 w-full text-sm gap-2">
                                    <div className="wallet-address px-6 py-2 bg-mainColor rounded-lg text-white">
                                          <h5>0xC6052c7452bd07CBfE5b6Afebc712e0F6511a79B</h5>
                                    </div>
                                    <div className="amount-input flex gap-2 items-center">
                                          <h5>Amount:</h5>
                                          <input type="text" className='w-full border rounded-lg py-2' />
                                    </div>
                                    <div className="send-button flex w-full justify-end">
                                          <button className='px-6 py-2 bg-mainDark rounded-lg text-white'>INVEST</button>
                                    </div>
                              </div>

                        </div>
                        <div className="investment-list mt-12">
                              <h5 className='text-xl font-bold mb-4'>LAST TRANSACTIONS</h5>
                              <table className='flex flex-col w-full border-t border-l border-r'>
                                    <thead className='w-full flex h-12'>
                                          <tr className='flex w-full border-b md:text-xs text-[10px] items-center'>
                                                <th className='md:flex-[1] flex-[1] overflow-hidden border-r  h-full flex items-center justify-center'>ID</th>
                                                <th className='md:flex-[7] flex-[2] overflow-hidden text-start border-r pl-1 h-full flex items-center'>TRANSACTION</th>
                                                <th className='md:flex-[2] flex-[2] overflow-hidden text-start border-r pl-1 h-full flex items-center'>AMOUNT</th>
                                                <th className='md:flex-[4] flex-[2] overflow-hidden text-start border-r pl-1 h-full flex items-center'>STATUS</th>
                                                <th className='md:flex-[4] flex-[2] overflow-hidden text-start border-r pl-1 h-full flex items-center'>REASON</th>
                                                <th className='md:flex-[3] flex-[2] overflow-hidden text-start pl-1 h-full flex items-center'>DATE</th>
                                          </tr>
                                    </thead>
                                    <tbody className='w-full flex flex-col bg-slate-50'>
                                          {investments.map((investment) => (
                                                <tr key={investment.id} className='flex md:text-xs text-[10px] w-full border-b h-12 items-center bg-slate-100 '>
                                                      <td className='md:flex-[1] flex-[1] overflow-hidden border-r h-full flex items-center justify-center'>{investment.id}</td>
                                                      <td className='md:flex-[7] flex-[2] overflow-hidden text-start border-r pl-1 h-full flex items-center cursor-pointer' onClick={() => copyToClipboard(investment.transaction)}>{investment.transaction}</td>
                                                      <td className='md:flex-[2] flex-[2] overflow-hidden text-start border-r pl-1 h-full flex items-center'>{investment.amount}</td>
                                                      <td className='md:flex-[4] flex-[2] overflow-hidden text-start border-r pl-1 h-full flex items-center cursor-pointer'>{investment.status}</td>
                                                      <td className='md:flex-[4] flex-[2] overflow-hidden text-start border-r pl-1 h-full flex items-center cursor-pointer'>{investment.reason}</td>
                                                      <td className='md:flex-[3] flex-[2] overflow-hidden text-start pl-1 h-full flex items-center'>{investment.time}</td>
                                                </tr>
                                          ))}
                                    </tbody>
                              </table>
                        </div>
                  </div>
                  {copiedMessage && (
                        <div className="fixed bottom-2 right-2 bg-green-500 text-white p-4 md:text-base text-sm rounded">
                              {copiedMessage}
                        </div>
                  )}
            </Dashboard>
      )
}

export default Investment
