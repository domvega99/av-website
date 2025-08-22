import {
    IconAward,
    IconBulb,
    IconHeartHandshake,
    IconProgress,
    IconScale,
    IconShieldCheck,
} from "@tabler/icons-react";

const firstValues = [
  {
    title: "Excellence",
    description:
      "We handle every cargo with precision and urgency, maintaining the highest standards in every operation.",
    icon: IconAward,
    iconColor: "#D50000",
  },
  {
    title: "Safety",
    description:
      "We prioritize our crew, vessels, and cargo through rigorous protocols, expert training, and proactive maintenance.",
    icon: IconShieldCheck,
    iconColor: "#D50000",
  },
  {
    title: "Progress",
    description:
      "Every shipment moves the country forward. We strengthen supply chains by enhancing systems and expanding our reach.",
    icon: IconProgress,
    iconColor: "#D50000",
  },
];

const secondValues = [
  {
    title: "Service",
    description:
      "We respond to client needs with flexibility and reliability. Whether it's full coordination or custom logistics support, we deliver solutions built on trust and responsiveness.",
    icon: IconHeartHandshake,
    iconColor: "#D50000",
  },
  {
    title: "Innovation",
    description:
      "We streamline operations by refining processes, upgrading systems, and adopting new technologies.",
    icon: IconBulb,
    iconColor: "#D50000",
  },
  {
    title: "Integrity",
    description:
      "We stay transparent in our service, fair in our dealings, and accountable in every delivery.",
    icon: IconScale,
    iconColor: "#D50000",
  },
];

const Values = () => {
  return (
    <section className="mb-[80px]">
      <h1 className="leading-[100%] text-[54.93px] font-medium mb-[40px]">
        Values
      </h1>
      <div className="flex flex-wrap">
        {firstValues.map((value, index) => {
          const IconComponent = value.icon;
          return (
            <div
              key={index}
              className="px-[20px] border-l-[3px] border-[#EFEFEF]"
            >
              <div className="w-[406.6667px]">
                <div className="mb-[40px]">
                  <IconComponent
                    stroke={1.5}
                    size={50}
                    color={value.iconColor}
                  />
                </div>
                <h2 className="mb-[10px] leading-[100%] text-[35.16px] font-bold">
                  {value.title}
                </h2>
                <p className="leading-[100%] text-[22.5px] font-medium text-[#787878]">
                  {value.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap mt-[40px]">
        {secondValues.map((value, index) => {
          const IconComponent = value.icon;
          return (
            <div
              key={index}
              className="px-[20px] border-l-[3px] border-[#EFEFEF]"
            >
              <div className="w-[406.6667px]">
                <div className="mb-[40px]">
                  <IconComponent
                    stroke={1.5}
                    size={50}
                    color={value.iconColor}
                  />
                </div>
                <h2 className="mb-[10px] leading-[100%] text-[35.16px] font-bold">
                  {value.title}
                </h2>
                <p className="leading-[100%] text-[22.5px] font-medium text-[#787878]">
                  {value.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Values;
