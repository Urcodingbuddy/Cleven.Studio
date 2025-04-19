import { NextResponse } from 'next/server';
// import { PrismaClient } from '../../../../../../packages/generated/client';
// const prisma = new PrismaClient();
import prisma from "@repo/db"
export async function GET(
  req: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  try {
    const { category } = await params;
    const plans = await prisma.plan.findMany({
      where: { category },
      orderBy: { price: 'asc' }
    });
    
    if (!plans || plans.length === 0) {
      return NextResponse.json({ error: 'No plans found for this category' }, { status: 404 });
    }
    return NextResponse.json(plans);
  } catch (err) {
    console.error('Error fetching plans by category:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
