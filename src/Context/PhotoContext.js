import React, { useState, createContext, useEffect } from "react";

export const PhotoContext = createContext();

export const PhotoProvider = (props) => {
  //hooks for loading the photos and inb4 the loads
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(true);

  //Runs when the component renders
  useEffect(() => {
    console.log("Use Effect Runs of PhotoContext");
    fetchPhotos();

    async function fetchPhotos() {
      //the data from api contains attributes such as url, isFavorited, id
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
    //Passing the data through Context
    <PhotoContext.Provider
      value={{ photos: [photo, setPhoto], loader: [loading, setLoading] }}
    >
      {props.children}
    </PhotoContext.Provider>
  );
};
