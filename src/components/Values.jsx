import IconListItem from "~/assets/IconListItem";
import CoreValue from "~/assets/CoreValue";

const data = [
  {
    title: "Dedication",
    dsecription:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
  },
  {
    title: "Intellectual Honesty",
    dsecription:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.",
  },
  {
    title: "Curiosity",
    dsecription:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
  },
];

function Values() {
  return (
    <section
      id="our-values"
      className="w-full px-10 bg-[#F8F8F8] pt-10 relative overflow-hidden md:py-32"
    >
      <div className="container flex flex-wrap w-full max-w-6xl mx-auto">
        <div className="w-full lg:w-[60%] children:my-5 md:children:my-7">
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-6xl text-center lg:text-start text-[#029FE4] font-medium"
          >
            Our Core Values
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="125"
            className="text-[#777777] md:text-2xl"
          >
            Ridiculus laoreet libero pretium et, sit vel elementum convallis
            fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
            etiam sit.
            <br />
            <br />
            In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae,
            nec amet enim.
          </p>
          <ul
            data-aos="fade-up"
            data-aos-delay="250"
            className="w-full py-2 children:mb-6 md:text-lg"
          >
            {data?.map((item, i) => (
              <li className="flex items-start" key={i}>
                <IconListItem className="flex-shrink-0 w-6 h-8 mr-4 text-[#747474]" />
                <div className="flex-grow">
                  <h3 className="text-2xl">{item.title}</h3>
                  <p className="text-[#777777]">{item.dsecription}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div data-aos="fade-up" className="relative w-full lg:w-[40%]">
          <CoreValue
            className={"w-[120%] h-auto ml-14"}
            svgClassName={"w-full h-auto"}
          />
        </div>
      </div>
    </section>
  );
}

export default Values;
