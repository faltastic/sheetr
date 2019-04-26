import React from "react";
import { useState, useEffect } from "react";
import Tabletop from "tabletop";

import EventsAll from "./EventsAll.js";

import "./../styles/program.css";

const sheetID = "117qsaEFQLenUyr6RPyYMPYJtkur_7vBK_NA9hepH6xQ";

export default function Program(props) {
  const [sheet, setSheet] = useState({ data: [] });
  const [dataLoading, setDataLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  //   const { params } = props.match;

  const fetchTabletop = async () => {
    try {
      Tabletop.init({
        key: sheetID,
        callback: googleData => {
          setSheet({ data: googleData });
        },
        simpleSheet: true
      });
      setDataLoading(false);
    } catch (error) {
      console.log(error);
      setLoadingError(true);
    }
  };

  useEffect(() => {
    setDataLoading(true);
    setLoadingError(false);
    fetchTabletop();
    //setDataLoading(false);
  }, []);

  if (dataLoading) {
    return <div>Loading .. </div>;
  } else if (loadingError) {
    return <div>Something went wrong ...</div>;
  }
  return (
    <div>
      <EventsAll
        events={sheet.data}
        // openEventFromURL={params.id}
      />
    </div>
  );
}
