import React from 'react'
import { Button } from './ui/button'

const Performance: React.FC = () => {
  return (
    <div className='bg-[#FFF7EE] px-[6%] py-8'>
      <h1 className='text-[#4A4A4A] text-2xl font-bold'>
        Instant Dive into Your Performance Metrics
      </h1>

      <div className='flex gap-4 my-6'>
        <Button variant={'secondary'}>Lifetime</Button>
        <Button variant={'secondary'}>Last Week</Button>
        <Button variant={'secondary'}>Last Month</Button>
        <Button variant={'secondary'}>Last Year</Button>
        <Button variant={'secondary'}>Customized Timeline</Button>
      </div>

      <div>
        <div>Card1</div>
        <div>Card2</div>
        <div>Card3</div>
      </div>
    </div>
  )
}

export default Performance
