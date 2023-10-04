import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";

const ContactSection = () => {
  return (
    <div data-aos="fade-up-left" id="contact" className="my-28">
      {/* heading */}
      <div>
        {" "}
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 w-4/5 mx-auto font-light text-center text-gray-500  sm:text-xl">
          Let us know your query or anything you want to discover about us.
        </p>
      </div>

      {/* address information  */}
      <div className="grid lg:grid-cols-4 grid-cols-2 text-center gap-8 md:w-full w-11/12 mx-auto">
        <div className="p-6 col-span-2 border border-orange-600 rounded-xl hover:bg-orange-100">
          <div className=" rounded-full border  border-dashed border-orange-600 p-4 mx-auto w-16">
            {" "}
            <SlLocationPin color="#f05c0c" size={"2em"} />
          </div>
          <h3 className="text-2xl text-slate-600 my-3 font-bold">
            Office Address
          </h3>
          <p>CDA, 17 Mill Lane, Leicester, LE7 1NS.</p>
        </div>
        <div className="p-6 col-span-1 border border-orange-600 rounded-xl hover:bg-orange-100 ">
          <div className=" rounded-full border  border-dashed border-orange-600 p-4 mx-auto w-16">
            {" "}
            <BiLogoGmail color="#f05c0c" size={"2em"} />
          </div>
          <h3 className="text-2xl text-slate-600 my-3 font-bold">Email Us</h3>
          <a
            className="text-orange-600 text-sm lg:text-lg"
            href="mailto:contact@thebandf.com"
          >
            info@bnfcorporate.com
          </a>
        </div>
        <div className="p-6 col-span-1 border border-orange-600 rounded-xl hover:bg-orange-100 ">
          <div className=" rounded-full border  border-dashed border-orange-600 p-4 mx-auto w-16">
            {" "}
            <FiPhoneCall color="#f05c0c" size={"2em"} />
          </div>
          <h3 className="text-2xl text-slate-600 my-3 font-bold">Call Us</h3>
          <a className="text-orange-600" href="tel:+880 1819 331933">
            03301 130 458
          </a>
        </div>
      </div>

      {/* contact form and map */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-8 md:w-full w-11/12 mx-auto">
        <section className="bg-white border border-orange-600 rounded-xl  hover:bg-orange-100">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-orange-900 "
                >
                  Your name
                </label>
                <input
                  type="name"
                  id="name"
                  className="shadow-sm bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                  placeholder="name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-orange-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                  placeholder="name@thebandf.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-orange-900 "
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-orange-900 bg-orange-50 rounded-lg border border-orange-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 "
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-orange-900 "
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-orange-900 bg-orange-50 rounded-lg shadow-sm border border-orange-300 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-600 sm:w-fit hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 "
              >
                Send message
              </button>
            </form>
          </div>
        </section>

        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.4618465834565!2d-1.0910530999999999!3d52.7058087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879df531e027733%3A0xee9d9e9f02ccf64f!2sE%20Syston%20Mill%2C%2017%20Mill%20Ln%2C%20Syston%2C%20Leicester%20LE7%201NS%2C%20UK!5e0!3m2!1sen!2sbd!4v1696431277999!5m2!1sen!2sbd"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <div className="md:mb-12 lg:mb-0 ">
          <div className="relative h-[780px] rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.4618465834565!2d-1.0910530999999999!3d52.7058087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879df531e027733%3A0xee9d9e9f02ccf64f!2sE%20Syston%20Mill%2C%2017%20Mill%20Ln%2C%20Syston%2C%20Leicester%20LE7%201NS%2C%20UK!5e0!3m2!1sen!2sbd!4v1696431277999!5m2!1sen!2sbd"
              className="absolute left-0 top-0 h-full w-full rounded-lg border border-orange-600"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
