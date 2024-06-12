"use client";
import React, { useState } from 'react';
import { FaMapLocationDot, FaCalendarDays } from "react-icons/fa6";
import { ephesis } from "../ui/fonts"
import Paletten from './Paletten';

const Palette = () => {
    const [isFixed, setIsFixed] = useState(false);

    const handleToggleHover = () => {
        setIsFixed(!isFixed);
    };

    return (
        <section className="bg-[url('/assets/img/backgrounds/bg-pareja2.png')] bg-no-repeat bg-cover bg-center pt-16 px-8">
            <div className="max-w-[500px] m-auto">
                <p>Luego de nuestra boda tendremos un espacio para para celebrar juntos</p>
                <div className='flex justify-around my-4'>
                    <p className='flex flex-col justify-center items-center'> <FaCalendarDays className="text-[50px] my-3" /> Julio 06, 2021</p>
                    <p className='flex flex-col justify-center items-center'> <FaMapLocationDot className="text-[50px] my-3" />  Calle #123</p></div>
                <h1 className={`text-[20px] sm:text-[20px] md:text-[30px] lg:text-[50px] my-4 px-8 title-text ${ephesis.className}`}>Código de vestimenta</h1>
                <p>En este día tenemos definida una paleta de colores, contaremos con la decoración y elementos que formarán parte de nuestro día, por eso queremos pedirte el favor de no usar los siguientes tonos.</p>
                <div className="palette-container my-20 pb-20">
                    {/* <div className={`card-palette ${isFixed ? 'fixed-hover' : ''}`}>
                        <span className="text"></span>
                    </div>
                    <button onClick={handleToggleHover} className="toggle-button mt-40 mb-16">
                        {isFixed ? 'Ocultar paleta' : 'Ver paleta'}
                    </button> */}
                    <Paletten/>
                </div>
                
            </div>
        </section>
    );
}

export default Palette;

