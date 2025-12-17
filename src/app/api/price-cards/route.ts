import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { id: "asc" },
      include: {
        cards: {
          orderBy: { id: "asc" },
          include: {
            features: {
              orderBy: { id: "asc" },
            },
          },
        },
      },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching price cards:", error);
    return NextResponse.json(
      { error: "Failed to fetch price cards" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      plan,
      price,
      period,
      description,
      buttonLabel,
      categoryId,
      featureIds,
    } = body;
    const card = await prisma.priceCard.create({
      data: {
        plan,
        price,
        period,
        description,
        buttonLabel,
        category: { connect: { id: categoryId } },
        features: { connect: featureIds.map((id: number) => ({ id })) },
      },
      include: { features: true, category: true },
    });
    return NextResponse.json(card);
  } catch (error) {
    console.error("Error creating price card:", error);
    return NextResponse.json(
      { error: "Failed to create price card" },
      { status: 500 },
    );
  }
}
