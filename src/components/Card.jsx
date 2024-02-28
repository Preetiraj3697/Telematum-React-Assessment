import React, { useEffect, useState } from "react";
import User from "../images/download.png";
import { MdStars } from "react-icons/md";
import { BsCalendarDate, BsClockHistory } from "react-icons/bs";
import { TABLE_HEAD, api, formatDate, formatTime } from "./constant";

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
      <table className="w-[90%] m-auto min-w-max table-auto text-center shadow-md py-2 text-gray-500">
        <thead className="bg-gray-50 text-gray-500 rounded-t-2xl">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="p-4  font-medium"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((item) => {
            const isPM = item.appointment_time.toLowerCase().includes('pm');
            return (
              <tr key={item.patient_name} className="text-center items-center border border-b-gray-100">
                <td className="py-2">
                  <div className="flex items-center w-[70%] m-auto">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        src={User}
                        alt="User-Image"
                        className="mix-blend-multiply h-10 w-10 rounded-full"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 text-left">{item.patient_name}</div>
                      <div className="text-sm text-gray-500 text-left">+{item.mobile_number}</div>
                    </div>
                  </div>
                </td>
                <td className="">
                <div className="flex flex-row w-[70%] m-auto">
                    <div className="text-gray-700 pt-1 pr-1"><BsCalendarDate /></div>
                    <div>{formatDate(item.appointment_date)}</div>
                  </div>
                  </td>
                <td className="">
                <div className="flex flex-row w-[50%] m-auto">
                    <div className="text-gray-700 pt-1 pr-1"><BsClockHistory /></div>
                    <div>{formatTime(item.appointment_time)}</div>
                  </div></td>
                <td className="">
                  <div className="flex flex-row w-[60%] m-auto">
                    <div className={`${isPM ? 'text-red-400' : 'text-green-400'} text-xl pt-1 pr-1 `}><MdStars/></div>
                    <div>{item.doctor}</div>
                  </div>
                </td>
                <td className="">
                  <div className="w-[70%] m-auto py-2 font-medium text-xs rounded-[10px] shadow-sm bg-slate-200 text-gray-600">
                    {item.injury}
                  </div>
                </td>
                <td className="text-gray-500 text-lg font-bold">⋮</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableCard;
