"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

async function getUsuario() {
  const response = await fetch("http://localhost:2000/usuario");
  const json = await response.json();
  console.log(response);
}

//Declarar el GET en front
export default function Home() {
  const [data, setData] = useState("No estoy definido");
  async function fetchBackend(params) {
    const response = await fetch("http://localhost:2000/casa");
    const json = await response.json();
    setData(json.casa);
  }

  //Declarar el POST en front
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const postData = async () => {
    try {
      const response = await fetch("http://localhost:2000/verificarUsuario", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email, //Aca va el dato a POSTEAR
          password: password,
        }),
      });
      const result = await response.json(); //No estoy usando el result porque es un objeto
      console.log(response);
      if(response.status === 200) {window.location.href = "/blanco"};
    }
    catch (error) {
      console.error(error);
    }
  }


  //Declarar el PUT en front
  const putData = async () => {
    const response = await fetch("http://localhost:2000/casa", {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key: "Dato que envia el PUT", //Aca va el dato del PUT
      }),
    });
    const result = await response.json();
    console.log(response);
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <div className="relative w-full h-[20vh] overflow-hidden z-10">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[200%] aspect-[2/1] rounded-b-full bg-[#E6E5FD] "></div>
      </div>

      <Link className="text-black" href="/blanco">Blanco</Link>
      <button className="text-black" onClick={() => { getUsuario() }}>GET usuario</button>
      <Image
        src="/logoSinBorde.png" // Asegurate de que la imagen exista en /public
        alt="Mi foto"
        width={200}
        height={200}
        className=""
      />

      {/* aca puse un prototipo de login */}
      <form className="w-full max-w-sm mt-6 flex flex-col  border-solid border-gray border-2 rounded-sm p-4">
        <h2 className="text-black font-mono font-light">Email</h2>
        <input
          onChange={(e) => { setEmail(e.target.value) }}
          type="email"
          placeholder="Correo electrónico"
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-black"
        />
        <h2 className="text-black font-mono font-light">Contraseña</h2>
        <input
          onChange={(e) => { setPassword(e.target.value) }}
          type="password"
          placeholder="Contraseña"
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-black"
        />
        <button
          onClick={() => {
            postData();
          }}
          type="submit"
          className="bg-[#7060F7] text-white py-2 rounded-md hover:bg-[#4A35FB] transition-colors flex items-center justify-center gap-2 mb-4"
        >
          Iniciar sesión{" "}
          <Image
            src="/iconoInicioSesionBlanco.png"
            alt="Mi foto"
            width={14}
            height={14}
            className=""
          ></Image>
        </button>
        <h3 className="text-black font-mono underline text-center font-light">
          ¿Olvidaste tu contraseña?
        </h3>
        <h3 className="text-black font-mono underline text-center font-light">
          ¿No tienes una cuenta? Regístrate
        </h3>
      </form>

      <div className="relative w-full h-[20vh] overflow-hidden z-10">
        <div className="absolute top-0 w-[200%] left-1/2 -translate-x-1/2 aspect-[2/1] rounded-t-full bg-[#FCECE8]"></div>
      </div>
    </main>
  );
}
