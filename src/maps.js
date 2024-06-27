import React from "react";

function Maps() {
  const flexWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div>
      <div style={flexWrapper} className="maps">
        <h1>Locate Us!</h1>
        <iframe
          className="maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.140654492527!2d103.9044345!3d1.3039278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da187224baf505%3A0x462d640f90456602!2sLe%20Motor%20Enterprise!5e0!3m2!1sen!2ssg!4v1719342160105!5m2!1sen!2ssg"
          width="50%"
          height="600px"
          style={{
            borderRight: "1px solid black",
            borderBottom: "1px solid black",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Maps;
