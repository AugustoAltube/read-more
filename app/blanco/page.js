"use client";
import { use, useState } from 'react';

export default function Blanco() {

    const [state, setState] = useState();
    const [usuario, setUsuaio] = useState("");

    return (
        <main className="flex bg-white min-h-screen flex-col items-center justify-between p-24">
            <h1 className='text-black'>Hola usuario: {usuario}</h1>

            <div className='border border-solid border-black'>
                  <input className='text-black' placeholder='Ingresar' onChange={(e) => {setState(e.target.value)}} type="text" name='Ingresar'></input>
                  <button className='bg-black text-white' onClick = {() => {setUsuaio(state)}}>Enviar</button>

            </div>

        </main>
    );
}