import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faStepForward } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const DeleteUserX = (props) => {
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
        className="w-full sm:w-2/3 flex flex-row h-20 bg-tertiary rounded pt-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-1/5 h-full flex items-center justify-center text-primary">
          {props.name}
        </div>
        <div className="w-1/5 h-full flex items-center justify-center text-primary">
          {props.lname}
        </div>
        <div className="w-1/5 h-full flex items-center justify-center text-primary">
          {props.username}
        </div>
        <div className="w-1/5 h-full flex items-center justify-center text-primary"></div>
        <div className="w-1/5 h-full flex items-center justify-center text-primary rounded">
          <a
            className={`${
              isHovered ? "text-red-600 " : "text-tertiary"
            } flex w-full h-full items-center justify-center text-5xl  `}
          >
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faTrashCan}
              onClick={props.onDelete}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default DeleteUserX;
