'use client'
import React, {useRef, useEffect, useState} from 'react';
import './map.stylesheet.scss';
import {load} from '@2gis/mapgl';
import {useDispatch} from "react-redux";
import axios from "axios";
import {setUserAddress} from "@//redux//Features/userSlice";
import {usePathname} from "next/navigation";
import GetComponentByPath from "@/app/components/Map/GetComponentByPath";
import Navigation from "@/app/components/Navigation";

const MapComponent = () => {

    const path = usePathname()
    const dispatch = useDispatch();

    const mapContainer = useRef(null);
    const [mapMove, setmapMove] = useState(false);
    const [userAddress, setUserAddressComponent] = useState(null)
    const [cordsCenter, setCordsCenter] = useState([])
    const mapRender = async () => {
        const mapglAPI = await load();
        const newMap = new mapglAPI.Map('container', {
            center: [60.597465, 56.838011],
            zoom: 14,
            key: 'cea7b39a-8ddd-45ed-8522-f7d935c43dc1',
            style: '5e419346-aa90-4557-befa-f00af57d1549',
            styleZoom: 14,
        });

        newMap.on('movestart', () => {
            setmapMove(true);
            setUserAddressComponent('');
            dispatch(setUserAddress(null));
        });
        newMap.on('moveend', () => {
            setmapMove(false);
            setCordsCenter(newMap.getCenter())
            axios.get(`https://catalog.api.2gis.com/3.0/items?point=${newMap.getCenter()[0]}%2C${newMap.getCenter()[1]}&radius=1000&key=cea7b39a-8ddd-45ed-8522-f7d935c43dc1`).then(response => {
                const userAddressByRadius = response.data.result.items.find(item => item.hasOwnProperty('address_name'));
                dispatch(setUserAddress(userAddressByRadius));
                setUserAddressComponent(userAddressByRadius?.address_name);
            });
        });
    };

    useEffect(() => {
        console.log('call func: [mapRender]');
        mapRender();
    }, []);

    return (
        <div>
            <div id='container' className='map-container' ref={mapContainer}></div>
            <GetComponentByPath path={path} props={{mapMove, userAddress, cordsCenter}}/>
            {
                path.includes('/home') ? <Navigation/> : null
            }
        </div>
    );
};

export default MapComponent;