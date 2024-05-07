"use client";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { PrefectureWithPopulation } from "@/app/types";
import { useMemo } from "react";

export default function Chart(props: {
  prefecturesWithPopulation: PrefectureWithPopulation[];
  selectedPrefectures: boolean[];
}) {
  const options = {
    title: {
      text: "総人口推移グラフ",
    },
    xAsis: {
      title: {
        text: "年度",
      },
      crosshair: true,
    },
    yAxis: {
      title: {
        text: "人口数",
      },
    },
  };

  const series = useMemo(() => {
    return props.prefecturesWithPopulation
      .map((prefecture, i) => {
        if (!props.selectedPrefectures[i]) return null;
        return {
          name: prefecture.prefName,
          data: prefecture.population.map((p) => [p.year, p.value]),
        };
      })
      .filter((s) => s !== null);
  }, [props.prefecturesWithPopulation, props.selectedPrefectures]);

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={{ ...options, series }}
      />
    </>
  );
}
