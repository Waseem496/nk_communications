import React from "react";

const GoogleFormEmbed = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Fill Out the Google Form</h2>
      <iframe
        src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
        width="640"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleFormEmbed
