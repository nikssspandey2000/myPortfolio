import React from "react";
import ToggleService from "./accordion/ToggleService";

const services = [
  {
    id: 1,
    title: "Service title 1",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",

    title: "Expected Credit Loss",
    content: "Expected Credit Loss (ECL) is a forward-looking measure of the potential losses a financial institution may incur from its credit exposures. It is a fundamental component of the Nepal Financial Reporting Standards (NFRS) 9, which has been fully implemented and mandates entities to compute ECL to align with its principles. The adoption of NFRS 9 introduces significant changes to the way financial institutions assess and recognize credit losses.",
  },
  {
    id: 2,
    title: "NFRS based Financial Statement",
    content: " ",
  },
  {
    id: 3,
    title: "Service title 3",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    title: "Revenue Audit",
    content: "",
  },
  {
    id: 4,
    title: "Due Deligence Audit",
    content: "",
  },
];
const Services = () => {
  return (
    <div className="p-8">
      <h1 className="text-center text-2xl font-semibold font-mono">My Services 🪄</h1>
      <ToggleService items={services} />
    </div>
  );
};

export default Services;
