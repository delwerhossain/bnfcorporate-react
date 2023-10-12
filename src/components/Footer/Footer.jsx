import { Link } from "react-router-dom";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { MdEditLocationAlt } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";
import {
  AiOutlinePhone,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      data-aos-delay="300"
      data-aos-duration="2000"
      data-aos="fade-up"
      className="footer-1 text-white bg-orange-600 py-8 sm:py-12"
    >
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          {/* <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">Ours Bands </h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Cool stuff
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Random feature
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Team feature
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Stuff for developers
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Another one
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Last time
                </a>
              </li>
            </ul>
          </div> */}
          {/* <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6">Resources</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Resource
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Resource name
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Another resource
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Final resource
                </a>
              </li>
            </ul>
          </div> */}
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/5 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Menu</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#band"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  band
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#team"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Team
                </a>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/5 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">Help</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Link
                  to={"/contact"}
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Support
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to={"/contact"}
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Help Center
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to={"/contact"}
                  className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/5 sm:mx-auto xl:mt-0 xl:ml-auto mb-4 lg:mb-0">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
              Stay connected
            </h5>
            <div className="flex gap-4 sm:justify-center xl:justify-start">
              <a
                href="https://www.facebook.com/bandfOfficials"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 border-2  border-gray-400 rounded-full text-center py-1 text-white hover:text-white"
              >
                <div className="bg-white rounded-full  hover:bg-blue-300">
                  <BsFacebook color="#4267B2" size={32} />
                </div>
              </a>
              <a
                href="https://www.youtube.com/@BnFcorporate"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 border-2  border-gray-400 rounded-full text-center py-1 text-white hover:text-white"
              >
                <div className="bg-white rounded-full  hover:bg-blue-300">
                  <BsYoutube className=" p-1" color="red" size={32} />
                </div>
              </a>
              <a
                href="#0"
                className="w-8 h-8 border-2  border-gray-400 rounded-full text-center py-1 text-white hover:text-white"
              >
                <div className="bg-white rounded-full  hover:bg-blue-300">
                  <AiFillTwitterCircle color="#1da1f2" size={32} />
                </div>
              </a>
              <a
                href="#0"
                className="w-8 h-8 border-2  border-gray-400 rounded-full text-center py-1 text-white hover:text-white"
              >
                <div className="bg-white rounded-full  hover:bg-blue-300">
                  <AiFillLinkedin
                    className="rounded-full"
                    color="#0072b1"
                    size={32}
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="sm:w-full px-4 md:w-1/4 xl:w-1/5">
            <div className="flex">
              <div className="bg-orange-100 p-0.5 mr-1 rounded-full">
                <AiOutlinePhone color="#FF6020 " size={22} />
              </div>{" "}
              <strong className="mr-1"> Phone:</strong>{" "}
              <a href="tel:03301 130 458"> +03301 130 458</a> <br />
            </div>
            <div className="flex mt-4 xl:mt-10">
              <div className="bg-orange-100 p-0.5 mr-1 rounded-full">
                <BiMailSend color="#FF6020 " size={22} />
              </div>{" "}
              <strong className="mr-1">Email :</strong>{" "}
              <a href="mailto:info@bnfcorporate.com">info@bnfcorporate.com</a>
            </div>
          </div>
          <div className="px-4 sm:w-1/2 md:w-2/4  xl:w-1/5 mt-4 md:mt-0">
            <div className="flex">
              {" "}
              <div className="bg-orange-100 p-0.5 w-7 h-7 mr-1 rounded-full">
                <MdEditLocationAlt color="#FF6020 " size={22} />
              </div>{" "}
              <h6 className="font-bold mb-2">Address</h6>
            </div>
            <address className="not-italic mb-4 text-sm">
              17 Mill Lane,
              <br />
              Leicester, LE7 1NS.
            </address>
          </div>
        </div>

        <div className=" sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t text-xl">
          {/* <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Free Resources</h6>
            <p className="mb-4 text-sm">
              Use our HTML blocks for <strong>FREE</strong>.<br />
              <em>All are MIT License</em>
            </p>
          </div> */}
          <div className="px-4 flex py-3 justify-center items-center bg-white rounded-xl h-auto md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
            <img className="" src="/image/logo.png" alt="bnf logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
