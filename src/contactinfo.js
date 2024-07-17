import reviewUs from "./Assets/reviewUs.webp";
function ContactInfo() {
  const containerWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
    flexDirection: "column",
    marginTop: "10%",
    marginBottom: "3%",
    overflow: "hidden",
  };

  const bodyStyle = {
    width: "90%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    color: "white",
    overflow: "hidden",
    gridGap: "4%",
    textDecoration: "bold",
  };

  const subContent = {
    marginTop: "3%",
    background: "#051D40",
    padding: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "130%",
    textDecoration: "bold",
  };

  const subContent1 = {
    marginTop: "3%",
    background: "#051D40",
    padding: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "bold",
  };

  const reviewImg = {
    width: "100%",
  };

  const openingTime = {
    fontWeight: "bold",
    background: "white",
    color: "#051d41",
    margin: "4%",
    padding: "4%",
    border: "1px solid #051d41",
    borderRadius: "1.5rem",
  };

  const h3Style = {
    color: "#051d41",
    marginBottom: "0",
    marginTop: "15%",
    fontSize: "200%",
  };

  return (
    <div style={containerWrapper} className="contact">
      <h1>Contact Information</h1>
      <div style={bodyStyle} className="contactBody">
        <div style={subContent} className="subcontent">
          <p className="pstyle">Phone: 6440 5131</p>
          <p className="pstyle">Email: richard@lemotor.com.sg</p>
          <p className="pstyle">
            Richard Wong (Purchaser): <br></br> 9769 2303
          </p>
          <p className="pstyle">
            Alan Sim (Sales) <br></br>9821 1739
          </p>
        </div>

        <a href="https://g.page/r/CQJmRZAPZC1GEBM/review">
          <div style={subContent1} className="subcontent">
            <img src={reviewUs} style={reviewImg} alt="reviewUs" />
          </div>
        </a>
      </div>
      <h3 style={h3Style}>Service Hours</h3>
      <p style={openingTime}>
        Mon - Fri: 10am - 7pm <br></br><br></br>
        Sat & Sun: 11am - 6pm
      </p>
    </div>
  );
}

export default ContactInfo;
