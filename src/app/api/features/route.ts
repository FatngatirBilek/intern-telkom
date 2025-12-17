import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const features = await prisma.feature.findMany();
  return NextResponse.json(features);
}

export async function POST(req: Request) {
  const { title, description } = await req.json();
  const feature = await prisma.feature.create({ data: { title, description } });
  return NextResponse.json(feature);
}
