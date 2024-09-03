import ContactForm from "@/components/ContactForm";
import React from "react";

const page = () => {
  return (
    <div className="h-full w-full flex justify-center items-center container">
      <div className="h-[600px] w-[800px] shadow-sm rounded-sm  flex justify-center items-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
