import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row md:flex-wrap justify-between gap-y-10 md:px-[80px] px-[20px]">
        <div className="lg:w-[347px]">
          <Image
            className="rounded-lg mb-[20px]"
            src="/images/logo/Avega Bros Integrated Shipping Corp.png"
            alt="Avega Bros Integrated Shipping Corp Logo"
            width={170}
            height={123}
          />
          <p className="font-medium text-[16px] lg:text-[20px] leading-[100%] tracking-[0] text-[#787878]">
            Copyright © 2025 AVega Bros. Integrated Shipping Corp. All Rights
            Reserved.
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-y-10 gap-x-16">
          <div>
            <ul className="text-left">
              <li className="footer-header mb-2.5">EXPLORE</li>
              {["Home", "About", "Services", "Fleet", "Careers", "Contact"].map(
                (item) => (
                  <li
                    key={item}
                    className="font-medium text-lg md:text-xl leading-[100%] mb-[5px]"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="flex flex-col gap-[20px] w-full md:w-[300px]">
            <ul className="text-left">
              <li className="footer-header mb-2.5">MAIN OFFICE</li>
              <li className="font-medium text-lg md:text-xl leading-[100%] mb-[5px]">
                Sitio Baha-baha, Tayud, Consolacion, Cebu 6001
              </li>
            </ul>
            <ul className="text-left">
              <li className="footer-header mb-2.5">CEBU BRANCH</li>
              <li className="font-medium text-lg md:text-xl leading-[100%] mb-[5px]">
                J. De Veyra St., North Reclamation Area, Cebu City 6000
              </li>
            </ul>
            <ul className="text-left">
              <li className="footer-header mb-2.5">MAKATI BRANCH</li>
              <li className="font-medium text-lg md:text-xl leading-[100%] mb-[5px]">
                Alexander Suites G/F 8070 Tanguille St., cor. Estrella Avenue,
                San Antonio Village, Makati City 1203
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[20px] w-full md:w-[300px] text-left">
            <ul>
              <li className="footer-header mb-2.5">OTHER</li>
              <li className="font-medium text-lg md:text-xl leading-[100%] mb-[5px]">
                Privacy Policy
              </li>
              <li className="font-medium text-lg md:text-xl leading-[100%] mb-[5px]">
                Terms & Conditions
              </li>
            </ul>
            <ul>
              <li className="footer-header mb-2.5">CONTACT</li>
              <li className="font-medium text-lg md:text-xl leading-[100%] mb-[5px]">
                marketing@avegabros.com
              </li>
              <li className="font-medium text-lg md:text-xl leading-[100%] mb-[5px]">
                operations@avegabros.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-center overflow-hidden h-[180px] mt-[40px]">
        <span
          className="font-bold text-center text-[#EFEFEF] text-[clamp(60px,15.87vw,240px)] m-0 p-0"
          style={{ lineHeight: "0.8" }}
        >
          AVEGA BROS
        </span>
      </div>
    </div>
  );
};

export default Footer;
