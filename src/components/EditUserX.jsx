import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const EditUserX = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div
        className="w-full sm:w-3/4 flex flex-row h-20 bg-tertiary rounded pt-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-1/6 h-full flex items-center justify-center text-primary">
          {props.name}
        </div>
        <div className="w-1/6 h-full flex items-center justify-center text-primary">
          {props.lname}
        </div>
        <div className="w-1/6 h-full flex items-center justify-center text-primary">
          {props.username}
        </div>
        <div className="w-2/6 h-full flex items-center justify-center text-primary">
          {props.email}
        </div>
        <div className="w-1/6 h-full flex items-center justify-center text-primary rounded">
          <a
            className={`${
              isHovered ? "text-green-600 " : "text-tertiary"
            } flex w-full h-full items-center justify-center text-5xl  `}
          >
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faEdit}
              onClick={props.onEdit}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default EditUserX;
