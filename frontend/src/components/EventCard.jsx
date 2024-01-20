import axios from "axios";
import { MdDelete } from "react-icons/md";

const EventCard = (props) => {

const handleClick = async()=>{
    try {
        const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/events/${props.event._id}`);
        alert("Successfully Deleted", response);
        window.location.reload();
      } catch (error) {
        alert("API Error:", error.message);
      }
}

  return (
    <div className="m-4 p-4 border rounded-lg shadow-md hover:shadow-xl hover:border-black">
    <div className="flex justify-end w-full px-5">
    <button className="text-2xl text-red-500 font-semibold text-right" onClick={handleClick}><MdDelete /></button>
     </div>
      <p className="text-3xl font-semibold italic text-blue-500">{props.event.eventName}</p>
      <p>
        <strong>Category:</strong> {props.event.category}
      </p>
      <p>
        <strong>Description:</strong> {props.event.description}
      </p>
      <p>
        <strong>Start Date & Time:</strong> {props.event.startDateTime}
      </p>
      <p>
        <strong>End Date & Time:</strong> {props.event.endDateTime}
      </p>
      <p>
        <strong>Organising Department:</strong> {props.event.organisingDept}
      </p>
      <p>
        <strong>Type:</strong> {props.event.type}
      </p>
      <p>
        <strong>Venue:</strong> {props.event.venue}
      </p>
      <p>
        <strong>Meet Link:</strong> {props.event.meetlink}
      </p>
      <p>
        <strong>Description:</strong> {props.event.description}
      </p>
      <p>
        <strong>Faculty Coordinator:</strong>{" "}
        {props.event.facultyCoordinator.name} (
        {props.event.facultyCoordinator.email})
      </p>
      <p>
        <strong>Social Media Links:</strong>
      </p>
      <ul>
        <li>
          <strong>WhatsApp:</strong> {props.event.socialMediaLinks.whatsapp}
        </li>
        <li>
          <strong>Instagram:</strong> {props.event.socialMediaLinks.instagram}
        </li>
        <li>
          <strong>Twitter:</strong> {props.event.socialMediaLinks.twitter}
        </li>
      </ul>
      <p>
        <strong>Student Coordinator 1:</strong>{" "}
        {props.event.studentCoordinator.coordinator1.name} (
        {props.event.studentCoordinator.coordinator1.phoneNumber})
      </p>
      <p>
        <strong>Student Coordinator 2:</strong>{" "}
        {props.event.studentCoordinator.coordinator2.name} (
        {props.event.studentCoordinator.coordinator2.phoneNumber})
        </p>
    </div>
  );
};

export default EventCard;
