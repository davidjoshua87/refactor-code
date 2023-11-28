import chevron_down from "~/assets/icon-chevron-down-double.svg";
import banner from "~/assets/banner_benjamin-wong-4-ka5rdCesI-unsplash.png";
import AboutSlider from "./AboutSlider";

function Hero() {
  return (
    <section>
      {/* BANNER */}
      <div className="relative w-full md:-mt-[3.75rem]">
        <img
          src={banner}
          className="w-full aspect-[16/9] md:aspect-[16/10] xl:aspect-[2] object-cover"
        />
        <div className="absolute top-0 left-0 hidden w-full h-full bg-black opacity-70 md:block" />
        <div className="relative w-full -mt-[4rem] md:-mt-0 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:text-center">
          <div
            className="absolute top-0 left-0 h-full w-full bg-[#53A7E9] md:bg-transparent text-white"
            style={{ clipPath: "polygon(0 8rem, 100% 0, 100% 100%, 0 100%)" }}
          />
          <div
            className="relative bg-[#4097DB] md:bg-transparent text-white pt-24 pb-20 px-10"
            style={{ clipPath: "polygon(0 0, 100% 4rem, 100% 100%, 0 100%)" }}
          >
            <h1
              data-aos="fade-up"
              className="text-4xl font-semibold md:text-6xl"
            >
              Discover
              <br className="md:hidden" /> Your Wonder
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="250"
              className="max-w-md mt-3 md:mx-auto md:mt-5 md:text-xl md:max-w-xl"
            >
              Cupidatat eu deserunt id nulla exercitation irure labore aliquip
              commodo irure eiusmod elit. In adipisicing aute non voluptate. Id
              enim voluptate ipsum non laborum incididunt cillum officia.
            </p>
          </div>
        </div>
        <a
          href="#who-we-are"
          className="absolute flex items-center hover:scale-105 -bottom-12 hover:-bottom-10 transition-all justify-center w-12 h-12 -translate-x-1/2 -translate-y-1/2 md:-translate-y-[80%] bg-white rounded-full shadow-lg z-[1] left-1/2"
        >
          <img src={chevron_down} className="w-6 h-auto" />
        </a>
      </div>

      {/* SLIDER */}
      <AboutSlider />
    </section>
  );
}

export default Hero;
