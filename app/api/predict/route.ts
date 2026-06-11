import { NextRequest, NextResponse } from 'next/server';
import { predictSales } from '@/lib/model';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const tv = Number(body.tv);
    const radio = Number(body.radio);
    const newspaper = Number(body.newspaper);
    const result = predictSales(tv, radio, newspaper);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Invalid prediction request' },
      { status: 400 }
    );
  }
}
