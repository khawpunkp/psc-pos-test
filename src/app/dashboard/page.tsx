'use client'

import MenuItemBox from "@/components/MenuItemBox/MenuItemBox"
import { Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"

type CurrentOrderItem = {
  menuName: string
  quantity: number
  sweetLevel: number
  extra: string[]
}

export default function Purchase() {
  const [currentOrder, setCurrentOrder] = useState<CurrentOrderItem[]>([])

  const menuList = [
    {
      menuName: 'อเมริกาโน่',
      img: '/coffee.jpg'
    },
    {
      menuName: 'ลาเต้',
      img: '/coffee.jpg'
    },
    {
      menuName: 'มอคค่า',
      img: '/coffee.jpg'
    },
    {
      menuName: 'คาปูชิโน่',
      img: '/coffee.jpg'
    },
    {
      menuName: 'คาราเมล มัคคิอาโต้',
      img: '/coffee.jpg'
    }
  ]

  useEffect(() => {
    console.log(currentOrder);
  }, [currentOrder])
  

  const handleAddToOrder = (order: CurrentOrderItem) => {
    setCurrentOrder(prevOrder => [...prevOrder, order])
  }

  return (
    <div className='bg-gray-400 h-screen py-6 px-6'>
      <div className='mx-auto max-w-4xl'>
        <Grid container spacing={2}>
          {menuList.map((menu) => (
            <Grid item lg={3} key={menu.menuName}>
              <MenuItemBox menu={menu} addToOrder={handleAddToOrder}/>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}
