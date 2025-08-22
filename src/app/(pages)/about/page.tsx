import Timeline from "@/app/(pages)/about/components/Timeline";
import Image from "next/image";
import Values from "./components/Values";

const Page = () => {
  return (
    <div>
      <section>
        <div className="my-[80px]">
          <h1 className="font-medium text-[54.93px] leading-[100%] text-center">
            About Avega Bros. <br /> Integrated Shipping Corporation
          </h1>
          <p className="font-medium text-[22.5px] leading-[100%] text-center text-[#787878] mt-[20px]">
            With over 40 years of experience, Avega Bros. has been a trusted
            logistics partner <br /> delivering end-to-end shipping and cargo
            solutions across the Philippines.
          </p>
          <Image
            alt="About"
            src="/images/about-hero.png"
            className="rounded-[30px] mt-[40px]"
            height={503}
            width={1352}
          />
        </div>
      </section>
      <section>
        <div className="mb-[80px]">
          <h1 className="font-medium text-[22.5px] leading-[100%] text-left text-[#787878]">
            OUR JOURNEY
          </h1>
          <h1 className="font-medium text-[54.93px] leading-[100%] text-left">
            From Roots to Routes
          </h1>
          <Timeline />
        </div>
      </section>
      <section>
        <div className="mb-[80px] flex flex-col gap-[40px]">
          <div className="flex align-top">
            <div className="w-[300px]">
              <h1 className="font-bold text-[35.16px] leading-[100%] text-left bg-gradient-to-r from-[#A30101] to-[#FF0000] bg-clip-text text-transparent">
                Vision
              </h1>
            </div>
            <p className="w-11/12 font-medium text-[35.16px] leading-[100%] text-left text-[#787878]">
              To develop a seamless nationwide logistics network that connects
              Philippine industries through reliable and efficient cargo
              transport.
            </p>
          </div>
          <div className="flex align-top">
            <div className="w-[300px]">
              <h1 className="font-bold text-[35.16px] leading-[100%] text-left bg-gradient-to-r from-[#A30101] to-[#FF0000] bg-clip-text text-transparent">
                Mission
              </h1>
            </div>
            <p className="w-11/12 font-medium text-[35.16px] leading-[100%] text-left text-[#787878]">
              To strengthen the Philippine supply chain through operational
              excellence, infrastructure investment, client-focused cargo
              services that drive national growth.
            </p>
          </div>
        </div>
      </section>
      <section>
        <Values />
      </section>
      <section>
        <h1 className="leading-[100%] text-[54.93px] font-medium mb-[40px]">
          Meet the Team
        </h1>
      </section>
      <section>
        <h1 className="leading-[100%] text-[54.93px] font-medium mb-[40px]">
          AVEGA Partners
        </h1>
        <Values />
      </section>
    </div>
  );
};

export default Page;
