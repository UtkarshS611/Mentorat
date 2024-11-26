"use client";

import { Button } from '@/components/ui/button'
import { LayoutDashboard, Shield, UserCircle } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

function Sidebar() {

    const MenuList = [
        {
            name: 'Dashboard',
            icon: LayoutDashboard,
            path: '/dash',
        },
        {
            name: 'Upgrade',
            icon: Shield,
            path: '/dash/upgrade',
        },
        {
            name: 'Profile',
            icon: UserCircle,
            path: '/dash/profile',
        },
    ]

    const path = usePathname()

    return (
        <div className='h-screen shadow-md p-5'>
            <div className='flex gap-2 items-center'>
                <Image
                    src={'/logo.svg'}
                    alt='logo'
                    height={40}
                    width={40}
                />
                <h2 className="font-bold text-2xl">Mento Rat</h2>
            </div>
            <div className='mt-10'>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    + Create new
                </Button>
                <div className='mt-5'>
                    {MenuList.map((menu, index) => (
                        <div key={index} className={`flex gap-5 p-3 hover:bg-slate-200 rounded-lg cursor-pointer items-center mt-3 ${path==menu.path&& 'bg-slate-200'}`}>
                            <menu.icon/>
                            <h2>{menu.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
