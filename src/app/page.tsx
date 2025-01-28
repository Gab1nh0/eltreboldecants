// app/page.tsx
import React from "react";
import PerfumeList from "./components/componente";

type Perfume = {
  id: number;
  house:string;
  name: string;
  description: string;
  price: number;
  stock: number;
}


export default async function Home() {
  try {
    const res = await fetch("https://main.d1h822f25eyiah.amplifyapp.com/api/perfume", {
      cache: "no-store", // Asegura que siempre obtengas datos actualizados
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch perfumes: ${res.statusText}`);
    }

    const perfumes: Perfume[] = await res.json();

    return (
      <>
        <PerfumeList perfumes={perfumes} />
      </>
    );
  } catch (error) {
    return (
      <div>
        <h1>Error al cargar los perfumes</h1>
        <p>{(error as Error).message}</p>
      </div>
    );
  }
}