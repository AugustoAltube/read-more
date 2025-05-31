'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6 bg-black relative">
      <h1 className="text-4xl font-bold text-center">Hola Lectores 👋</h1>
      <p className="text-lg text-center">Chupenme el pene</p>

      {/* Imagen del logo muchachos, le doy propiedades */}
      <Image  
        src="/logo.png" // Asegurate de que la imagen exista en /public
        alt="Mi foto"
        width={200}
        height={200}
        className="rounded-full shadow-lg"
      />

      {/* aca puse un prototipo de login */}
      <form className="w-full max-w-sm mt-6 flex flex-col gap-4">
        <input
          type="email"
          placeholder="Correo electrónico"
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Iniciar sesión
        </button>
      </form>

      {/* probando agregar dos semicirculos todavía no funciona 
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-500 rounded-full"></div>
      <div className="fixed top-12 left-1/2 -translate-x-1/2 w-72 h-36 bg-blue-600 rounded-b-full" />
      */}






    </main>
  );
}
