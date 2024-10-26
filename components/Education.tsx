import { educationType } from "../types";

export const Education = ({ career, years, description }: educationType) => {
  return (
    <div>
      <h3 className="text-xl inline">{career}</h3>
      <span className="text-sm text-black-400 italic"> ({years})</span>
      <p className="text-lg text-black-400 italic">{description}</p>
    </div>
  );
};
