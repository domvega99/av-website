"use client";

import { IconShare3, IconX } from "@tabler/icons-react";
import Image from "next/image";
import type { FC } from "react";

interface FleetDetailsProps {
  id: number;
  name: string;
  grt: string;
  image: string;
}

const FleetDetails: FC<FleetDetailsProps> = ({ id, name, grt, image }) => {
  const handleLearnMore = () => {
    window.location.href = `/fleet/${id}`;
  };

  return (
    <div className="bg-white py-[20px] px-[40px] rounded-2xl w-full">
      <div className="flex justify-end">
        <IconX size={24} />
      </div>
      <div className="my-5">
        <Image
          src={image}
          width={455}
          height={200}
          alt={name}
          className="h-[200px] w-full rounded-2xl object-cover"
        />
      </div>
      <div className="mb-5">
        <h1 className="font-medium text-[22.5px] text-[#787878]">Cargo Ship</h1>
        <h1 className="font-bold text-[28.13px] leading-[100%] text-[#171717]">
          MV NIKAELLA V
        </h1>
      </div>
      <div>
        <table className="w-full border border-[#BFBFBF]">
          <tbody>
            <tr>
              <td className="text-left text-[17px] font-semibold text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                Engine
              </td>
              <td className="text-center text-[17px] font-medium text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                {grt}
              </td>
            </tr>
            <tr>
              <td className="text-left text-[17px] font-semibold text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                Model
              </td>
              <td className="text-center text-[17px] font-medium text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                {grt}
              </td>
            </tr>
            <tr>
              <td className="text-left text-[17px] font-semibold text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                Rating
              </td>
              <td className="text-center text-[17px] font-medium text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                {grt}
              </td>
            </tr>
            <tr>
              <td className="text-left text-[17px] font-semibold text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                Type of Vessel
              </td>
              <td className="text-center text-[17px] font-medium text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                {grt}
              </td>
            </tr>
            <tr>
              <td className="text-left text-[17px] font-semibold text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                Load Capacity (DWT)
              </td>
              <td className="text-center text-[17px] font-medium text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                {grt}
              </td>
            </tr>
            <tr>
              <td className="text-left text-[17px] font-semibold text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                GRT
              </td>
              <td className="text-center text-[17px] font-medium text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                {grt}
              </td>
            </tr>
            <tr>
              <td className="text-left text-[17px] font-semibold text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                LBP
              </td>
              <td className="text-center text-[17px] font-medium text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                {grt}
              </td>
            </tr>
            <tr>
              <td className="text-left text-[17px] font-semibold text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                LOA
              </td>
              <td className="text-center text-[17px] font-medium text-[#171717] border border-[#BFBFBF] px-2.5 py-2">
                {grt}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleLearnMore}
          className="bg-[#D80001] text-white text-[14px] font-normal py-2 px-3 rounded-2xl mt-5 cursor-pointer flex items-center"
        >
          Learn More <IconShare3 size={16} className="inline-block ml-2" />
        </button>
      </div>
    </div>
  );
};

export default FleetDetails;
