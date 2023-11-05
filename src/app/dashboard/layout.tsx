import SideBar from '@/components/SideBar/SideBar'
import React, { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

function layout(props: Props) {
  return (
    <div> 
			<SideBar/>
			<main>
				{props.children}
			</main>
		</div>
  )
}

export default layout