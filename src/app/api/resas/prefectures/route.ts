import { RESAS_BASE_URL } from "@/app/consts";
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.API_KEY;
  const response = await fetch(RESAS_BASE_URL + "/api/v1/prefectures", {
    headers: {
      "X-API-KEY": apiKey ?? "",
    },
  });
  const json = await response.json();
  return NextResponse.json(json);
}
