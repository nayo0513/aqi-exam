import { Population, Prefecture } from "./types";

export async function getPrefectures(): Promise<Prefecture[]> {
  const response = await fetch("/api/resas/prefectures");
  const json = await response.json();
  return json.result;
}

export async function getPopulation(prefCode: number): Promise<Population[]> {
  const response = await fetch(`/api/resas/population?prefCode=${prefCode}`);
  const json = await response.json();
  return json?.result?.data[0]?.data ?? [];
}
