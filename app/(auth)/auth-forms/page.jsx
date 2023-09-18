'use client'

import React, {useState} from 'react';
import FormTemplate from "@/app/components/Auth/Auth-Forms/form-template";

const Page = () => {
    const questions = [
        {
            title: 'Дайте общую оценку состоянию чистоты в вашем  районе',
            rateSystem: 'stars',
        },
        {
            title: 'Как вы оцениваете чистоту воздуха в данном месте города?',
            answers: ['Очень грязный', 'Неприятно дышать', 'Удовлетворительно', 'Чистый']
        },
        {
            title: 'Есть ли переполненые урны и мусорные контейнеры?',
            answers: ['Да', 'Затрудняюсь ответить', 'Нет', 'Урн недостаточно']
        },
        {
            title: 'Часто ли вы встречаете в своём район мусор на земле?',
            answers: ['Да', 'Затрудняюсь ответить', 'Нет']
        },
        {
            title: 'Вы можете сказать о своём районе, что он достаточно зелёный?',
            answers: ['Да', 'Затрудняюсь ответить', 'Нет']
        },
        {
            title: 'Хотите участвовать в улучшении экологии города? ',
            answers: ['Да', 'Затрудняюсь ответить', 'Нет']
        }
    ]
    const [currentQuestion, setCurrentQuestion] = useState(0)

    return <FormTemplate question={questions[currentQuestion]} setCurrentQuestion={setCurrentQuestion} />
};

export default Page;