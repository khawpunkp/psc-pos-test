import { Box, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'

type Props = {
	onClose: () => void
	menuName: string
}

function MenuItemModal({ onClose, menuName }: Props) {
	return (
		<>
			<div className="fixed inset-0 flex items-center justify-center z-50">
				<div className="modal-container bg-white w-96 p-6 rounded shadow-lg">
					<Typography variant='h5'>{menuName}</Typography>
					<Divider />
					<FormControl>
						<FormLabel>ระดับความหวาน</FormLabel>
						<RadioGroup
							defaultValue="50"
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
						<RadioGroup>
							<FormControlLabel value='whip' control={<Radio />} label="วิปครีม +20" />
							<FormControlLabel value='vanilla' control={<Radio />} label="วานิลลาไซรัป +10" />
						</RadioGroup>
					</FormControl>
					<Divider />
					<button onClick={onClose} className="py-2 px-4 rounded hover:text-gray-600 cursor-pointer">
						ยกเลิก
					</button>
					<button onClick={onClose} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 cursor-pointer">
						เพิ่ม
					</button>


				</div>
			</div>
		</>
	)
}

export default MenuItemModal