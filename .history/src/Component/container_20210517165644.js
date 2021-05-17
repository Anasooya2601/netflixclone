import React from "react";
import Cards from "./Row";

export default function Container({ data, results, search }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-122">
      <Cards movies={search ? results : data} />
    </div>
  );
}