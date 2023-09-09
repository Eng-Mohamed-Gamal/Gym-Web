"use client";

import React, { useRef, useState } from "react";
import { fetchData, options } from "../FetchCostum";

export default function Search({ setMain , main }) {
  const [search, setSearch] = useState("");
  const myRef = useRef() ;

  const Handle = async () => {
    if (search) {
      const EXCERCISES = await fetchData("https://exercisedb.p.rapidapi.com/exercises",options);
      const Result = EXCERCISES.filter((item) => 
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search)
      );
      if(Result){
        setMain(Result)
      }
      setSearch("")
      myRef.current.value = "";
    }
  };

  return (
    <div className="stage-2">
      <div className="container">
        <h2>awesome exercises you should know</h2>
        <div className="flex" >
          <input
            type="text"
            ref={myRef}
            placeholder="search exercises"
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
          />
          <button onClick={Handle}>search</button>
        </div>
      </div>
    </div>
  );
}
