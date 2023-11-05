'use client'

import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MenuItemModal from '../MenuItemModal/MenuItemModal'

type Props = {
	menu: {
		menuName: string
		img: string
	}
}

function MenuItemBox({ menu }: Props) {
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
			{isModalOpen && <MenuItemModal onClose={handleCloseModal} menuName={menu.menuName} />}
		</>
	)
}

export default MenuItemBox