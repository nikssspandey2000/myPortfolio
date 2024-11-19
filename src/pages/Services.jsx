import React from "react";
import ToggleService from "./accordion/ToggleService";

const services = [
  {
    id: 1,
    title: "Service title 1",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 2,
    title: "Service title 2",
    content: "Service content ",
  },
  {
    id: 3,
    title: "Service title 3",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    title: "Service title 4",
    content: "Service content lorem ipsum lorpm ipsum",
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
