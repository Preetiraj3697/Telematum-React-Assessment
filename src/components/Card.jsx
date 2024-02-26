import React, { useEffect, useState } from "react";
import User from "../images/download.png";
const api =
  "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json";

const TABLE_HEAD = ["PATIENTS", "DATE", "TIME", "DOCTOR", "INJURY", "ACTIVE"];

const TableCard = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      // Fetch data from the provided URL
      const response = await fetch(api);
      // Parse JSON response
      const data = await response.json();
      // Update state with fetched data
      setData(data.appointments);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-full w-full my-2">
      <table className="w-full min-w-max table-auto text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-gray-100 bg-gray-50 p-4"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((item) => {
            return (
              <tr key={item.patient_name}>
                <td className="">
                  <div className="flex flex-row gap-3">
                    <div className="w-16 bg-white">
                      <img
                        src={User}
                        alt="User-Image"
                        className="mix-blend-multiply"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="py-2">{item.patient_name}</div>
                      <div className="underline">{item.mobile_number}</div>
                    </div>
                  </div>
                </td>
                <td className="">{item.appointment_date}</td>
                <td>{item.appointment_time}</td>
                <td>{item.doctor}</td>
                <td>
                  <div className="bg-slate-500 py-2 text-center font-bold rounded-md">
                    {item.injury}
                  </div>
                </td>
                <td>:</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableCard;
