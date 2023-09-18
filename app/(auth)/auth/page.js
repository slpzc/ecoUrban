'use client'

import React, {useEffect, useState} from 'react';
import Slides from "@/app/components/Auth/Slides";
import Features from "@/app/components/Auth/Features";
import Auth from "@/app/components/Auth/Auth";
import UserSettings from "@/app/components/Auth/UserSettings";
import {AuthModule} from "@/app/(auth)/auth/auth.module";
import {useDispatch, useSelector} from "react-redux";
import Register from "@/app/components/Auth/Register";

export default function Page() {
    const [view, setView] = useState('Brief')
    const user = useSelector(state => state.userSlice.user)
    /// start
    useEffect(() => {
        console.log('USE', user)
    }, [user]);
    //end

    const ViewContent = () => {
        if (view === 'Brief') return <Slides setView={setView}/>
        else if (view === 'Features') return <Features setView={setView}/>
        else if (view === 'Login') return <Auth userStore={user} setView={setView}/>
        else if (view === 'Register') return <Register userStore={user} setView={setView}/>
        else if (view === 'UserSettings') return <UserSettings/>
    }
    return (
        <AuthModule>
            <ViewContent/>
        </AuthModule>
    );
};

// export async function getServerSideProps (context){
//     const redirectUrl = context?.query?.callbackUrl || "/i love ur mom";
//     const token = await getToken(context);
//     console.log('has token')
//
//     if(token){
//         return {
//             redirect: {
//                 destination: "/",
//                 permanent: false
//             }
//         }
//     }
//     return {
//         props: {
//             redirectUrl
//         }
//     }
// }

// export default Page;