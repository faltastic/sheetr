import React from "react";
import { useState, useEffect } from "react";
import Tabletop from "tabletop";

import EventsAll from "./AllArticles.js";

const sheetID = "117qsaEFQLenUyr6RPyYMPYJtkur_7vBK_NA9hepH6xQ";

export default function Sheetr(props) {
  const [sheet, setSheet] = useState({ data: [] });
  const [dataLoading, setDataLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const fetchTabletop = async () => {
    try {
      Tabletop.init({
        key: sheetID,
        callback: googleData => {
          setSheet({ data: googleData });
          sessionStorage.setItem("savedsheet", JSON.stringify(googleData));
        },
        simpleSheet: true,
      });

      setDataLoading(false);
    } catch (error) {
      console.log(error);
      setLoadingError(true);
    }
  };

  const { params } = props.match;

  useEffect(() => {
    const savedsheet = sessionStorage.getItem("savedsheet");
    if (savedsheet && process.env.REACT_APP_RELOAD_SHEET_ALWAYS !== "true") {
      setSheet({ data: JSON.parse(savedsheet) });
      setDataLoading(false);
    } else {
      setDataLoading(true);
      fetchTabletop();
    }
  }, []);

  if (dataLoading) {
    return <div>Loading .. </div>;
  } else if (loadingError) {
    return <div>Something went wrong ...</div>;
  }
  return (
    <div>
      <EventsAll articles={sheet.data} articleIDRoute={params.id} />
    </div>
  );
}
