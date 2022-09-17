import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} flex-col ${styles.paddingY}`}>
    <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full`}>
      <div className="flex flex-1 flex-col justify-start mr-10">
        <img
          src={logo}
          alt="logo"
          className="w-[266px] h-[72] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full   flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className="flex flex-col ss:mt-0 mt-4 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`${
                    index === footerlink.links.length - 1 ? "mb-0" : "mb-4"
                  } font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex flex-row mt-6 md:mt-4">
        {socialMedia.map((social, index) => (
          <img
            src={social.icon}
            alt={social.id}
            key={social.id}
            className={`${
              index === socialMedia.length - 1 ? "mr-0" : "mr-4"
            } w-[21px] h-[21px] object-contain cursor-pointer`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
