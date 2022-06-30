import React from "react";

function PersonalInfo({ formData, onChange }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="First Name..."
        name="firstName"
        value={formData.firstName}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Last Name..."
        name="lastName"
        value={formData.lastName}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Username..."
        name="username"
        value={formData.username}
        onChange={onChange}
      />
    </div>
  );
}

export default PersonalInfo;
