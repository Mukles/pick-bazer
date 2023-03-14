import { tabs } from "../data/home/tabs";

interface Props {
  className?: string;
}

const TabPills = ({ className = "" }: Props) => {
  return (
    <ul className={`tabs ${className}`}>
      {tabs.map((tab) => (
        <li className={tab.id === 1 ? "active" : ""} key={tab.id}>
          <button type="button">{tab.text}</button>
        </li>
      ))}
    </ul>
  );
};

export default TabPills;
