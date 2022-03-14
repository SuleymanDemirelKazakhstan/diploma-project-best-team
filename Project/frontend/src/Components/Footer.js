import React from 'react';
import logo from '../image/logo.png';
import { FaFacebook, FaTelegram} from "react-icons/fa";
import image from '../image/app store.png';
const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto mt-24 divide-y'>
        <div className='flex flex-col md:flex-row space-x-12  my-10'>
            <div className='w-1/4 '>
                <img src={logo} className='h-14 w-auto'/>
                <p className='text-base mt-4 text-gray-400'>SDU Assistant - образовательная платформа для улучшения знания студентов СДУ</p>
            </div>
            <div className='flex flex-col w-1/4 space-y-2'>
                <h1 className='text-xl font-semibold text-black'>О проекте</h1>
                <a className='text-base font-normal'>Главная Найти ассистента </a>
                <a className='text-base font-normal'>Стать преподавателем </a>
                <a className='text-base font-normal'>Публичная оферта</a>
            </div>
            <div className='flex flex-col w-1/4 space-y-2'>
                <h1 className='text-xl font-semibold'>Контакты</h1>
                <a className='text-base font-normal'>+7 700 777 77 77</a>
                <a className='text-base font-normal'>info@sdu.edu.kz</a>
                <div className='flex space-x-2 mt-4'>
                    <FaTelegram className='text-base w-6 h-6'/>
                    <FaFacebook  className='text-base w-6 h-6'/>
                </div>
            </div>
            <div className='w-1/4 space-y-2'>
                <h1 className='text-xl font-semibold'>Для мобильных версий</h1>
                <img src={image} />
            </div>
           
        </div>
         <p className='text-base pt-4 text-gray-400'>© 2021 SDU Assistant. Все права защищены.</p>
         
         </div>
    );
}


export default Footer;