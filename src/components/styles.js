const appStyleMax = {
  textAlign: "center",
  width: "600px",
  margin: "2rem auto",
  padding: "2rem",
  borderRadius: "20px",
  boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
};

const appStyleMin = {
  textAlign: "center",
  width: "250px",
  margin: "2rem auto",
  padding: "2rem",
  borderRadius: "20px",
  boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
};

export const renderAppStyles = () => {
  if (window.innerWidth <= 375) {
    return appStyleMin;
  }
  return appStyleMax;
};

const editStyle = {
  textAlign: "center",
  margin: "2rem auto",
  padding: "2rem",
  borderRadius: "20px",
  boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
};

export const renderEditStyles = () => {
  return editStyle;
};
