import { useLanguage } from "@/lib/locales/context";
import React from "react";

const SelectLanguage = () => {
  const { changeLanguage } = useLanguage();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(event.target.value);
  };

  return (
    <div className="">
      <select onChange={handleChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default SelectLanguage;
