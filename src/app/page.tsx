import Image from 'next/image'
import styles from './page.module.css'
import HomeBanner from "@/components/Pages/Home/HomeBanner/HomeBanner";
import Children from "@/components/Pages/Home/Children/Children";

export default function Home() {
  return (
    <>
      <HomeBanner/>
      <Children/>
    </>
  )
}
