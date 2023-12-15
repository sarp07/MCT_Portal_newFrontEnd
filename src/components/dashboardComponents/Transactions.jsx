import React, { useState } from 'react'
import Dashboard from '../../pages/Dashboard'

const Transactions = () => {
      const [copiedMessage, setCopiedMessage] = useState('');
      const copyToClipboard = (text) => {
            navigator.clipboard.writeText(text).then(() => {
                  setCopiedMessage(`Copied: ${text}`);
                  setTimeout(() => setCopiedMessage(''), 2000); // Clear the message after 2 seconds
            });
      };
      const transactions = [
            { id: 1, transaction_id: 123, amount: 0.005, from: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', to: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', time: '12.14.2023' },
            { id: 2, transaction_id: 1235, amount: 0.0008, from: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', to: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', time: '12.14.2023' },
            { id: 2, transaction_id: 1235, amount: 0.0008, from: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', to: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', time: '12.14.2023' },
            { id: 2, transaction_id: 1235, amount: 0.0008, from: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', to: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', time: '12.14.2023' },
            { id: 2, transaction_id: 1235, amount: 0.0008, from: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', to: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', time: '12.14.2023' },
            { id: 2, transaction_id: 1235, amount: 0.0008, from: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', to: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', time: '12.14.2023' },
            { id: 2, transaction_id: 1235, amount: 0.0008, from: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', to: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', time: '12.14.2023' },
            { id: 2, transaction_id: 1235, amount: 0.0008, from: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', to: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', time: '12.14.2023' },
            { id: 2, transaction_id: 1235, amount: 0.0008, from: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', to: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', time: '12.14.2023' },
            { id: 2, transaction_id: 1235, amount: 0.0008, from: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', to: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', time: '12.14.2023' },
            { id: 2, transaction_id: 1235, amount: 0.0008, from: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', to: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71', time: '12.14.2023' },
            // Add more user data as needed
      ];
      return (
            <Dashboard>
                  <div className="container flex flex-col w-full flex-1 gap-6">
                        <h5 className='text-xl font-bold'>TRANSACTIONS</h5>
                        <div className="transactions w-full h-full flex flex-col items-center gap-6">
                              <table className='flex flex-col w-full border-t border-l border-r'>
                                    <thead className='w-full flex h-12'>
                                          <tr className='flex w-full border-b md:text-xs text-[10px] items-center'>
                                                <th className='md:flex-[1] flex-[1] overflow-hidden border-r  h-full flex items-center justify-center'>ID</th>
                                                <th className='md:flex-[1] flex-[1] overflow-hidden text-start border-r pl-1 h-full flex items-center'>TX ID</th>
                                                <th className='md:flex-[2] flex-[2] overflow-hidden text-start border-r pl-1 h-full flex items-center'>AMOUNT</th>
                                                <th className='md:flex-[7] flex-[2] overflow-hidden text-start border-r pl-1 h-full flex items-center'>FROM</th>
                                                <th className='md:flex-[7] flex-[2] overflow-hidden text-start border-r pl-1 h-full flex items-center'>TO</th>
                                                <th className='md:flex-[3] flex-[2] overflow-hidden text-start pl-1 h-full flex items-center'>DATE</th>
                                          </tr>
                                    </thead>
                                    <tbody className='w-full flex flex-col bg-slate-50'>
                                          {transactions.map((transaction) => (
                                                <tr key={transaction.id} className='flex md:text-xs text-[10px] w-full border-b h-12 items-center bg-slate-100 '>
                                                      <td className='md:flex-[1] flex-[1] overflow-hidden border-r h-full flex items-center justify-center'>{transaction.id}</td>
                                                      <td className='md:flex-[1] flex-[1] overflow-hidden text-start border-r pl-1 h-full flex items-center'>{transaction.transaction_id}</td>
                                                      <td className='md:flex-[2] flex-[2] overflow-hidden text-start border-r pl-1 h-full flex items-center'>{transaction.amount}</td>
                                                      <td className='md:flex-[7] flex-[2] overflow-hidden text-start border-r pl-1 h-full flex items-center cursor-pointer' onClick={() => copyToClipboard(transaction.from)}>{transaction.from}</td>
                                                      <td className='md:flex-[7] flex-[2] overflow-hidden text-start border-r pl-1 h-full flex items-center cursor-pointer' onClick={() => copyToClipboard(transaction.to)}>{transaction.to}</td>
                                                      <td className='md:flex-[3] flex-[2] overflow-hidden text-start pl-1 h-full flex items-center'>{transaction.time}</td>
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
            </Dashboard >
      )
}

export default Transactions
