import React, { useState } from "react";

function CreateTimetable() {
  const [formData, setFormData] = useState({
    name: "",
    dept: "",
    session: "",
    code: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/timetablemodule/timetable', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data= await response.json();
        console.log(data.code);
      } else {
        // Handle errors
        console.error("Error submitting the form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="dept"
        value={formData.dept}
        onChange={handleInputChange}
        placeholder="Department"
      />
      <input
        type="text"
        name="session"
        value={formData.session}
        onChange={handleInputChange}
        placeholder="Session"
      />
   
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateTimetable;