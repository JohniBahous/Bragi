import "../../../style/admin-panel/overview-card.css";
import { useQueries } from "@tanstack/react-query";
import { artistByIdQueryOptions } from "../../../queries/artists/queries.js";
import { songByIdQueryOptions } from "../../../queries/songs/queries.js";

const OverviewCard = (props) => {
  const [artistQuery, songQuery] = useQueries({
    queries: [
      artistByIdQueryOptions(props.artistUuid),
      songByIdQueryOptions(props.songUuid),
    ],
  });

  return (
    <div className="overview-card">
      <div className="overview-card-top">
        <p>Artist Name: {artistQuery.data?.stageName}</p>
        <p>Song Title: {songQuery.data?.title}</p>
      </div>
      <div className="overview-card-bottom">
        <span>Times Played</span>
        <div className="overview-card-bottom-counters">
          <p>
            Full Song: {songQuery.data?.songPlays} Snippet:{" "}
            {songQuery.data?.snippetPlays}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
