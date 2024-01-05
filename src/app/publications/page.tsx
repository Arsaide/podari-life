import React from 'react';
import Posts from "@/components/Pages/Publications/Posts/Posts";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Публикации | фонд «Подари жизнь»',
    description: 'Изучайте последние новости, ' +
        'вдохновляющие блоги, и замечательные истории ' +
        'на странице публикаций благотворительного фонда «Подари жизнь». ' +
        'Узнавайте о наших проектах, подвигах, и том, как ваша поддержка ' +
        'влияет на жизни больных детей в России.',
    keywords: 'блог, новости, вдохновение, истории успеха, социальные проекты, забота о здоровье'
}

const Publications = () => {
    return (
        <>
            <Posts/>
        </>
    );
};

export default Publications;
