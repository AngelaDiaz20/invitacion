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
        <section className="bg-[url('/assets/img/backgrounds/bg-pareja2.png')] bg-no-repeat bg-cover bg-center py-10 px-8">
            <div className="max-w-[600px] m-auto cont-palette px-5 py-8">
                <p className='max-w-[400px] m-auto title-text'>Después de nuestra boda, tendremos un espacio especial para celebrar juntos.</p>
                <div className="flex flex-col md:flex-row justify-around my-4">
                    <p className="flex flex-col justify-center items-center">
                        <FaCalendarDays className="text-[50px] my-3" /> Julio 06, 2021
                    </p>
                    <a href="https://www.google.com/maps/dir/4.6923776,-74.0950016/Conjunto+Residencial+Centenari/@4.6128271,-74.0846058,17z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8e3f99ab6b2a5085:0xf66a4f34fd7d20e1!2m2!1d-74.0832547!2d4.6119145?entry=ttu" target='_blank'>
                    <p className="flex flex-col justify-center items-center mt-4 md:mt-0">
                        <FaMapLocationDot className="text-[50px] my-3" /> Calle 18 #20-51
                        <br />
                        Conjunto Residencial Centenari
                        <br />
                        Terraza Torre 6
                    </p></a>
                </div>
                <h1 className={`text-[20px] text-[40px] sm:text-[45px] md:text-[50px] lg:text-[70px] leading-none mt-10 mb-4 px-8 title-text ${ephesis.className}`}>Código de vestimenta</h1>
                <p>Para este día tan especial, hemos seleccionado una paleta de colores específica para la decoración y los elementos que formarán parte de nuestro entorno. Por este motivo, te pedimos amablemente que evites usar los siguientes tonos en tu vestimenta.</p>
                <div className="palette-container mt-20">
                    <Paletten />
                </div>

            </div>
        </section>
    );
}

export default Palette;

