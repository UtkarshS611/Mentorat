import { UserButton } from '@clerk/nextjs'
import React from 'react'

const DashboardHeader = () => {
    return (
        <div className='flex justify-end p-4 shadow-md'>
            <UserButton/>
        </div>
    )
}

export default DashboardHeader
