import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      symbol: "RELIANCE",
      price: 3210,
      change: 6.3,
      volume: 1000000,
    },
    {
      symbol: "INFY",
      price: 1850,
      change: 7.2,
      volume: 2000000,
    },
    {
      symbol: "TCS",
      price: 4200,
      change: -1.2,
      volume: 5000000,
    },
  ]);
}