"use client";

import styles from "./prefectures.module.css";
import { Prefecture } from "@/app/types";

export default function Prefectures(props: {
  prefectures: Prefecture[];
  selectedPrefectures: boolean[];
  switchSelectedPrefecture: (index: number) => void;
}) {
  return (
    <>
      <h2>都道府県</h2>
      {props.prefectures.map((p, i) => {
        return (
          <div key={p.prefCode} className={styles["select-field"]}>
            <label>
              <input
                type="checkbox"
                onChange={() => props.switchSelectedPrefecture(i)}
              />
              <span>{p.prefName}</span>
            </label>
          </div>
        );
      })}
    </>
  );
}
