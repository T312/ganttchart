import { useEffect, useState } from "react";
import { gantt } from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/skins/dhtmlxgantt_material.css";
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
      {
        name: "progress",
        label: "Progress",
        align: "center",
        width: 40,
        template: function (task: any) {
          return Math.round(task.progress * 100) + "%";
        },
      },
      { name: "add", label: "", min_width: 1 },
    ];

    gantt.templates.grid_row_class = function (start, end, task) {
      if (task.$level >= 1) {
        return "nested_task";
      }
      return "";
    };

    gantt.config.scales = [
      {unit: "month", step: 1, format: "%F, %Y"},
      {unit: "day", step: 1, format: "%j, %D"}
  ];

    gantt.config.scale_height = 54;

    gantt.config.layout = {
      css: "gantt_container",
      cols: [
        {
          width: 400,
          min_width: 300,
          rows: [
            {
              view: "grid",
              scrollX: "gridScroll",
              scrollable: true,
              scrollY: "scrollVer",
            },

            // horizontal scrollbar for the grid
            { view: "scrollbar", id: "gridScroll", group: "horizontal" },
          ],
        },
        { resizer: true, width: 1 },
        {
          rows: [
            { view: "timeline", scrollX: "scrollHor", scrollY: "scrollVer" },

            // horizontal scrollbar for the timeline
            { view: "scrollbar", id: "scrollHor", group: "horizontal" },
          ],
        },
        { view: "scrollbar", id: "scrollVer" },
      ],
    };

    // gantt.plugins({
    //   tooltip: true,
    // });

    gantt.init(ganttContainer);
    gantt.parse(tasks);

    
  });

  return (
    <div
      ref={(input) => {
        setGanttContainer(input);
      }}
    ></div>
  );
};

export default Gantt;
