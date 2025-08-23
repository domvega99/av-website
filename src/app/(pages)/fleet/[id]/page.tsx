import FleetDetails from "@/app/components/FleetDetails";
import { notFound } from "next/navigation";

interface Fleet {
  id: number;
  name: string;
  grt: string;
  image: string;
}

interface FleetPageProps {
  params: {
    id: string;
  };
}

const getFleetById = (id: number): Fleet | null => {
  const fleetData = Array(12)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      name: "MV JOSEN",
      grt: "1200.00",
      image: "/images/about-hero.png",
    }));

  return fleetData.find((fleet) => fleet.id === id) || null;
};

const FleetPage = async ({ params }: FleetPageProps) => {
  const { id } = await params;
  const fleet = getFleetById(+id);

  if (!fleet) {
    notFound();
  }

  // return <FleetDetails name={fleet.name} grt={fleet.grt} image={fleet.image} />;
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-4">
      test
    </div>
  );
};

export default FleetPage;
