import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import React from 'react'

type Props = {
    menu: {
			menuName: string
			img: string
    }
}

function MenuItemBox({menu}: Props) {
	

  return (
    <Card sx={{ maxWidth: 200 }}>
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
  )
}

export default MenuItemBox