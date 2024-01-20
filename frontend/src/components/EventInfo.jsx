import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const EventInfo = (props) => {
  return (
    <div className="z-10 w-full absolute min-h-screen flex items-center justify-center py-auto px-4 sm:px-6 lg:px-8 backdrop-blur-sm">
      <div className="z-20 bg-blue-100 shadow-blue-400 shadow-md hover:shadow-lg hover:border-blue-400 border-2 rounded-lg p-6 sm:p-8 lg:p-10 max-w-screen-md">
        <div className="flex justify-end w-full">
          <button
            className="text-red-600 text-4xl font-semibold"
            onClick={props.toggle}
          >
            x
          </button>
        </div>
        <div className="mb-8">
          <h1 className="text-4xl text-center font-bold italic text-indigo-700">
            {props.event.eventName}
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-lg mb-1">Start Date</p>
            <p className="text-gray-600">
              {props.event.startDateTime.toISOString().split("T")[0]}
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg mb-1">End Date</p>
            <p className="text-gray-600">
              {props.event.endDateTime.toISOString().split("T")[0]}
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg mb-1">Start Time</p>
            <p className="text-gray-600">
              {props.event.startDateTime.toTimeString().split(" ")[0]}
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg mb-1">End Time</p>
            <p className="text-gray-600">
              {props.event.endDateTime.toTimeString().split(" ")[0]}
            </p>
          </div>
        </div>
        <div className="mt-6 mb-4">
          <p className="font-semibold text-lg mb-1">Organising Department</p>
          <p className="text-gray-600">{props.event.organisingDept}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-lg mb-1">Category</p>
            <p className="text-gray-600">{props.event.category}</p>
          </div>
          <div>
            <p className="font-semibold text-lg mb-1">Type</p>
            <p className="text-gray-600">{props.event.type}</p>
          </div>
          <div>
            <p className="font-semibold text-lg mb-1">Venue</p>
            <p className="text-gray-600">{props.event.venue}</p>
          </div>
          <div>
            <p className="font-semibold text-lg mb-1">Meetlink</p>
            <p className="text-gray-600">{props.event.meetlink}</p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-700">
            {props.event.description}
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:mx-12">
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="mt-6 md:mb-4">
              <p className="font-semibold text-lg mb-1">Student Coordinator</p>
              <p className="text-gray-600">
                {props.event.studentCoordinator.coordinator1.name}
              </p>
              <p className="text-gray-600">
                {props.event.studentCoordinator.coordinator1.phoneNumber}
              </p>
            </div>
            <div className="mt-6 mb-4">
              <p className="font-semibold text-lg mb-1">Student Coordinator</p>
              <p className="text-gray-600">
                {props.event.studentCoordinator.coordinator2.name}
              </p>
              <p className="text-gray-600">
                {props.event.studentCoordinator.coordinator2.phoneNumber}
              </p>
            </div>
          </div>
          <div className="mt-6 mb-4 md:ml-8">
            <p className="font-semibold text-lg mb-1">Faculty Coordinator</p>
            <p className="text-gray-600">
              {props.event.facultyCoordinator.name}
            </p>
            <p className="text-gray-600">
              {props.event.facultyCoordinator.email}
            </p>
          </div>
        </div>
        <div className="flex justify-end md:flex-row gap-4">
          <div className=" rounded-full p-3 bg-blue-400 hover:bg-blue-600">
            <BsTwitter
              onClick={() => {
                window.open(`${props.event.socialMediaLinks.twitter}`);
              }}
            />
          </div>
          <div className=" rounded-full p-3 bg-indigo-500 hover:bg-indigo-700">
            <BsInstagram
              onClick={() => {
                window.open(`${props.event.socialMediaLinks.instagram}`);
              }}
            />
          </div>
          <div className=" rounded-full p-3 bg-green-500 hover:bg-green-700">
            <FaWhatsapp
              onClick={() => {
                window.open(`${props.event.socialMediaLinks.whatsapp}`);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
