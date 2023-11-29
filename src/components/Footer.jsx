import CompanyHighContrast from "~/assets/CompanyHighContrast";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const locations = [
  {
    name: "Technology Department",
    address:
      "Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat",
  },
  {
    name: "HR Department",
    address: "Jl. Jalan No 3 Kel. Agra Kec. Kecamatan, Kota Siti, Jawa Timur",
  },
];

function Footer() {
  const [activeLocation, setActiveLocation] = useState(0);
  return (
    <footer className="w-full bg-[#07477A] px-6 py-10 pb-24 relative overflow-hidden">
      <div className="container mx-auto mx-w-6xl">
        <div
          className="absolute bottom-0 left-0 h-56 w-[120%] bg-[#08385F] text-white"
          style={{ clipPath: "polygon(0 0, 100% 100%, 100% 100%, 0 100%)" }}
        />
        <div
          className="absolute bottom-0 left-0 h-44 w-full bg-[#14619D] text-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        />
        <div className="relative children:my-8">
          <CompanyHighContrast className={"w-60 text-white -ml-4 "} />
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full px-6 py-5 bg-white md:bg-transparent children:my-3  md:flex-[1]">
              <select
                defaultValue={locations[activeLocation]?.name}
                onChange={(e) => setActiveLocation(e.target.value)}
                className="w-full px-3 py-3 text-sm font-bold uppercase text-[#00537C] md:text-white bg-white outline rounded-sm outline-1 outline-gray-200 border-r-[1rem] border-transparent"
                style={{
                  // WebkitAppearance: "none",
                  background:
                    "url(/salt-fe-test/icon-dropdown.svg) no-repeat right",
                }}
              >
                {locations.map((location, i) => (
                  <option value={i} key={i}>
                    {location.name}
                  </option>
                ))}
              </select>

              {locations.map((location, i) => (
                <p
                  key={i}
                  className={twMerge(
                    "text-[#25A0D8] max-w-[12rem]",
                    (i == activeLocation && "block") || "hidden"
                  )}
                >
                  {location.address}
                </p>
              ))}
            </div>
            <ul className="md:flex-[1] md:pl-12 w-full my-4 text-white children:my-4">
              <li>
                <a href="#who-we-are">Who We Are</a>
              </li>
              <li>
                <a href="#our-values">Our Values</a>
              </li>
              <li>
                <a href="#the-perks">The Perks</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
