import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const perfumes = await prisma.$queryRaw`SELECT * FROM perfume WHERE house = 'Armaf' LIMIT 10`;
    console.log("Perfumes obtenidos:", perfumes);
    return NextResponse.json(perfumes);
  } catch (error) {
    console.error("Error al obtener los perfumes:", error);
    return NextResponse.json(
      { message: "Error al obtener los perfumes" },
      { status: 500 }
    );
  }
}
