import Banner from "@/components/Banner";
import ContactUs from "@/components/ContactUs";
import React from "react";

const contact_us_page = () => {
  return (
    <div>
      <Banner label="HOME / CONTACT US" title={["CONTACT US"]} />
      <ContactUs />
    </div>
  );
};

export default contact_us_page;
