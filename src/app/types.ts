export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type Population = {
  year: number;
  value: number;
};

export type PrefectureWithPopulation = Prefecture & { population: Population[] };
