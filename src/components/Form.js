import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} onChange={onChange} />;
    }

    if (page === 1) {
      return <PersonalInfo formData={formData} onChange={onChange} />;
    }

    if (page === 2) {
      return <OtherInfo formData={formData} onChange={onChange} />;
    }
  };

  return (
    <form className="form">
      <div className="progressbar">
        <div
          style={{
            width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={(e) => {
              e.preventDefault();
              setPage(page - 1);
            }}
            data-test-id="prev-button"
          >
            Prev
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
                return;
              }
              setPage(page + 1);
            }}
            data-test-id="next-button"
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
