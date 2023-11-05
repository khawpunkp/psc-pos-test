'use client'
import { Drawer, Box, List, ListItemButton, ListItemText, Divider, ListItem } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

function SideBar({}: Props) {
  const router = useRouter()

  const sideMenu = [
    {
      label: 'สั่งซื้อและชำระเงิน',
      url: '',
    },
    {
      label: 'ประวัติใบเสร็จ',
      url: 'history',
    },
    {
      label: 'เมนูและส่วนลด',
      url: 'menudiscount',
    },
    {
      label: 'ตั้งค่า',
      url: 'setting',
    },
  ]

	const menuList = () => (
		<Box>
			<List>
				<ListItem>
					<ListItemText primary='Cafe Once'/>
				</ListItem>
				<Divider/>
				{sideMenu.map((menuItem, index) => (
					<React.Fragment key={index}>
						<ListItemButton 
							key={`${menuItem.url}-${index}`} 
							onClick={() => router.push(`/dashboard/${menuItem.url}`)}
						>
							<ListItemText key={`${menuItem.label}-${index}`} primary={menuItem.label}/>
						</ListItemButton>
						<Divider key={`divider-${index}`}/>
					</React.Fragment>	
        ))}
			</List>
		</Box>
	)

  return (
    <>
      <Drawer variant="permanent">
        {menuList()}
      </Drawer>
    </>
  )
}

export default SideBar
