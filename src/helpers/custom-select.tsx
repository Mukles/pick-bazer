import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

interface Props {
  children: any;
}

const CustomeSelect = ({ children }: Props) => {
  const [selectFeild, setSelectFeild] = useState("USD");

  return (
    <div className="selector">
      <div className="select-field">
        <span>{selectFeild}</span>
        <ChevronDownIcon />
      </div>
      <ul className="select-list">{children}</ul>
    </div>
  );
};

export default CustomeSelect;
