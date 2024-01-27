import React from 'react';
import ChildrenBanner from "@/components/Pages/home-page/ui/children-banner/ChildrenBanner";
import Children from "@/components/Pages/home-page/components/children/Children";
import DonateChildren from "@/components/Pages/home-page/components/donate-children/DonateChildren";
import Platform from "@/components/Pages/home-page/components/children-platform/ChildrenPlatform";
import News from "@/components/Pages/publications-page/components/news/News";

function HomePage() {
    return (
        <>
            <ChildrenBanner/>
            <Children/>
            <DonateChildren/>
            <Platform/>
            <News/>
        </>
    );
}

export default HomePage;