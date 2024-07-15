import quoteImage from "./Assets/quote.png";

function Quote() {
  const containerWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
    flexDirection: "column",
    marginTop: "5%",
    marginBottom: "3%",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "70%",
    borderRadius: "1.5rem",
    border: "1px solid #0a1540",
  };

  return <div style={containerWrapper}>
    <img src={quoteImage} style={imageStyle} alt="quote" />
  </div>;
}

export default Quote;
