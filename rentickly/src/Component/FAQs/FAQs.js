import React, { Component } from "react";
import FAQ from "./FAQ";
import FAQsData from "./FAQsData";

function FAQs() {
  const faq = FAQsData.map((item) => <FAQ key={item.id} faq={item} />);
  return <div>{faq}</div>;
}
export default FAQs;
