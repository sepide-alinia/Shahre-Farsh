import React from 'react'
import { Link } from 'react-router-dom'
import MainButton from './MainButton'
import { leftArrow } from '@/assets/icons'

type ProductNavType ={
    title : string;
}

export default function ProductNav({title}: ProductNavType) {
  return (
    <div className='flex w-full h-12 items-center justify-between'>
        <MainButton Icon={leftArrow} toPage={'/'} extraClass={'flex-row-reverse'}>مشاهده همه</MainButton>
        <p className='font-bold text-2xl'>{title}</p>
    </div>
  )
}
