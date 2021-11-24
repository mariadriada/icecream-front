import React from "react";

//import Upload from "./Upload";

//import Firma from "../../static/firma.png";

const Images = () => {
  console.log("IMAGE_URL", process.env.REACT_APP_IMAGE_URL);
  return (
    <div>
      <img
        src={`${process.env.REACT_APP_IMAGE_URL}upload.png`}
        alt="descripcion"
      />
      {/*<Upload />*/}
    </div>
  );
};

export default Images;
