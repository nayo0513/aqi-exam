"use client";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { PrefectureWithPopulation } from "@/app/types";

export default function Chart(props: {
  prefecturesWithPopulation: PrefectureWithPopulation[];
}) {
  const options = {
    title: {
      text: "総人口推移グラフ",
    },
    series: [
      {
        data: [1, 2, 3],
      },
      { data: [2, 3] },
    ],
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}
