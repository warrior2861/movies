import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Breadcrumbs = ({ optionsData }) => {
  const options = [
    {
      key: nanoid(),
      text: "Home",
      to: "/",
    },
    ...optionsData,
  ];

  return (
    <div className="text-sm breadcrumbs text-gray-800">
      <ul>
        {options.map((options) => {
          return (
            <li key={options.key}>
              <Link to={options.to} className="capitalize">
                {options.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Breadcrumbs.propTypes = { optionsData: PropTypes.array };

export default Breadcrumbs;
