import React from "react";

type DescriptionListProps = {
  data: Record<string, string>;
};

const DescriptionList: React.FC<DescriptionListProps> = ({ data }) => {
  return (
    <ul >
      {Object.entries(data).map(([key, value]) => (
        <li className="text-md text-text font-light flex justify-between gap-3"
          key={key}
        >
          <span className="text-text text-md font-bold">
            {key}:
          </span> 
          <span>
            {String(value)}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default DescriptionList;
