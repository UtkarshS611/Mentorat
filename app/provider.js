"use client";

import { useUser } from '@clerk/nextjs'
import { db } from '@/configs/db';
import React, { useEffect } from 'react'
import { USER_TABLE } from '@/configs/schema';
import { eq } from 'drizzle-orm';
import axios from 'axios';

const Provider = ({children}) => {

    const {user} = useUser();

    useEffect(() =>{
        user && CheckIsNewUser();
    }, [user])

    const CheckIsNewUser= async () => {
        const result = await db.select().from(USER_TABLE).where(eq(USER_TABLE.email,user?.primaryEmailAddress?.emailAddress))

        console.log(result);
        if(result?.lenght==0){
            const userResponse = await db.insert(USER_TABLE).values({
                name: user?.fullName,
                email: user?.primaryEmailAddress?.emailAddress
            }).returning({id:USER_TABLE.id})

            console.log(userResponse);
        }
        // try{
        //     const resp = axios.post('/api/create-user',{
        //         user: user
        //     })
        //     console.log(resp.data);
        // } catch(error){
        //     console.log(error.resp.data);
        // }
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default Provider
