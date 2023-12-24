import Image from 'next/image'
import styles from './page.module.css'
import HomeBanner from "@/components/Pages/Home/HomeBanner/HomeBanner";
import Children from "@/components/Pages/Home/Children/Children";
import TheButtonProps from "@/components/TheButtonProps/TheButtonProps";
import DonateChildren from "@/components/Pages/Home/DonateChildren/DonateChildren";

export default function Home() {
    return (
        <>
            <HomeBanner/>
            <Children/>
            <DonateChildren/>
        </>
    )
}
