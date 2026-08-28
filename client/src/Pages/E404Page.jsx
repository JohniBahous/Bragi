import { useEffect, useState } from "react";
import "../style/misc/404.css";

const E404Page = () => {
  const [cells, setCells] = useState([]);

  useEffect(() => {
    const totalCells = 150;
    let arr = Array.from({ length: totalCells }, () => "ERROR");

    const randomIndexes = (count) => {
      const set = new Set();
      while (set.size < count) {
        set.add(Math.floor(Math.random() * totalCells));
      }
      return [...set];
    };

    randomIndexes(5).forEach((i) => (arr[i] = { text: "404", type: "404" }));
    randomIndexes(5).forEach(
      (i) => (arr[i] = { text: "PARDON OUR DUST", type: "dust" }),
    );

    setCells(arr);
  }, []);

  return (
    <div className="e404-page">
      <div className="e404-page-grid">
        {cells.map((cell, i) => (
          <div
            key={i}
            className={`e404-page-grid-cell ${
              cell.type === "404"
                ? "e404-page-grid-special-cell e404-page-grid-special-cell-404"
                : cell.type === "dust"
                  ? "e404-page-grid-special-cell e404-page-grid-special-cell-dust"
                  : ""
            }`}
          >
            {typeof cell === "string" ? cell : cell.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default E404Page;
