import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [img, setImg] = useState("http://localhost:4000/upload.png");
  const [file, setFile] = useState();

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function load() {
      console.log("*****************", reader.result);
      setImg(reader.result);
    };
  };

  const uploadImg = () => {
    console.log("uploadImgh", file);
    const nameImg = "carro";

    const form = new FormData();
    form.append("file", file, "form-data");
    form.append("name", nameImg);
    const URL = "http://localhost:4000/upload";

    return axios.post(URL, form);
  };

  return (
    <div>
      <input type="file" onChange={handleChange}></input>
      <br />
      <button onClick={uploadImg}>Subir</button>
      <br />
      <img src={img} alt="hjkasfhaslk" />
    </div>
  );
};

export default Upload;
