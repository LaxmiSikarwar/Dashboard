import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

const Sidebar = ({ sidebarToggle }) => {
    return (
        <div className={`${sidebarToggle ? " hidden ": " block "}w-64 bg-gray-800 fixed h-full px-4 py-2`}>
            <div className='my-2 mb-4'>
                <h1 className='text-2x text-white font-bold'>Admin</h1>
            </div>
            <hr />
            <ul className='mt-3 text-white font-bold'>
                <li className='mt-2 roun hover:shadow hover:bg-blue-500 py-2'>

                    <a className='px-3'>
                        <HomeIcon className='inline-block w-6 h-6 mr-2 -mt-2'/>Home
                    </a>
                </li>
                <li className='mt-2 roun hover:shadow hover:bg-blue-500 py-2'>

                    <a className='px-3'>
                        <HomeIcon className='inline-block w-6 h-6 mr-2 -mt-2' />Home
                    </a>
                </li>
                <li className='mt-2 roun hover:shadow hover:bg-blue-500 py-2'>

                    <a className='px-3'>
                        <HomeIcon className='inline-block w-6 h-6 mr-2 -mt-2' />Home
                    </a>
                </li>
                <li className='mt-2 roun hover:shadow hover:bg-blue-500 py-2'>

                    <a className='px-3'>
                        <HomeIcon className='inline-block w-6 h-6 mr-2 -mt-2' />Home
                    </a>
                </li>
                <li className='mt-2 roun hover:shadow hover:bg-blue-500 py-2'>

                    <a className='px-3'>
                        <HomeIcon className='inline-block w-6 h-6 mr-2 -mt-2' />Home
                    </a>
                </li>
                <li className='mt-2 roun hover:shadow hover:bg-blue-500 py-2'>

                    <a className='px-3'>
                        <HomeIcon className='inline-block w-6 h-6 mr-2 -mt-2' />Home
                    </a>
                </li>
                <li className='mt-2 roun hover:shadow hover:bg-blue-500 py-2'>

                    <a className='px-3'>
                        <HomeIcon className='inline-block w-6 h-6 mr-2 -mt-2' />Home
                    </a>
                </li>
                <li className='mt-2 roun hover:shadow hover:bg-blue-500 py-2'>

                    <a className='px-3'>
                        <HomeIcon className='inline-block w-6 h-6 mr-2 -mt-2' />Home
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar