import React from 'react';
import {PageModule} from "@/app/(pagess)/home/PageModule";

const Page = () => {
    return (
        <PageModule>
            <div className="panel profile">
                <div className="mobile-wrapper">
                    <h1 className="title">Профиль</h1>
                    <div className="avatar">
                        <b>Аватар</b>
                        <div class="avatar-content">
                            <div class="avatar-content_image"></div>
                            <button>Загрузить новое изображение</button>
                        </div>
                        <p>Максимально допустимый размер - 1 МБ. Разрешенные форматы JPG, PNG и GIF.</p>
                    </div>
                    <div className="personally_input">
                        <b>Имя</b>
                        <div class="personally_input-input">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_316_3176)">
                                    <path d="M11.5167 10.5262L9.282 9.96742L9.09183 9.20675C9.68975 8.61467 10.0992 7.8015 10.2206 6.96733C10.5519 6.874 10.8086 6.58992 10.8529 6.2335L10.9987 5.06683C11.0297 4.82067 10.9538 4.57158 10.7905 4.38492C10.6948 4.27525 10.5741 4.19242 10.4405 4.14167L10.4942 3.04325L10.7123 2.8245C11.0407 2.47508 11.3132 1.876 10.7438 1.00683C10.3063 0.338917 9.56317 0 8.53417 0C8.12817 0 7.19367 -6.95387e-08 6.32333 0.5845C3.83833 0.636417 3.5 1.79083 3.5 2.91667C3.5 3.17858 3.56358 3.76833 3.60558 4.12417C3.45567 4.17142 3.31975 4.25892 3.21358 4.37967C3.04733 4.56808 2.97033 4.81833 3.00125 5.06742L3.14708 6.23408C3.19492 6.61442 3.48367 6.91367 3.84883 6.98483C3.96958 7.78692 4.35808 8.57383 4.92158 9.156L4.71858 9.96858L2.48383 10.5274C1.02083 10.892 0 12.1998 0 13.7083C0 13.8693 0.130667 14 0.291667 14H13.7083C13.8693 14 14 13.8682 14 13.7072C14 12.1998 12.9792 10.892 11.5167 10.5262Z" fill="#666666"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_316_3176">
                                        <rect width="14" height="14" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <input type="text" placeholder="Чекунов Алексей Артёмович"/>
                        </div>
                    </div>
                    <div className="ratings">
                        <b>Рейтинг</b>
                        <div class="ratings_wrapper">
                            <div class="user-rating">
                                <p>У вас отличный рейтинг!</p>
                               <div>4.6<span>/16</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageModule>
    );
};

export default Page;