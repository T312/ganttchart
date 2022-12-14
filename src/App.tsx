import React, { useEffect, useState } from "react";
import "./App.css";
import Gantt from "./Gantt";
import axios from "axios";
function App() {
  const [task, setTask] = useState<any>({
    Id: "",
    Name: "hahaho",
    CreatedDate: "",
  });

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
      const { data } = await axios.get(
        "https://ibpmadmin.hahaho.vn/api/qry/doc/a99f5344-3c48-43c6-8b42-ca9c8290f7e6",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZDRhMGYxNzgtNDhkYS00YmVmLWFhNDQtMmQyMTMxYjA3Zjk5IiwiSWQiOiJkNGEwZjE3OC00OGRhLTRiZWYtYWE0NC0yZDIxMzFiMDdmOTkiLCJjaWQiOiJJQl8iLCJGdWxsbmFtZSI6Ik5ndXnhu4VuIFRow6FpIEdpYSBMb25nIiwiVXNlcm5hbWUiOiJsb25nLm5ndXllbiIsImV4cCI6MTY3MTA4NzQ5NCwiaXNzIjoiSEFIQUhPIEpTQy4iLCJhdWQiOiJIQUhBSE8gSlNDLiJ9.KzEiRTfJl3YyHQcf-NeQZAY_E7cJgPV5sObIp8nXNp4`,
          },
        }
      );
      console.log(data);
      setTask(data.Data.Document);
      setTasks({
        data: [
          {
            id: 1,
            text: `${data.Data.Document.Name} `,
            start_date: "12-12-2022",
            duration: 7,
            progress: 0.6,
          },
          {
            id: 2,
            text: "Task #2",
            start_date: "12-12-2022",
            duration: 30,
            progress: 0.6,
          },
        ],
      });
    })();

    return () => {
      console.log("holoooo");
    };
  }, []);

  useEffect(() => {
    console.log(task.Name);
  }, [task]);

  return (
    <>
      <Gantt tasks={tasks}></Gantt>
    </>
  );
}

export default App;
