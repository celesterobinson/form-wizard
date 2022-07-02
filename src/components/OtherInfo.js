import React from "react";

function OtherInfo({ formData, onChange }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Nationality..."
        name="nationality"
        value={formData.nationality}
        onChange={onChange}
        data-test-id="nationality"
      />
      <input
        type="text"
        placeholder="Other..."
        name="other"
        value={formData.other}
        onChange={onChange}
        data-test-id="other"
      />
    </div>
  );
}

export default OtherInfo;
