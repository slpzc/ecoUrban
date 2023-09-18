'use client'
import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";

const SetByUserMarker = ({mapMove, userAddress, setUseCenterPosition, cordsCenter}) => {
    const icon = useRef();
    const markerText = useRef();
    const [markerWidth, setMarkerWidth] = useState(40)
    const [popap, setPopap] = useState(false)
    useEffect(() => {
        if (icon.current && markerText.current) {
            setMarkerWidth(icon.current.offsetWidth + markerText.current.offsetWidth + 15 + 'px')
        }
        if (mapMove) setMarkerWidth('40px')
    }, [userAddress, mapMove])


    const [EcoProblem, setEcoProblem] = useState(false)
    const [UrbanProblem, setUrbanProblem] = useState(false)
    const [CleanProblem, setCleanProblem] = useState(false)

    const emmitClick = () => {
        let cords = cordsCenter
        let address = userAddress
        console.log(cordsCenter)
        axios.post("http://127.0.0.1:8000/api/add-complain/", {cords, address, user_id: 13})
            .then(res => console.log(res))
            .catch(e => console.err(e))
    }

    return (
        <div style={{width: markerWidth}}
             className={`marker ${mapMove || !userAddress || userAddress.length < 2 ? 'load' : ''}`}>
            <div className="line"></div>
            <div ref={icon} className="icon">
                {!userAddress ? <div className="loader"></div> :
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_57_361)">
                            <path
                                d="M9.8715 9.0225L7.956 8.5435L7.793 7.8915C8.3055 7.384 8.6565 6.687 8.7605 5.972C9.0445 5.892 9.2645 5.6485 9.3025 5.343L9.4275 4.343C9.454 4.132 9.389 3.9185 9.249 3.7585C9.167 3.6645 9.0635 3.5935 8.949 3.55L8.995 2.6085L9.182 2.421C9.4635 2.1215 9.697 1.608 9.209 0.863C8.834 0.2905 8.197 0 7.315 0C6.967 0 6.166 0 5.42 0.501C3.29 0.5455 3 1.535 3 2.5C3 2.7245 3.0545 3.23 3.0905 3.535C2.962 3.5755 2.845 3.6505 2.754 3.7535C2.612 3.915 2.5455 4.1295 2.5725 4.343L2.6975 5.343C2.7385 5.669 2.986 5.9255 3.299 5.9865C3.4025 6.674 3.7355 7.3485 4.2185 7.8475L4.0445 8.544L2.129 9.023C0.875 9.336 0 10.457 0 11.75C0 11.888 0.112 12 0.25 12H11.75C11.888 12 12 11.887 12 11.749C12 10.457 11.125 9.336 9.8715 9.0225Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_57_361">
                                <rect width="12" height="12" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                }
            </div>
            {
                popap ? <div className='PopapIndustry'>
                    <p>Выберите тип жалобы: </p>
                    <button onClick={() => setEcoProblem(!EcoProblem)}
                            className={`${EcoProblem ? 'active' : null}`}>Проблема экологии
                    </button>
                    <button onClick={() => setUrbanProblem(!UrbanProblem)}
                            className={`${UrbanProblem ? 'active' : null}`}>Проблема урбанистики
                    </button>
                    <button onClick={() => setCleanProblem(!CleanProblem)}
                            className={`${CleanProblem ? 'active' : null}`}>Проблема чистоты места
                    </button>
                    <button className='reply' onClick={emmitClick}>отправить жалобу</button>
                </div> : null
            }
            {!mapMove && userAddress && userAddress.length > 1 ?
                <span ref={markerText}> {userAddress.length > 1 ? userAddress : ''}
                    <button onClick={() => setPopap(true)}>оставить жалобу</button> </span> : ''}
        </div>
    )
};

export default SetByUserMarker;