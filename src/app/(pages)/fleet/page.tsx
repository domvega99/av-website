"use client";

import * as Select from "@radix-ui/react-select";
import * as Slider from "@radix-ui/react-slider";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { IconCheck, IconChevronDown, IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { useMemo, useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Fleet {
  id: number;
  name: string;
  grt: number;
  image: string;
  type: string;
}

export default function FleetPage() {
  const [fleetTypes, setFleetTypes] = useState<string[]>(["cargo"]);
  const [capacity, setCapacity] = useState([1200, 5000]);
  const [sortBy, setSortBy] = useState("asc");

  // ref for cards
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const fleetData: Fleet[] = Array(12)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      name: `MV JOSEN ${i + 1}`,
      grt: 1200 + i * 300,
      image: "/images/about-hero.png",
      type: i % 2 === 0 ? "cargo" : "tugboats",
    }));

  const filteredFleet = useMemo(() => {
    let data = fleetData.filter(
      (ship) =>
        fleetTypes.includes(ship.type) &&
        ship.grt >= capacity[0] &&
        ship.grt <= capacity[1]
    );

    return data.sort((a, b) =>
      sortBy === "asc" ? a.grt - b.grt : b.grt - a.grt
    );
  }, [fleetData, fleetTypes, capacity, sortBy]);

  const prevCapacityRef = useRef(capacity);

  useEffect(() => {
    const capacityChanged =
      prevCapacityRef.current[0] !== capacity[0] ||
      prevCapacityRef.current[1] !== capacity[1];

    prevCapacityRef.current = capacity;

    if (cardsRef.current.length > 0) {
      // Always make sure elements are visible
      gsap.set(cardsRef.current, { autoAlpha: 1, y: 0 });

      // Only animate if it's not a capacity change
      if (!capacityChanged) {
        gsap.fromTo(
          cardsRef.current,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.15,
          }
        );
      }
    }
  }, [filteredFleet]);

  return (
    <div className="my-[80px]">
      <div className="mb-6 md:mb-8">
        <h1 className="font-medium text-3xl md:text-[54.93px] leading-[100%] mb-2">
          Our Fleet
        </h1>
        <p className="font-medium text-lg md:text-[22.5px] leading-[100%] text-[#787878]">
          A Diverse Fleet for Diverse Cargo Needs
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Filter Panel */}
        <div className="w-full lg:max-w-[326px] lg:flex-shrink-0">
          <div className="border border-gray-200 shadow-sm rounded-2xl p-[32px] space-y-8">
            {/* Fleet Type */}
            <div className="mb-[40px]">
              <h3 className="font-medium text-[22px] mb-[12px] leading-[100%] text-[#787878]">
                Fleet Type
              </h3>
              <ToggleGroup.Root
                type="multiple"
                value={fleetTypes}
                onValueChange={setFleetTypes}
                className="flex flex-wrap gap-2"
              >
                {[
                  { id: "cargo", label: "Cargo Vessels" },
                  { id: "tugboats", label: "Tugboats" },
                  { id: "barges", label: "Barges" },
                  { id: "equipments", label: "Equipments" },
                ].map(({ id, label }) => {
                  const isSelected = fleetTypes.includes(id);
                  return (
                    <ToggleGroup.Item
                      key={id}
                      value={id}
                      className={`flex items-center gap-3 px-[18px] py-[6px] leading-[100%] rounded-full text-[16px] font-medium border transition ${
                        isSelected
                          ? "bg-[#D80000] text-white border-[#D80000]"
                          : "border-gray-300 text-[#787878]"
                      }`}
                    >
                      {isSelected ? (
                        <IconCheck size={16} stroke={2.5} />
                      ) : (
                        <IconPlus size={16} stroke={2.5} />
                      )}
                      {label}
                    </ToggleGroup.Item>
                  );
                })}
              </ToggleGroup.Root>
            </div>

            {/* Volume Capacity */}
            <div className="mb-[40px]">
              <h3 className="font-medium text-[22px] mb-[12px] leading-[100%] text-[#787878]">
                Volume Capacity
              </h3>
              <div className="text-lg leading-[100%] font-[450] mb-[12px]">
                {capacity[0].toLocaleString()} - {capacity[1].toLocaleString()}
              </div>
              <Slider.Root
                className="relative flex items-center select-none touch-none w-full h-5"
                value={capacity}
                onValueChange={setCapacity}
                min={1200}
                max={5000}
                step={100}
              >
                <Slider.Track className="bg-[#EFEFEF] relative grow rounded-full h-1">
                  <Slider.Range className="absolute bg-[#D80000] rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-6 h-6 bg-[#EFEFEF] border border-[#BFBFBF] rounded-full shadow cursor-pointer" />
                <Slider.Thumb className="block w-6 h-6 bg-[#EFEFEF] border border-[#BFBFBF] rounded-full shadow cursor-pointer" />
              </Slider.Root>
            </div>

            {/* Sort */}
            <div>
              <h3 className="font-medium text-[22px] mb-[12px] leading-[100%] text-[#787878]">
                Sort by Capacity
              </h3>
              <Select.Root value={sortBy} onValueChange={setSortBy}>
                <Select.Trigger className="inline-flex items-center justify-between w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm">
                  <Select.Value placeholder="Select sorting" />
                  <Select.Icon>
                    <IconChevronDown className="w-4 h-4 text-gray-400" />
                  </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                  <Select.Content className="bg-white border border-gray-300 rounded-md shadow-lg">
                    <Select.Viewport>
                      <Select.Item
                        value="asc"
                        className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer flex items-center"
                      >
                        <Select.ItemText>GRT Ascending</Select.ItemText>
                      </Select.Item>
                      <Select.Item
                        value="desc"
                        className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer flex items-center"
                      >
                        <Select.ItemText>GRT Descending</Select.ItemText>
                      </Select.Item>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>
          </div>
        </div>

        {/* Fleet Cards */}
        <div className="flex-1">
          {filteredFleet.length === 0 ? (
            <p className="text-gray-500">No ships match your filters.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredFleet.map((ship, index) => (
                <div
                  key={ship.id}
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el;
                  }}
                  className="overflow-hidden border border-gray-200 rounded-2xl bg-white shadow-sm opacity-0"
                >
                  <Link href={`/fleet/${ship.id}`}>
                    <div className="aspect-[3/2] overflow-hidden">
                      <img
                        src={ship.image}
                        alt={ship.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{ship.name}</h3>
                    <p className="text-gray-600 text-sm">
                      GRT {ship.grt.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
