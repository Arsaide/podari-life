import HomeBanner from "@/components/Pages/Home/HomeBanner/HomeBanner";
import Children from "@/components/Pages/Home/Children/Children";
import DonateChildren from "@/components/Pages/Home/DonateChildren/DonateChildren";
import Platform from "@/components/Pages/Home/Platform/Platform";
import ChildrenPosts from "@/components/Pages/Home/ChildrenPosts/ChildrenPosts";

export default function Home() {
    return (
        <>
            <HomeBanner/>
            <Children/>
            <DonateChildren/>
            <Platform/>
            <ChildrenPosts/>
        </>
    )
}
