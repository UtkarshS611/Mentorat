"use client";

import { UserButton } from '@clerk/nextjs'
import React from 'react'

import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";

const page = () => {
  return (
    <div>
      hey there
      <UserButton/>
    </div>
  )
}

export default page
