import React, { useEffect, useState } from "react";
import "./App.css";
import Gantt from "./Gantt";
import axios from "axios";
function App() {
  const [task, setTask] = useState<any>([
    {
      Id: "",
      Name: "hahaho",
      CreatedDate: "",
    },
  ]);

  const [tasks, setTasks] = useState<any>({
    data: [
      {
        id: 2,
        text: "Task #2",
        start_date: "12-12-2022",
        duration: 30,
        progress: 0.6,
      },
    ],
  });

  useEffect(() => {
    (async () => {
      const body = {
        applicationCode: "IB_CongViec",
        params: {
          TuNgay: "",
          DenNgay: "",
          NhanSu: "",
          DuAn: "",
          HangMuc: "",
          Status: "",
        },
        orderby: "",
        searchText: "",
        pageIndex: 0,
        pageSize: 666,
      };
      const { data } = await axios.post(
        "https://ibpmadmin.hahaho.vn/api/qry/docs/",
        body,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZDRhMGYxNzgtNDhkYS00YmVmLWFhNDQtMmQyMTMxYjA3Zjk5IiwiSWQiOiJkNGEwZjE3OC00OGRhLTRiZWYtYWE0NC0yZDIxMzFiMDdmOTkiLCJjaWQiOiJJQl8iLCJGdWxsbmFtZSI6Ik5ndXnhu4VuIFRow6FpIEdpYSBMb25nIiwiVXNlcm5hbWUiOiJsb25nLm5ndXllbiIsImV4cCI6MTY3MTA5NzI2OSwiaXNzIjoiSEFIQUhPIEpTQy4iLCJhdWQiOiJIQUhBSE8gSlNDLiJ9.NCaNchnvZBzjE1uMgsR-nK3HBUZXU2MA1IVNie85CkQ`,
          },
        }
      );
      console.log(data);
      setTask(data.Data);
    })();

    return () => {
      console.log("holoooo");
    };
  }, []);
 
  useEffect(() => {
    setTasks({
      data: [
        task.map((items: any) => {
          return {
            id: items.Id,
            text: items.Name,
            start_date: "12-12-2022",
            duration: 30,
            progress: 0.6,
          };
        }),
      ],
    });
  }, []);

  return (
    <>
      <Gantt tasks={tasks}></Gantt>
    </>
  );
}

export default App;
