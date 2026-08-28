import "../../../style/admin-panel/dashboard-overview.css";
import OverviewCard from "./OverviewCard.jsx";
import { useQuery } from "@tanstack/react-query";
import { allUuidsQueryOptions } from "../../../queries/utils/queries.js";

const DashboardOverview = () => {
  const { data = [] } = useQuery(allUuidsQueryOptions());

  return (
    <div className="dashboard-overview">
      {data.map((a) => {
        return (
          <div key={a.uuid}>
            <OverviewCard artistUuid={a.uuid} songUuid={a.song.uuid} />
          </div>
        );
      })}
    </div>
  );
};

export default DashboardOverview;
