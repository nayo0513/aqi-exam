"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Chart from "./components/chart";
import Prefectures from "./components/prefectures";
import { PrefectureWithPopulation } from "./types";
import { getPopulation, getPrefectures } from "@/app/apiClient";

export default function Page() {
  const [selectedPrefectures, setSelectedPrefectures] = useState<boolean[]>([]);
  const [prefecturesWithPopulation, setPrefecturesWithPopulation] = useState<
    PrefectureWithPopulation[]
  >([]);

  useEffect(() => {
    (async () => {
      const prefectures = await getPrefectures();
      setSelectedPrefectures(new Array(prefectures.length).fill(false));
      setPrefecturesWithPopulation(
        prefectures.map((prefecture) => {
          return {
            prefCode: prefecture.prefCode,
            prefName: prefecture.prefName,
            population: [],
          };
        })
      );
      prefectures.forEach(async (prefecture, i) => {
        const population = await getPopulation(prefecture.prefCode);
        setPrefecturesWithPopulation((prev) => {
          const newPrefecturesWithPopulation = [...prev];
          newPrefecturesWithPopulation[i].population = population;
          return newPrefecturesWithPopulation;
        });
      });
    })();
  }, []);
  setTimeout(() => {
    console.log(prefecturesWithPopulation);
  }, 1000);

  return (
    <>
      <Prefectures
        prefectures={prefecturesWithPopulation}
        selectedPrefectures={selectedPrefectures}
        switchSelectedPrefecture={(index) =>
          switchSelectedPrefecture(setSelectedPrefectures, index)
        }
      />
      <Chart prefecturesWithPopulation={prefecturesWithPopulation} />
    </>
  );
}

function switchSelectedPrefecture(
  setSelectedPrefectures: Dispatch<SetStateAction<boolean[]>>,
  index: number
) {
  setSelectedPrefectures((prev) => {
    const newSelectedPrefectures = [...prev];
    newSelectedPrefectures[index] = !newSelectedPrefectures[index];
    return newSelectedPrefectures;
  });
}
