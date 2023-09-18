'use client'

import {useEffect} from "react";
import axios from "axios";
import { headers } from "next/dist/client/components/headers";

export default function Home() {
    useEffect(() => {
        console.log('AXIOS  ')
        axios.post("http://127.0.0.1:8000/api/get-news/").then(res => {
            console.log(res)
        }).catch(err => console.error(err))
            }, []);
    return (
        <div>
            <p>trying call render..</p>
        </div>
    )
}

Home.auth = {
    required: true
};