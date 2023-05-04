import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [num, setNum] = useState(0);  

  return (
    <main className='h-screen flex flex-col justify-center items-center'>
      <input className='outline rounded-lg w-20 h-20 text-6xl text-center' type="number" onChange={e => parseFloat(e.target.value) < 0 ? setNum(-1) : parseFloat(e.target.value) > 0 ? setNum(1) : setNum(0)} />
      <p className='text-2xl'>{num === -1 ? 'Negativ' : num === 1 ? 'Positiv' : 'Neutral'}</p>
    </main>
  )
}
