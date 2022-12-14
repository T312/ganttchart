import React, { useEffect } from "react";
import "./App.css";
import Gantt from "./Gantt";
import dataLayout from "./data";
import axios from "axios";
function App() {
  // const callApi = async () => {
  //   const { data } = await axios.get(
  //     "https://ibpmadmin.hahaho.vn/api/qry/doc/932c67bf-c76d-462f-b57f-2de4e4d415f8",
  //     {
  //       headers: {
  //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZDRhMGYxNzgtNDhkYS00YmVmLWFhNDQtMmQyMTMxYjA3Zjk5IiwiSWQiOiJkNGEwZjE3OC00OGRhLTRiZWYtYWE0NC0yZDIxMzFiMDdmOTkiLCJjaWQiOiJJQl8iLCJGdWxsbmFtZSI6Ik5ndXnhu4VuIFRow6FpIEdpYSBMb25nIiwiVXNlcm5hbWUiOiJsb25nLm5ndXllbiIsImV4cCI6MTY3MTA4NzQ5NCwiaXNzIjoiSEFIQUhPIEpTQy4iLCJhdWQiOiJIQUhBSE8gSlNDLiJ9.KzEiRTfJl3YyHQcf-NeQZAY_E7cJgPV5sObIp8nXNp4`,
  //       },
  //     }
  //   );
  //   console.log(data);
  // };
  // useEffect(async () :  Promise<void> => {
  //   callApi();
  // }, []);
  return (
    <>
      <Gantt tasks={dataLayout}></Gantt>
    </>
  );
}

export default App;
