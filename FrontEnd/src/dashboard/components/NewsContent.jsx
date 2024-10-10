import React from 'react'
import { Link } from 'react-router-dom'
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
const NewsContent = () => {
  return (
   <div>
        <div className='px-4 py-3 flex gap-x-3'>
            <select name='' className='px-3 py-2 rounded-md outline-0 border
             border-gray-300 focus:border-green-500 h-10' id=''>
                <option value="">---Select Type---</option>
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="deactive">Deactive</option>
            </select>
            <input type='text' placeholder='search news' className='px-3 py-2 rounded-md outline-0 border
             border-gray-300 focus:border-green-500 h-10'/>
        </div>
            <div className='relative overflow-x-auto p-4'>
                <table className='w-full text-sm text-left text-slate-600'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                        <tr>
                            <th className='px-7 py-3'>No</th>
                            <th className='px-7 py-3'>Title</th>
                            <th className='px-7 py-3'>Image</th>
                            <th className='px-7 py-3'>Category</th>
                            <th className='px-7 py-3'>Description</th>
                            <th className='px-7 py-3'>Date</th>
                            <th className='px-7 py-3'>Status</th>
                            <th className='px-7 py-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-white border-b'>
                            <td className='px-6 py-4'>1</td>
                            <td className='px-6 py-4'>World’s highest railway bridge in J&K</td>
                            <td className='px-6 py-4'>
                                <img className='w-[40px] h-[40px]' src='https://images.indianexpress.com/2022/02/Chenab-bridge-1200.jpg?w=640' alt=''/>
                            </td>
                            <td className='px-6 py-4'>Travel</td>
                            <td className='px-6 py-4'>You all must have wa...</td>
                            <td className='px-6 py-4'>October 10,2024</td>
                            <td className='px-6 py-4'>
                                <span className='px-2 py-[2px] bg-green-100
                                text-green-800 rounded-lg text-xs cursor-pointer'>Active</span>
                            </td>
                            <td className='px-6 py-4'>
                                <div className='flex justify-start items-center
                                 gap-x-4 text-white'>
                                    <Link className='p-[6px] bg-green-500 rounded
                                     hover:shadow-lg hover:shadow-green-500'><FaEye /></Link>
                                    <Link className='p-[6px] bg-gray-500 rounded
                                     hover:shadow-lg hover:shadow-gray-500'><FaEdit /></Link>
                                    <div className='p-[6px] bg-red-500 rounded
                                     hover:shadow-lg hover:shadow-red-500'><FaTrash /></div>
                                 </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
   </div>
  )
}

export default NewsContent