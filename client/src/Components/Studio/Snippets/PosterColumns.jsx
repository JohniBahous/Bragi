import "../../../style/main-view/poster.css";
import { useQuery } from "@tanstack/react-query";
import { allUuidsQueryOptions } from "../../../queries/utils/queries.js";
import PosterColumnsElement from "./PosterColumnsElement.jsx";
const PosterColumns = () => {
  const { data = [] } = useQuery(allUuidsQueryOptions());
  return (
    <div className="poster-columns-base">
      {data.map((a, index) => {
        return (
          <div className="poster-columns-element" key={a.song.uuid}>
            <PosterColumnsElement
              dataKey={index + 1}
              artistUuid={a.uuid}
              songUuid={a.song.uuid}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PosterColumns;
