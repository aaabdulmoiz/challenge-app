import React, { useState, createContext, useEffect } from "react";

export const PhotoContext = createContext();

export const PhotoProvider = (props) => {
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Use Effect Runs of PhotoContext");
    fetchPhotos();

    async function fetchPhotos() {
      const url =
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

      fetch(url)
        .then((res) => res.json())
        .then((arr) => {
          setPhoto(arr);
          setLoading(false);
        })
        .catch(console.log(""));
    }
  }, []);
  return (
    <PhotoContext.Provider
      value={{ photos: [photo, setPhoto], loader: [loading, setLoading] }}
    >
      {props.children}
    </PhotoContext.Provider>
  );
};
