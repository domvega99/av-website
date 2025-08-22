import Image from "next/image";
import type { FC } from "react";

interface FleetDetailsProps {
  name: string;
  grt: string;
  image: string;
}

const FleetDetails: FC<FleetDetailsProps> = ({ name, grt, image }) => {
  return (
    <div className="mx-auto max-h-[600px] w-[800px] overflow-hidden bg-white">
      <div className="float-left h-[600px] w-[600px]">
        <Image
          src={image}
          width={600}
          height={600}
          alt={name}
          className="h-[750px] w-[750px] object-cover"
        />
      </div>

      <div className="float-right h-full w-[200px] p-2">
        <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
        <h4 className="text-lg font-normal text-gray-600">GRT: {grt}</h4>
      </div>
    </div>
  );
};

export default FleetDetails;
