import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const DeleteUserX = (props) => {
  return (
    <>
      <div className="w-full sm:w-2/3 flex flex-row h-20 bg-tertiary rounded pt-0">
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
            className={` text-red-600 flex w-full h-full items-center justify-center text-5xl  `}
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
