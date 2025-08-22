import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-0 md:px-[80px] mt-[20px]">
      <div className="bg-white border border-[#BFBFBF] rounded-2xl py-[12px] px-[20px]">
        <div className="flex items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              className="rounded-lg"
              src="/images/logo/Avega Bros Integrated Shipping Corp.png"
              alt="Avega Bros Integrated Shipping Corp Logo"
              width={58}
              height={42}
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-black font-medium text-lg"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-black font-medium text-lg"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-black font-medium text-lg"
            >
              Services
            </Link>
            <Link
              href="/fleet"
              className="text-black font-medium text-lg"
            >
              Fleet
            </Link>
            <Link
              href="/careers"
              className="text-black font-medium text-lg"
            >
              Careers
            </Link>
          </nav>

          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-colors duration-200">
            <Link href="/contact" className=" text-lg font-semibold py-[10px]">Contact</Link>
          </button>
        </div>
      </div>
    </header>
  );
}
