'use client';

import Image from 'next/image';


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center bg-white">

      {/*<div className="min-w-[60%] min-h-[80] bg-[#E6E5FD] rounded-b-full flex-start "></div> */}

      <div className="relative w-full h-[20vh] overflow-hidden z-10">
        <div className="absolute bottom-0 w-full aspect-[2/1] rounded-b-full bg-[#E6E5FD]"></div>
      </div>

      {/*
      <h1 className="text-4xl font-bold text-center ">Hola Lectores 👋</h1>
      <p className="text-lg text-center">Chupenme el pene</p>
      */}

      {/* Imagen del logo muchachos, le doy propiedades */}
        <Image  
          src="/logoSinBorde.png" // Asegurate de que la imagen exista en /public
          alt="Mi foto"
          width={200}
          height={200}
          className=""
        />
     

      {/* aca puse un prototipo de login */}
      <form className="w-full max-w-sm mt-6 flex flex-col  border-solid border-gray border-2 rounded-sm p-4">
        <h2 className='text-black font-mono font-light'>Email</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-black"
        />
        <h2 className='text-black font-mono font-light'>Contraseña</h2>
        <input
          type="password"
          placeholder="Contraseña"
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-black"
        />
        <button
          type="submit"
          className="bg-[#7060F7] text-white py-2 rounded-md hover:bg-[#4A35FB] transition-colors flex items-center justify-center gap-2 mb-4"
        >
          Iniciar sesión <Image src="/iconoInicioSesionBlanco.png" alt="Mi foto" width={14} height={14} className=''></Image>
        </button>
         <h3 className='text-black font-mono underline text-center font-light'>¿Olvidaste tu contraseña?</h3>
         <h3 className='text-black font-mono underline text-center font-light'>¿No tienes una cuenta? Regístrate</h3>
      </form>
        

      <div className="absolute bottom-0 w-full h-[20vh] overflow-hidden z-10">
        <div className="w-full aspect-[2/1] rounded-t-full bg-[#FCECE8]"></div>
      </div>


      {/* <div className="aspect-[2/1] rounded-t-full w-full bg-[#FCECE8]"></div> */}
   

    </main>
  );
}
