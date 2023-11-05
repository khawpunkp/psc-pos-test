'use client'

import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuItemModal from '../MenuItemModal/MenuItemModal'

type CurrentOrderItem = {
  menuName: string
  quantity: number
  sweetLevel: number
  extras: string[]
}

type Props = {
	menu: {
		menuName: string
		img: string
	}
	addToOrder: (order: CurrentOrderItem) => void
}

function MenuItemBox({ menu, addToOrder }: Props) {
	const [isModalOpen, setModalOpen] = useState(false)

	const handleCloseModal = () => {
		setModalOpen(false)
	}

	const handleOpenModal = () => {
		setModalOpen(true)
	}

	return (
		<>
			<Card sx={{ maxWidth: 200 }} onClick={handleOpenModal} className="cursor-pointer">
				<CardMedia
					sx={{ height: 200, width: 200, objectFit: 'cover' }}
					image={menu.img}
					title={menu.menuName}
				/>
				<CardContent>
					<Typography gutterBottom variant="h6" component="div">
						{menu.menuName}
					</Typography>
				</CardContent>
			</Card>
			{isModalOpen && <MenuItemModal onClose={handleCloseModal} menuName={menu.menuName}  addToOrder={addToOrder}/>}
		</>
	)
}

export default MenuItemBox