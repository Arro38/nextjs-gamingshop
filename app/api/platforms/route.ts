import { getAllPlatforms } from "@/prisma/platform";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await getAllPlatforms();
    return NextResponse.json(products, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
