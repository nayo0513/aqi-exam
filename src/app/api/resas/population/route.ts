import { RESAS_BASE_URL } from "@/app/consts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const apiKey = process.env.API_KEY;
  const response = await fetch(
    RESAS_BASE_URL +
      "/api/v1/population/composition/perYear?prefCode=" +
      req.nextUrl.searchParams.get("prefCode"),
    {
      headers: {
        "X-API-KEY": apiKey ?? "",
      },
    }
  );
  const json = await response.json();
  return NextResponse.json(json);
}
