import Image from "next/image";

function Footer() {
  return (
    <div className="w-full">
      <div className="bg-[#181818] text-center py-[100px] text-[15px] max-md:py-[70px] relative overflow-hidden">
        <span className="bg-[#303030] absolute w-full h-[1px] left-0 mt-6"></span>
        <div className="flex items-center justify-center mb-[85px] relative max-md:mb-[60px]">
          <span className="bg-[#181818] block px-[32px] relative">
            <Image
              src="/logo.svg"
              className="logo w-[152px]"
              title="Poco Restaurant"
              alt="Poco Restaurant"
              width={100}
              height={100}
            ></Image>
          </span>
        </div>
        <div className="px-16 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:gap-2 lg:gap-4">
            <div className="max-lg:mb-[20px]">
              <h3 className="heading text-xl text-[20px] font-bold uppercase text-white mb-[20px] mx-lg:text-[18px]">
                Address
              </h3>
              <p className="w-[65%] whitespace-break-spaces m-auto text-[15px] text-[#808080] leading-7 max-lg:w-full">
                570 8th Ave, New York, NY 10018 United States
              </p>
            </div>
            <div className="max-lg:mb-[20px]">
              <h3 className="heading text-xl text-[20px] font-bold uppercase text-white mb-[20px] mx-lg:text-[18px]">
                Book a table
              </h3>
              <p className="w-[65%] m-auto text-[15px] text-[#808080] leading-7 max-lg:w-full">
                Call us now to book a table in your desired time
              </p>
              <a className="block mt-4 text-[#ffc222]" href="tel:01212312312">
                01212312312
              </a>
            </div>
            <div className="max-lg:mb-[20px]">
              <h3 className="heading text-xl text-[20px] font-bold uppercase text-white mb-[20px] mx-lg:text-[18px]">
                Opening Hours
              </h3>
              <ul>
                <li className="leading-7 text-white">
                  <span className="text-[#808080]">Monday – Friday : </span> 8am
                  – 4pm
                </li>
                <li className="leading-7 text-white">
                  <span className="text-[#808080]">Saturday : </span> 9am – 5pm
                </li>
              </ul>
              <ul className="footer-social-icons flex justify-center mt-[20px] gap-2"></ul>
            </div>
            <div>
              <h3 className="heading text-xl text-[20px] font-bold uppercase text-white mb-[20px] mx-lg:text-[18px]">
                NewsLetter
              </h3>
              <p className="w-[85%] m-auto text-[15px] text-[#808080] leading-7 max-lg:w-full">
                Subscribe to the weekly newsletter for all the latest updates
              </p>
              <div className="newsletter mt-[20px]">
                <div>
                  <div className="form-group flex justify-between h-[54px] m-auto p-[5px] border border-[#262626] rounded max-lg:max-w-[320px] max-sm:max-w-[290px]">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block max-w-[60%] border-0 bg-transparent px-[15px] text-white placeholder:text-primary-text capitalize focus:outline-none focus:ring-0 sm:text-sm sm:leading-6 max-2xl:px-[8px] max-xl:text-[13px] max-lg:max-w-auto max-lg:px-[15px] max-lg:text-[14px] "
                      placeholder="Your Email..."
                    ></input>
                    <button
                      type="submit"
                      className="rounded uppercase font-semibold px-[15px] text-[#1e1d23] bg-[#ffc222] hover:bg-[#ffc222] hover:text-white duration-700 transition-all ease-in-out max-2xl:px-[8px] max-xl:px-[5px] max-xl:text-[13px] max-lg:px-[15px] max-lg:text-[14px]"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#00a149] flex items-center justify-center">
        <div className="flex items-center py-7">
          <p className="text-[13px] sm:text-[14px] font-normal text-white">
            Made by <span className="text-[#ffc222]">Kareem Fayed</span> &{" "}
            <span className="text-[#ffc222]"> Mahmoud Radwan</span>
          </p>
        </div>
      </footer>
      <div className="lg:hidden h-[60px]"></div>
    </div>
  );
}

export default Footer;
