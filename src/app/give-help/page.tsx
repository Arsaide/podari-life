import React from 'react'
import styles from "./page.module.scss"
import TheHeadBannerProps from "@/components/TheHeadBannerProps/TheHeadBannerProps";
const GiveHelp = () => {
	return (
		<section>
			<TheHeadBannerProps title={'Cделать пожертвование'} img={'help/banner.jpg'} text={'Мы делаем все, чтобы помогать было легко и удобно'}/>
		</section>
	)
}

export default GiveHelp
