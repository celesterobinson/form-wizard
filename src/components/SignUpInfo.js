import React from "react";

function SignUpInfo({ formData, onChange }) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Email..."
        name="email"
        value={formData.email}
        onChange={onChange}
      />
      <input
        type="password"
        placeholder="Password..."
        name="password"
        value={formData.password}
        onChange={onChange}
        autoComplete="on"
      />
      <input
        type="password"
        placeholder="Confirm Password..."
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={onChange}
        autoComplete="on"
      />
    </div>
  );
}

export default SignUpInfo;
