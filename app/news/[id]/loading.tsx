"use client"

import React from 'react'

export default function loading() {
  return (
    <div className='max-w-md mx-auto'>
        <div className='animate-pulse flex items-center justify-between p-4'>
            <div className='bg-gray-200 h-4 w-24 rounded-full'></div>
            <div className='bg-gray-200 h-4 w-24 rounded-full'></div>
            <div className='bg-gray-200 h-4 w-24 rounded-full'></div>
        </div>
        <main className='container mx-auto'>
            <div className='space-y-6 p-4'>
            <div className='grid grid-cols-2 gap-7 items-center space-y-2'>
                <div className='bg-gray-200 h-48 w-48 rounded-lg'></div>
                <div className='bg-gray-200 h-48 w-48 rounded-lg'></div>
                <div className='bg-gray-200 h-48 w-48 rounded-lg'></div>
                <div className='bg-gray-200 h-48 w-48 rounded-lg'></div>
            </div>
            </div>
        </main>
    </div>
  )
}
