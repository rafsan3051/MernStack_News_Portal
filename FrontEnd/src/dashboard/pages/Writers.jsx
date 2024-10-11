import React from 'react'
import { Link } from 'react-router-dom'
import { FaEdit, FaEye, FaTrash } from "react-icons/fa"

const Writers = () => {
  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Writers</h2>
        <Link className='px-3 py-[6px] bg-black rounded-sm text-white hover:bg-black' 
          to='/dashboard/writer/add'>Add Writer</Link>
      </div>
      <div className='relative overflow-x-auto p-4'>
                <table className='w-full text-sm text-left text-slate-600'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                        <tr>
                            <th className='px-7 py-3'>No</th>
                            <th className='px-7 py-3'>Name</th>
                            <th className='px-7 py-3'>Category</th>
                            <th className='px-7 py-3'>Role</th>
                            <th className='px-7 py-3'>Image</th>
                            <th className='px-7 py-3'>Email</th>
                            <th className='px-7 py-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {[1,2,3,4,5,6,7].map((n,i)=> <tr key={i} className='bg-white border-b'>
                            <td className='px-6 py-4'>{i+1}</td>
                            <td className='px-6 py-4'>Rayhan Ahmed</td>
                            <td className='px-6 py-4'>Travel</td>
                            <td className='px-6 py-4'>Writer</td>
                            <td className='px-6 py-4'>
                                <img className='w-[40px] h-[40px]' src='https://images.indianexpress.com/2022/02/Chenab-bridge-1200.jpg?w=640' alt=''/>
                            </td>
                            <td className='px-6 py-4'>projectmail22204@gmail.com</td>
                            <td className='px-6 py-4'>
                                <div className='flex justify-start items-center
                                 gap-x-4 text-white'>
                                    <Link className='p-[6px] bg-green-500 rounded
                                     hover:shadow-lg hover:shadow-green-500'><FaEye /></Link>
                                 </div>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>  
    </div>
  )
}

export default Writers