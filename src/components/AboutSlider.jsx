import  { useRef, useState } from "react";
import Slider from "react-slick";
import IconArrowLeft from "../assets/IconArrowLeft";
import IconArrowRight from "../assets/IconArrowRight";
const data = [
  {
    about: "Who we are",
    name: "Technology Company",
    description:
      "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    about: "What we do",
    name: "Professional Brand Management",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    about: "How we do",
    name: "Strategize, Design, Collaborate",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.",
  },
];

function AboutSlider() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const totalPage = data.length;
  const settings = {
    dots: false,
    infinite: true,
    slideToShow: 1,
    speed: 250,
    initialSlide: 0,
    prevArrow: <></>,
    nextArrow: <></>,
    afterChange: (current) => setActive(current),
  };

  const prev = () => {
    if (ref?.current) {
      ref.current.slickPrev();
    }
  };
  const next = () => {
    if (ref?.current) {
      ref.current.slickNext();
    }
  };
  return (
    <div
      id="who-we-are"
      className="relative bg-white md:bg-transparent md:-mt-12 md:pt-20"
    >
      <div
        className="absolute top-0 left-0 hidden w-full h-full text-white bg-gray-200 md:block"
        style={{ clipPath: "polygon(0 8rem, 100% 0, 100% 100%, 0 100%)" }}
      />
      <div
        className="absolute top-0 left-0 hidden w-full h-full text-white bg-gray-100 md:block"
        style={{ clipPath: "polygon(0 0, 100% 4rem, 100% 100%, 0 100%)" }}
      />
      <div className="container relative max-w-6xl mx-auto md:py-40">
        <Slider {...settings} className=" relative z-[1]" ref={ref}>
          {data.map((item, i) => (
            <div key={i}>
              <div className="w-full px-10 py-10">
                <h3
                  data-aos="fade-up"
                  className="text-4xl md:text-6xl mb-4  font-medium text-[#029FE4] "
                >
                  {item.about}
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-delay="125"
                  className="mb-2 text-xl md:text-2xl md:text-gray-700"
                >
                  {item.name}
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay="250"
                  className="text-[#777777] md:text-xl md:text-gray-600"
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex items-center px-10 py-10">
          <div className="font-medium children:mx-0.5 mr-auto">
            <span className="text-3xl ">{("00" + (active + 1)).slice(-2)}</span>
            <span className="text-3xl font-normal text-[#B6B6B6] ">/</span>
            <span className="text-lg text-[#B6B6B6] ">
              {("00" + totalPage).slice(-2)}
            </span>
          </div>
          <button
            className="bg-[#F1F1F1]   text-[#B6B6B6] px-4 py-4  "
            onClick={prev}
          >
            <IconArrowLeft className={"w-5 h-auto"} />
          </button>

          <button
            className="bg-[#1BA0E1]  text-white px-4 py-4  "
            onClick={next}
          >
            <IconArrowRight className={"w-5 h-auto"} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutSlider;
