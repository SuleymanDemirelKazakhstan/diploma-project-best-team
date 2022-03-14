import React from "react";
import iphone from '../image/iphone.png';
const Mobile = () => {
    return (
        <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between pt-12 md:flex-row">
            <div className=" mt-8 space-y-2 w-1/2">
                <h2 className="text-3xl font-semibold font-normal tracking-normal">SDU App</h2>
                <p className="text-xl text-slate-800 pr-10 font-medium">Устанавливайте и получайте <br></br> новые знания и навыки каждый день с TutorGo. <br></br>Приложение дарит возможность обучаться в дороге.</p>
                <div className="bg-gray-500 text-xl text-white font-semibold rounded-md mt-4 py-2 w-48 text-center">Скачать</div>
            </div>
            <div className="mt-8 w-1/2">
                <div className="">
                    <img src={iphone} className='p-8'/>
                </div>
            </div>
        </div>
        </div>
    );

}


export default Mobile;