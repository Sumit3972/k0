import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Colors from '@/data/color'

function Header() {
  return (
    <div className='p-4 flex justify-between items-center'>
        <Image src={'/vo.jpg'} alt='logo' width={80} height={80}/>
        <div className='flex gap-5'>
        <Button variant='ghost' >sign in</Button>
        <Button className="text-white" style={{
          backgroundColor:Colors.BLUE
        }}>Get started</Button>
        </div>
        

    </div>
  )
}

export default Header