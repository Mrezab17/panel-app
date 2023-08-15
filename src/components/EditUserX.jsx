import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const EditUserX = (props) => {
  return (
    <>
      <div className="w-full sm:w-3/4 flex flex-row h-20 bg-tertiary rounded pt-0">
        <div className="w-2/12 h-full flex items-center justify-center text-primary">
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
        <div className="w-20 h-full flex items-center justify-center text-primary rounded">
          <a
            className={` text-white flex w-full h-full items-center justify-center text-5xl  `}
          >
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faEdit}
              onClick={props.onEdit}
            />
          </a>
        </div>
        <div className="w-20 h-full flex items-center justify-center text-primary rounded">
          <a
            className={` text-black flex w-full h-full items-center justify-center text-5xl  `}
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

export default EditUserX;
