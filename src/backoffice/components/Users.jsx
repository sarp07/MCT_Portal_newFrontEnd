import React from 'react';
import HomeOffice from '../HomeOffice';

const Users = () => {

    return (
        <HomeOffice>
            <div className="container flex flex-col w-full flex-1">
                <h5 className='text-xl font-bold'>Users</h5>
                <div className="wallet w-full h-full flex items-center justify-center flex-col gap-6">
                    <div className="wallet-address flex flex-col md:w-3/4 w-full gap-2">
                    </div>
                    <div className="investment-list mt-12">
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
                                <tr className='flex md:text-xs text-[10px] w-full border-b h-12 items-center bg-slate-100 '>
                                    <td className='md:flex-[1] flex-[1] overflow-hidden border-r h-full flex items-center justify-center'>78</td>
                                    <td className='md:flex-[7] flex-[2] overflow-hidden text-start border-r pl-1 h-full flex items-center cursor-pointer'>78</td>
                                    <td className='md:flex-[2] flex-[2] overflow-hidden text-start border-r pl-1 h-full flex items-center'>78</td>
                                    <td className='md:flex-[4] flex-[2] overflow-hidden text-start border-r pl-1 h-full flex items-center cursor-pointer'>78</td>
                                    <td className='md:flex-[4] flex-[2] overflow-hidden text-start border-r pl-1 h-full flex items-center cursor-pointer'>78</td>
                                    <td className='md:flex-[3] flex-[2] overflow-hidden text-start pl-1 h-full flex items-center'>78</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </HomeOffice>
    );
}

export default Users;
