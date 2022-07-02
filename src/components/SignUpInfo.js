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
        data-test-id="email"
      />
      <input
        type="password"
        placeholder="Password..."
        name="password"
        value={formData.password}
        onChange={onChange}
        autoComplete="on"
        data-test-id="password"
      />
      <input
        type="password"
        placeholder="Confirm Password..."
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={onChange}
        autoComplete="on"
        data-test-id="confirm-password"
      />
    </div>
  );
}

export default SignUpInfo;
