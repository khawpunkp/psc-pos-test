import { Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

type CurrentOrderItem = {
  menuName: string
  quantity: number
  sweetLevel: number
  extras: string[]
}

type Props = {
	onClose: () => void
	menuName: string
	addToOrder: (order: CurrentOrderItem) => void
}

function MenuItemModal({ onClose, menuName, addToOrder }: Props) {
	const [sweetLevel, setSweetLevel] = useState<number>(100)
	const [selectedExtras, setSelectedExtras] = useState<string[]>([])

	const sweetLevelsList = [
    {
      label: "หวาน 120%",
      value: 120,
    },
    {
      label: "หวาน 100%",
      value: 100,
    },
		{
      label: "หวาน 50%",
      value: 50,
    },
		{
      label: "หวาน 25%",
      value: 25,
    },
		{
      label: "หวาน 0%",
      value: 0,
    }
  ]

	const extrasList = [
    {
      label: "วิปครีม +20",
      value: 'whip',
    },
    {
      label: "วานิลลาไซรัป +10",
      value: 'vanilla',
    }
  ]

	const handleSweetLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = +event.target.value
		setSweetLevel(value)
	}

	const handleExtraChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const extra = event.target.value
    setSelectedExtras((prevSelectedExtras) => {
      if (prevSelectedExtras.includes(extra)) {
        return prevSelectedExtras.filter((item) => item !== extra)
      } else {
        return [...prevSelectedExtras, extra]
      }
    })
  }

	const handleAddToOrder = () => {
		const order: CurrentOrderItem = {
			menuName: menuName,
			quantity: 1,
			sweetLevel: sweetLevel,
			extras: selectedExtras
		}
		addToOrder(order)
		onClose()
	}

	useEffect(() => {
		console.log(sweetLevel);
		console.log(selectedExtras);
	}, [sweetLevel, selectedExtras])
	

	return (
		<>
			<div className="fixed inset-0 flex items-center justify-center z-50">
				<div className="modal-container bg-white w-96 p-6 rounded shadow-lg">
					<Typography variant='h5'>{menuName}</Typography>
					<Divider />
					<FormControl>
						<FormLabel>ระดับความหวาน</FormLabel>
						<RadioGroup
							defaultValue={100}
							onChange={handleSweetLevelChange}
						>
							{sweetLevelsList.map((sweetLevel, index) => (
								<FormControlLabel value={sweetLevel.value} key={`${sweetLevel.value}-${index}`} control={<Radio />} label={sweetLevel.label} />
							))}
						</RadioGroup>
					</FormControl>
					<Divider />
					<FormControl>
						<FormLabel>เพิ่มเติม</FormLabel>
						<FormGroup>
							{extrasList.map((extra, index) => (
								<FormControlLabel value={extra.value} key={`${extra.value}-${index}`} control={<Checkbox onChange={handleExtraChange}/>} label={extra.label} />
							))}
						</FormGroup>
					</FormControl>
					<Divider />
					<button onClick={onClose} className="py-2 px-4 rounded hover:text-gray-600 cursor-pointer">
						ยกเลิก
					</button>
					<button onClick={handleAddToOrder} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 cursor-pointer">
						เพิ่ม
					</button>
				</div>
			</div>
		</>
	)
}

export default MenuItemModal