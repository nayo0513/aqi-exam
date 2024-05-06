"use client";

import styles from "./prefectures.module.css";
import { useEffect, useState } from "react";
import { Prefecture } from "@/app/types";

export default function Prefectures() {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  useEffect(() => {
    getPrefectures().then((p) => setPrefectures(p));
  }, []);

  return (
    <>
      <h2>都道府県</h2>
      {prefectures.map((p) => {
        return (
          <div key={p.prefCode} className={styles["select-field"]}>
            <label>
              <input type="checkbox" />
              <span>{p.prefName}</span>
            </label>
          </div>
        );
      })}
    </>
  );
}

async function getPrefectures(): Promise<any[]> {
  const response = await fetch("/api/resas/prefectures");
  const json = await response.json();
  return json.result;
}
