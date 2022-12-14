import React, { useEffect, useState } from "react";
import { gantt } from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
// import "dhtmlx-gantt/codebase/skins/dhtmlxgantt_material.css";
type prop = {
  tasks: any;
};

const Gantt = ({ tasks }: prop) => {
  const [ganttContainer, setGanttContainer] = useState<any>();
  useEffect(() => {
    gantt.config.columns = [
      { name: "text", label: "Task name", tree: true, width: 150 },
      { name: "holder", label: "Holder", align: "center", width: 100 },
      { name: "start_date", label: "Start time", align: "center", width: 150 },
      { name: "end_date", label: "End date", align: "center", width: 150 },
      // {
      //   name: "progress",
      //   label: "Progress",
      //   align: "center",
      //   width: 40,
      //   template: function (task: any) {
      //     return Math.round(task.progress * 100) + "%";
      //   },
      // },
      { name: "add", label: "", min_width: 1 },
    ];
    gantt.templates.grid_row_class = function (start, end, task) {
      if (task.$level >= 1) {
        return "nested_task";
      }
      return "";
    };
    gantt.init(ganttContainer);
    gantt.parse(tasks);
  });

  // useEffect(() => {
  //   // gantt.config.columns = [
  //   //   { name: "text", label: "Task name", tree: true, width: 150 },
  //   //   { name: "holder", label: "Holder", align: "center", width: 100 },
  //   //   { name: "start_date", label: "Start time", align: "center", width: 150 },
  //   //   { name: "end_date", label: "End date", align: "center", width: 150 },
  //   //   // {
  //   //   //   name: "progress",
  //   //   //   label: "Progress",
  //   //   //   align: "center",
  //   //   //   width: 40,
  //   //   //   template: function (task: any) {
  //   //   //     return Math.round(task.progress * 100) + "%";
  //   //   //   },
  //   //   // },
  //   //   { name: "add", label: "", min_width: 1 },
  //   // ];
  //   // gantt.templates.grid_row_class = function (start, end, task) {
  //   //   if (task.$level >= 1) {
  //   //     return "nested_task";
  //   //   }
  //   //   return "";
  //   // };
  //   // gantt.config.scale_height = 54;
  //   // gantt.plugins({
  //   //   tooltip: true,
  //   // });
  //   // gantt.config.lightbox.sections = [
  //   //   {
  //   //     name: "description",
  //   //     height: 70,
  //   //     map_to: "text",
  //   //     type: "textarea",
  //   //     focus: true,
  //   //   },
  //   //   // { name: "period", height: 72, map_to: "auto", type: "time" },
  //   //   {
  //   //     name: "time",
  //   //     height: 72,
  //   //     map_to: "auto",
  //   //     type: "time",
  //   //     year_range: 10,
  //   //   },
  //   // ];
  //   // gantt.config.scales = [
  //   //   { unit: "month", step: 1, format: "%F, %Y" },
  //   //   { unit: "week", step: 1 },
  //   //   { unit: "day", step: 1, format: "%D" },
  //   // ];
  //  //    gantt.init(ganttContainer);
  //   gantt.parse(tasks);
  // });

  return (
    <div
      ref={(input) => {
        setGanttContainer(input);
      }}
    ></div>
  );
};

export default Gantt;
