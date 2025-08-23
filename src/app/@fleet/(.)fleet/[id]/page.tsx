import { notFound } from "next/navigation";
import Modal from "@/app/components/Modal";
import FleetDetails from "@/app/components/FleetDetails";

interface Fleet {
  id: number;
  name: string;
  grt: string;
  image: string;
}

interface FleetModalPageProps {
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

const FleetModalPage = async ({ params }: FleetModalPageProps) => {
  const { id } = await params;
  const fleet = getFleetById(+id);

  if (!fleet) {
    notFound();
  }

  return (
    <Modal>
      <FleetDetails id={fleet.id} name={fleet.name} grt={fleet.grt} image={fleet.image} />
    </Modal>
  );
};

export default FleetModalPage;
