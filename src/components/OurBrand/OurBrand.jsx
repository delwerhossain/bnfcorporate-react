import Marquee from "react-fast-marquee";
import Cobe from "../Globe/Cobe";
// import Globe from "../Globe/Globe";
// import GlobeMobile from "../Globe/GlobeMobile";

const brandData = [
  {
    src: "/image/care.webp",
    alt: "B&F Care ",
  },
  {
    src: "/image/it.webp",
    alt: "IT Sohor ",
  },
  {
    src: "/image/pro.webp",
    alt: "B&F Properties ",
  },
  {
    src: "/image/call.webp",
    alt: "B&F Call Center",
  },
  {
    src: "/image/CS.webp",
    alt: "B&F Call Center",
  },
  {
    src: "/image/dataA.png",
    alt: "B&F Call Center",
  },
  {
    src: "/image/teleM.jpg",
    alt: "B&F Call Center",
  },
  {
    src: "/image/rnd.jpg",
    alt: "B&F Call Center",
  },
];

const OurBrand = () => {
  return (
    <div
      data-aos="fade-right"
      id="ourBrand"
      className="bg-white lg:mt-28 mb-20"
    >
      <h1 className="md:text-5xl text-slate-700 text-3xl font-extrabold text-center grid grid-col-1 justify-center my-12 ">
        Our Service
        <span className="w-full border-b-2 border-solid border-orange-600 inline-block mt-3"></span>
      </h1>
      <Marquee autoFill={true} pauseOnHover={true} speed={70}>
        <div className="flex    mx-auto justify-center w-4/5 lg:w-full ">
          {brandData.map((data, index) => (
            <div key={index}>
              {" "}
              <img
                className="xl:h-60 xl:w-60 w-40 h-40 mr-8 rounded-full xl:border-4 border-2 border-orange-600"
                src={data?.src}
                alt={data?.alt}
              />{" "}
            </div>
          ))}
        </div>
      </Marquee>

      {/* global   */}
      <Cobe />
      {/* <div className="hidden">
        <div className="hidden lg:block">
          {" "}
          <Globe />
        </div>
        <div className=" lg:hidden">
          {" "}
          <GlobeMobile />
        </div>
      </div> */}
      <div className="mt-12">
        <img
          className=" rounded-xl border border-orange-600 md:w-full w-11/12 mx-auto"
          src="/image/about.jpeg"
          alt=" "
          width={1200}
          height={800}
        />{" "}
      </div>
    </div>
  );
};

export default OurBrand;
