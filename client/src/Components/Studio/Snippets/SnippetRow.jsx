import { useState, useRef } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import "../../../style/main-view/snippet-row.css";
import SnippetRowElement from "./SnippetRowElement.jsx";
import useAudioStore from "../../../stores/useAudioStore.js";
import { allUuidsQueryOptions } from "../../../queries/utils/queries.js";
import { incrementPlaysMutation } from "../../../queries/songs/mutations.js";

const SnippetRow = () => {
  const { setPlayRequest } = useAudioStore();

  const [activeSnippetId, setActiveSnippetId] = useState(null);

  const { data: uuidData = [] } = useQuery(allUuidsQueryOptions());
  const incrementPlays = useMutation(incrementPlaysMutation());
  const timeoutRef = useRef(undefined);

  const handleSnippetPlayClick = async (id) => {
    if (timeoutRef.current) return;

    setActiveSnippetId(id);

    setPlayRequest({
      songId: id,
      type: "snippet",
    });

    incrementPlays.mutate({ uuid: id, type: "snippet" });

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = undefined;
    }, 1000);
  };

  return (
    <div className="snippet-row">
      <div className="snippet-row-content">
        {uuidData.map((a, index) => {
          const pos = (index + 1).toString();
          return (
            <SnippetRowElement
              key={a.uuid}
              position={pos}
              onPlay={handleSnippetPlayClick}
              uuid={a.song.uuid}
              active={activeSnippetId === a.song.uuid}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SnippetRow;
