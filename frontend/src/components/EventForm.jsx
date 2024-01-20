import React, { useState } from "react";
import axios from 'axios';

const EventForm = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    startDateTime: "",
    endDateTime: "",
    organisingDept: "",
    category: "academic",
    type: "online",
    venue: "",
    meetlink: "",
    description: "",
    studentCoordinator: {
      coordinator1: {
        phoneNumber: "",
        name: "",
      },
      coordinator2: {
        phoneNumber: "",
        name: "",
      },
    },
    facultyCoordinator: {
      name: "",
      email: "",
    },
    socialMediaLinks: {
      whatsapp: "",
      instagram: "",
      twitter: "",
    },
  });
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCoordinatorChange = (e, coordinator) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      studentCoordinator: {
        ...formData.studentCoordinator,
        [coordinator]: {
          ...formData.studentCoordinator[coordinator],
          [name]: value,
        },
      },
    });
  };

  const handleFacultyCoordinatorChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      facultyCoordinator: {
        ...formData.facultyCoordinator,
        [name]: value,
      },
    });
  };

  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      socialMediaLinks: {
        ...formData.socialMediaLinks,
        [name]: value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/events`, {
        eventObj: formData,
      });
      console.log('API Response:', response.data);
      setSuccess(true);
    } catch (error) {
      console.error('API Error:', error.message);
    }
  };

  return (
    <div>
    {success && <p className=" text-4xl bg-green-600 text-white py-5 text-center">Event successfully Added</p>}
    <p className="text-5xl font-semibold text-blue-700 text-center italic mt-8">Add Event</p>
      <form onSubmit={handleSubmit} className="max-w-[80vw] md:max-w-md mx-auto my-8">
        <label className="block mb-4">
          Event Name:
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded"
            required={true}
          />
        </label>

        <label className="block mb-4">
          Start Date and Time:
          <input
            type="datetime-local"
            name="startDateTime"
            value={formData.startDateTime}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded"
            required={true}
          />
        </label>

        <label className="block mb-4">
          End Date and Time:
          <input
            type="datetime-local"
            name="endDateTime"
            value={formData.endDateTime}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </label>

        <label className="block mb-4">
          Organising Department:
          <input
            type="text"
            name="organisingDept"
            value={formData.organisingDept}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded"
            required={true}
          />
        </label>

        <label className="block mb-4">
          Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded"
            required={true}
          >
            <option value="academic">Academic</option>
            <option value="club">Club</option>
            <option value="sports">Sports</option>
            <option value="placement">Placement</option>
          </select>
        </label>

        <label className="block mb-4">
          Type:
          <select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded"
            required={true}
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </label>

        <label className="block mb-4">
          Venue:
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded"
            required={true}
          />
        </label>

        <label className="block mb-4">
          Meet Link:
          <input
            type="url"
            name="meetlink"
            value={formData.meetlink}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </label>

        <label className="block mb-4">
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded"
            required={true}
          />
        </label>

        <label className="block mb-4">
          Student Coordinator 1 Name:
          <input
            type="text"
            name="name"
            value={formData.studentCoordinator.coordinator1.name}
            onChange={(e) => handleCoordinatorChange(e, "coordinator1")}
            className="mt-1 p-2 w-full border rounded"
            required={true}
          />
        </label>

        <label className="block mb-4">
          Student Coordinator 1 Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.studentCoordinator.coordinator1.phoneNumber}
            onChange={(e) => handleCoordinatorChange(e, "coordinator1")}
            className="mt-1 p-2 w-full border rounded"
            required={true}
          />
        </label>

        <label className="block mb-4">
          Student Coordinator 2 Name:
          <input
            type="text"
            name="name"
            value={formData.studentCoordinator.coordinator2.name}
            onChange={(e) => handleCoordinatorChange(e, "coordinator2")}
            className="mt-1 p-2 w-full border rounded"
          />
        </label>

        <label className="block mb-4">
          Student Coordinator 2 Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.studentCoordinator.coordinator2.phoneNumber}
            onChange={(e) => handleCoordinatorChange(e, "coordinator2")}
            className="mt-1 p-2 w-full border rounded"
          />
        </label>

        <label className="block mb-4">
          Faculty Coordinator Name:
          <input
            type="text"
            name="name"
            value={formData.facultyCoordinator.name}
            onChange={handleFacultyCoordinatorChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </label>

        <label className="block mb-4">
          Faculty Coordinator Email:
          <input
            type="email"
            name="email"
            value={formData.facultyCoordinator.email}
            onChange={handleFacultyCoordinatorChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </label>

        <label className="block mb-4">
          WhatsApp Link:
          <input
            type="url"
            name="whatsapp"
            value={formData.socialMediaLinks.whatsapp}
            onChange={handleSocialMediaChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </label>

        <label className="block mb-4">
          Instagram Link:
          <input
            type="url"
            name="instagram"
            value={formData.socialMediaLinks.instagram}
            onChange={handleSocialMediaChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </label>

        <label className="block mb-4">
          Twitter Link:
          <input
            type="url"
            name="twitter"
            value={formData.socialMediaLinks.twitter}
            onChange={handleSocialMediaChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      {success && <p className=" text-4xl bg-green-600 text-white py-5 text-center">Event successfully Added</p>}
    </div>
  );
};

export default EventForm;
