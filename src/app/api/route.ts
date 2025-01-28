import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Cliente Prisma configurado previamente

export async function GET() {
  try {
    // Consulta los datos de la tabla `perfume` usando Prisma
    const perfumes = await prisma.$queryRaw`SELECT * FROM perfume`;

    // Devuelve los perfumes en formato JSON
    return NextResponse.json(perfumes);
  } catch (error) {
    console.error("Error al obtener los perfumes:", error);

    // Responde con un error 500 en caso de fallo
    return NextResponse.json(
      { message: "Error al obtener los perfumes" },
      { status: 500 }
    );
  }
}
