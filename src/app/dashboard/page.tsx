'use client'

import MenuItemBox from "@/components/MenuItemBox/MenuItemBox"
import { Grid, Typography } from "@mui/material"
import { useState } from "react"

const initialCurrentOrder = [{
  menuName: '',
  quantity: 0,
  sweetLevel: 0,
  extra: ''
}]

export default function Purchase() {
  const [topMenu, setMenu] = useState()
  const [currentOrder, setCurrentOrder] = useState(initialCurrentOrder)

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

  return (
    <div className='bg-gray-400 h-screen py-6 px-6'>
      <div className='mx-auto max-w-4xl'>
        <Grid container spacing={2}>
          {menuList.map((menu) => (
            <Grid item lg={3} key={menu.menuName}>
              <MenuItemBox menu={menu} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}
