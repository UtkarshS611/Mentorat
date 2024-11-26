"use client";


import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const WelcomeBanner = () => {

    const {user} = useUser();

    return (
        <div className='p-5 bg-blue-500 rounded-lg w-full text-white rounded-large flex items-center gap-6'>
            <Image
                src={'/laptop.png'}
                alt='laptop'
                width={100}
                height={100}
            />
            <div>
                <h2 className='font-semibold text-2xl'>
                    Hello , {user?.fullName}
                </h2>
                <p>
                    Welcome back , It's time to start learning
                </p>
            </div>
        </div>
    )
}

export default WelcomeBanner
