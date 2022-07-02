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
        data-test-id="first-name"
      />
      <input
        type="text"
        placeholder="Last Name..."
        name="lastName"
        value={formData.lastName}
        onChange={onChange}
        data-test-id="last-name"
      />
      <input
        type="text"
        placeholder="Username..."
        name="username"
        value={formData.username}
        onChange={onChange}
        data-test-id="username"
      />
    </div>
  );
}

export default PersonalInfo;
