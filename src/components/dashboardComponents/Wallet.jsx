import React, { useState, useEffect } from 'react';
import Dashboard from '../../pages/Dashboard';
import { ConnectWallet, useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";

const Wallet = () => {
      const address = useAddress();
      const { contract, isLoading } = useContract("0x06c0684DE3C39Ad98df086EDbd2cbab6cb42cd4F");
      const { data: balance, isLoading: balanceLoading } = useTokenBalance(contract, address);
      const [toAddress, setToAddress] = useState('');
      const [transferAmount, setTransferAmount] = useState('');
      const [isTransferring, setIsTransferring] = useState(false);
      const [transferSuccess, setTransferSuccess] = useState(false);
      const [transactionInfo, setTransactionInfo] = useState(null);
      const [transferStatus, setTransferStatus] = useState('');
      const [transferMessage, setTransferMessage] = useState('');

      const handleTransfer = async () => {
            if (!toAddress || !transferAmount || isTransferring) {
                  return;
            }

            try {
                  setIsTransferring(true);

                  const result = await contract.erc20.transfer(toAddress, parseFloat(transferAmount));
                  setTransferSuccess(true);
                  setTransactionInfo(result);
                  setTransferStatus('success');
                  setTransferMessage('Transfer successful!');
            } catch (error) {
                  console.error('Error transferring tokens:', error);
                  setTransferStatus('error');
                  setTransferMessage('Error transferring tokens. Please check the console for details.');
            } finally {
                  setIsTransferring(false);

                  // Clear transfer status and message after 5 seconds
                  setTimeout(() => {
                        setTransferStatus('');
                        setTransferMessage('');
                  }, 5000);
            }
      };

      return (
            <Dashboard>
                  <div className="container flex flex-col w-full flex-1">
                        <h5 className='text-xl font-bold'>WALLET</h5>
                        <div className="wallet w-full h-full flex items-center justify-center flex-col gap-6">
                              <div className="wallet-address flex flex-col md:w-3/4 w-full gap-2">
                                    <h5>Wallet Address:</h5>
                                    <h5 className='px-6 py-2 rounded-md text-gray'>{address}</h5>
                              </div>
                              <div className="balance flex flex-col md:w-3/4 w-full gap-2">
                                    <h5>Balance:</h5>
                                    {balanceLoading ? (
                                          <p>Loading balance...</p>
                                    ) : (
                                          <h5 className='px-6 py-2 rounded-md text-gray'>{balance?.displayValue} MCT</h5>
                                    )}
                              </div>
                              <div className="transfer-form flex flex-col md:w-3/4 w-full gap-4">
                                    <h5>Transfer Tokens:</h5>
                                    <input
                                          type="text"
                                          placeholder="Recipient Address"
                                          value={toAddress}
                                          onChange={(e) => setToAddress(e.target.value)}
                                          className='px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500'
                                    />
                                    <input
                                          type="text"
                                          placeholder="Amount"
                                          value={transferAmount}
                                          onChange={(e) => setTransferAmount(e.target.value)}
                                          className='px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500'
                                    />
                                    <button
                                          onClick={handleTransfer}
                                          className={`px-4 py-2 rounded-md ${isTransferring ? 'bg-gray-500' : 'bg-blue-500'} text-white cursor-pointer`}
                                          disabled={isTransferring}
                                    >
                                          {isTransferring ? 'Transferring...' : 'Transfer'}
                                    </button>
                              </div>
                              {transferStatus === 'success' && (
                                    <div className="transfer-success md:w-3/4 w-full">
                                          <h5 className="text-green-500 font-bold">{transferMessage}</h5>
                                          {transactionInfo && (
                                                <div className="transaction-info">
                                                      <h6 className="text-sm font-semibold">Transaction Information:</h6>
                                                      <pre className="text-sm">{JSON.stringify(transactionInfo, null, 2)}</pre>
                                                </div>
                                          )}
                                    </div>
                              )}
                              {transferStatus === 'error' && (
                                    <div className="transfer-error md:w-3/4 w-full">
                                          <h5 className="text-red-500 font-bold">{transferMessage}</h5>
                                    </div>
                              )}
                        </div>
                  </div>
            </Dashboard>
      );
}

export default Wallet;
