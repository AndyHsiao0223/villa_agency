import React from "react";
import InfoIcon from "./InfoIcon";

interface Page {
  contentHidden?: boolean;
}

const ContactUs: React.FC<Page> = (props: Page) => {
  return (
    <div>
      <section
        className={`${props.contentHidden ? "mb-64" : "mb-96"} h-[68vh] bg-[url('/images/contact-bg.webp')] bg-cover px-7 pt-14 lg:mb-52`}
      >
        <p className="mb-3 flex items-center justify-center font-bold text-red-400">
          <span className="mr-1 text-xl">l </span>CONTACT US
        </p>
        <div className="mb-20 flex flex-col items-center text-white">
          <h1 className="text-4xl font-extrabold lg:text-5xl">
            Get In Touch With
          </h1>
          <h1 className="text-4xl font-extrabold lg:text-5xl">Our Agents</h1>
          <br className={`${props.contentHidden && "hidden"}`} />
          <p className={`${props.contentHidden && "hidden"}`}>
            When you really need to download free CSS templates, please remember
            our website TemplateMo. Also, tell your friends about our website.
            <br className="hidden xl:block" />
            Thank you for visiting. There is a variety of Bootstrap HTML CSS
            templates on our website. If you need more information, please
            contact us.
          </p>
        </div>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.4112103869024!2d120.66244738094304!3d24.15046971550932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d9ea2836a61%3A0xdb3ddeb2e897f13b!2sTaichung%20Civic%20Square!5e0!3m2!1sen!2stw!4v1710337799890!5m2!1sen!2stw"
            width="600"
            height="450"
            loading="lazy"
            className="h-[60vh] w-[90vw] rounded-xl lg:h-[50vh] lg:w-[50vw]"
          />
        </div>
      </section>
      <section className="px-7 lg:flex lg:justify-center lg:space-x-16">
        <div className="mb-6 flex h-[15vh] w-full flex-col justify-around rounded-xl shadow-around lg:w-[25vw]">
          <InfoIcon
            src="/images/phone-icon.webp"
            alt="phone-icon"
            blackText="010-020-0340"
            grayText="Phone Number"
            hrHidden={true}
          />
        </div>
        <div className="mb-12 flex h-[15vh] w-full flex-col justify-around rounded-xl shadow-around lg:w-[25vw]">
          <InfoIcon
            src="/images/email-icon.webp"
            alt="email-icon"
            blackText="info@villa.co"
            grayText="Business Email"
            hrHidden={true}
          />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
