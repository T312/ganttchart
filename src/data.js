import axios from "axios";
export const callApi = async () => {
  const  data  = await axios.get(
    "https://ibpmadmin.hahaho.vn/api/qry/doc/932c67bf-c76d-462f-b57f-2de4e4d415f8",
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZDRhMGYxNzgtNDhkYS00YmVmLWFhNDQtMmQyMTMxYjA3Zjk5IiwiSWQiOiJkNGEwZjE3OC00OGRhLTRiZWYtYWE0NC0yZDIxMzFiMDdmOTkiLCJjaWQiOiJJQl8iLCJGdWxsbmFtZSI6Ik5ndXnhu4VuIFRow6FpIEdpYSBMb25nIiwiVXNlcm5hbWUiOiJsb25nLm5ndXllbiIsImV4cCI6MTY3MTA4NzQ5NCwiaXNzIjoiSEFIQUhPIEpTQy4iLCJhdWQiOiJIQUhBSE8gSlNDLiJ9.KzEiRTfJl3YyHQcf-NeQZAY_E7cJgPV5sObIp8nXNp4`,
      },
    }
  );
  console.log(data);
  return data
}

export const dataLayout = {
  data: [
    {id: 1, text: 'Task #1fyfygg', start_date: '10-12-2022', duration: 7, progress: 0.6},
    {id: 2, text: 'Task #2', start_date: '12-12-2022', duration: 30, progress: 0.6}
  ],
  // links: [
  //   {id: 1, source: 1, target: 2, type: '0'}
  // ]
};
