import React from "react";
import { CalendarIcon } from "@heroicons/react/outline"; 
import i from '../image/12.webp';
const Nav = () =>{
    return (
        <>
        <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between pt-12 md:flex-row">
            <div className=" mt-8 space-y-1 w-1/2">
                <h2 className="text-3xl font-semibold font-normal tracking-normal">Подтягивайте знание</h2>
                <h1 className="text-4xl font-bold text-black">Доступно и эффективно</h1>
                <p className="text-xl text-gray-400">SDU Assistant - образовательная платформа для студентов СДУ, который поможет подтянуть знание в любое удобное время и достичь успеха.</p>
            </div>
            <div className="mt-8 w-1/2">
                <div className="">
                    <img src={i} className=''/>
                </div>
            </div>
        </div>
        </div>

        <div className="max-w-7xl mx-auto pt-32">
            <div className="space-y-2">
                <h1 className="text-black text-3xl font-semibold">Наши приемущества</h1>
                <span className="text-gray-500">4 причини почему вы должны выбрать SDU Assistant</span>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-y-6 gap-x-6">

                <div className="flex flex-row space-x-4">
                    <CalendarIcon className="w-auto h-10" />
                    <div>
                        <h3 className="text-xl font-semibold">Доступно и выгодно</h3>
                        <p className="text-gray-500 text-base">Студентам предлагается возможность свободного выбора курсов и материала.</p>
                    </div>
                </div>
                <div className="flex flex-row space-x-4">
                    <CalendarIcon className="w-auto h-10" />
                    <div>
                        <h3 className="text-xl font-semibold">Удобное расписание</h3>
                        <p className="text-gray-500 text-base w-96">Вы сами выбираете время занятий, чтобы учиться в удобное время для вас.</p>
                    </div>
                </div>
                <div className="flex flex-row space-x-4">
                    <CalendarIcon className="w-auto h-10" />
                    <div>
                        <h3 className="text-xl font-semibold">Удобное расписание</h3>
                        <p className="text-gray-500 text-base w-96">Студентам предлагается возможность свободного выбора курсов и материала.</p>
                    </div>
                </div>
                <div className="flex flex-row space-x-4">
                    <CalendarIcon className="w-auto h-10" />
                    <div>
                        <h3 className="text-xl font-semibold">Высокий результат</h3>
                        <p className="text-gray-500 text-base w-96">Следуя рекомендациям ассистентов, вы обязательно увидите хороший прогресс.</p>
                    </div>
                </div>

            </div>
        </div>
        
        </>
    );

}

export default Nav;