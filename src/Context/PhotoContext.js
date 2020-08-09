import React, { useState, createContext, useEffect } from "react";

export const PhotoContext = createContext();

export const PhotoProvider = (props) => {
  //hooks for loading the photos and inb4 the loads
  const [photo, setPhoto] = useState([]);
  const [waitPhotos, setWaitPhotos] = useState(true);

  //Runs when the component renders
  useEffect(() => {
    console.log("Use Effect Runs of PhotoContext");
    fetchPhotos();

    async function fetchPhotos() {
      const url =
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

      try {
        const response = await fetch(url);
        const json = await response.json();
        setPhoto(json);
        setWaitPhotos(false);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  return (
    //Passing the data through Context
    <PhotoContext.Provider value={[photo, setPhoto]}>
      {props.children}
    </PhotoContext.Provider>
  );
};
