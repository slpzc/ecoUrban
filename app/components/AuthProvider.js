'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import {fetchUserData} from "@/redux/Features/userSlice"; // Подставьте правильный путь
import { getCookie } from "@/app/untils/Cookies"; // Подставьте здесь вашу функцию для получения куков

const AuthProvider = ({ children }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const token = getCookie('server-token'); // Получение токена из куков

    useEffect(() => {
        const currentPath = router.asPath;
        const authRequired = router.authRequired; // Получение информации о необходимости аутентификации

        if (authRequired) {
            if (!token) {
                router.push('/auth'); // Перенаправление на страницу авторизации
            } else {
                dispatch(fetchUserData(token)); // Запуск thunk с токеном
            }
        }
    }, [dispatch, token, router]);

    return children;
};

export default AuthProvider;