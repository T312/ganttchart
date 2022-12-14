const dataLayout = {
  data: [
    {
      id: 1,
      text: "Project qlda",
      start_date: "01-09-2022",
      duration: 18,
      progress: 0.4,
      open: true,
    },
  ],
  links: [
    { id: 1, source: 1, target: 2, type: "1" },
    { id: 2, source: 2, target: 3, type: "0" },
  ],
};
export default dataLayout;
