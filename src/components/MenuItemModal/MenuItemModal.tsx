import { Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

type CurrentOrderItem = {
  menuName: string
  quantity: number
  sweetLevel: number
  extra: string[]
}

type Props = {
	onClose: () => void
	menuName: string
	addToOrder: (order: CurrentOrderItem) => void
}

function MenuItemModal({ onClose, menuName, addToOrder }: Props) {
	const [sweetLevel, setSweetLevel] = useState<number>(100)
	const [selectedExtras, setSelectedExtras] = useState<string[]>([])

	const handleSweetLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = +event.target.value;
		setSweetLevel(value)
	}

	const handleExtraChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const extra = event.target.value;
    setSelectedExtras((prevSelectedExtras) => {
      if (prevSelectedExtras.includes(extra)) {
        return prevSelectedExtras.filter((item) => item !== extra);
      } else {
        return [...prevSelectedExtras, extra];
      }
    });
  };

	const handleAddToOrder = () => {
		const order: CurrentOrderItem = {
			menuName: menuName,
			quantity: 1,
			sweetLevel: sweetLevel,
			extra: selectedExtras
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
							value={sweetLevel}
							onChange={handleSweetLevelChange}
						>
							<FormControlLabel value={120} control={<Radio />} label="หวาน 120%" />
							<FormControlLabel value={100} control={<Radio />} label="หวาน 100%" />
							<FormControlLabel value={50} control={<Radio />} label="หวาน 50%" />
							<FormControlLabel value={25} control={<Radio />} label="หวาน 25%" />
							<FormControlLabel value={0} control={<Radio />} label="หวาน 0%" />
						</RadioGroup>
					</FormControl>
					<Divider />
					<FormControl>
						<FormLabel>เพิ่มเติม</FormLabel>
						<FormGroup>
							<FormControlLabel value='whip' control={<Checkbox onChange={handleExtraChange}/>} label="วิปครีม +20" />
							<FormControlLabel value='vanilla' control={<Checkbox onChange={handleExtraChange}/>} label="วานิลลาไซรัป +10" />
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