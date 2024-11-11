import React from "react";
import ToggleService from "./accordion/ToggleService";

const services = [
  {
    id: 1,
    title: "Service title 1",
    content: "Service content ",
  },
  {
    id: 2,
    title: "Service title 2",
    content: "Service content ",
  },
  {
    id: 3,
    title: "Service title 3",
    content: "Service content ",
  },
  {
    id: 4,
    title: "Service title 4",
    content: "Service content lorem ipsum lorpm ipsum",
  },
];
const Services = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold font-mono mb-4 text-center">My Services</h1>
      <ToggleService items={services} />
    </div>
  );
};

export default Services;
