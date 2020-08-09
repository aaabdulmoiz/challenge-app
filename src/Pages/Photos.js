import React, { useState, useContext, useEffect } from "react";
import { PhotoContext } from "../Context/PhotoContext";
import "../challenge.css";

const Photos = (props) => {
  //Decontructed for the hooks
  const [photo, setPhoto] = useContext(PhotoContext);
  //console.log(photo);
  //Function called when moused is hovered over the image
  function inArea() {
    const copy = [...photo];
    copy[this - 1].hovered = true;
    console.log(
      "onMouseEnter: Hovered state of this photo with id " +
        this +
        " is " +
        copy[this - 1].hovered
    );
    setPhoto(copy);
    console.log(photo[this - 1].hovered);
  }
  //Function called when Mouse goes out of the image
  function outArea() {
    const copy = [...photo];
    copy[this - 1].hovered = false;
    console.log(
      "onMouseOut: Hovered state of this photo with id " +
        this +
        " is " +
        copy[this - 1].hovered
    );
  }

  useEffect(() => {
    changeAttribute();
    async function changeAttribute() {
      const copy = await [...photo];
      copy.forEach(async function (photo) {
        photo.hovered = await "false";
      });
      setPhoto(copy);
      console.log(photo);
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        {photo.map((photo) => (
          <div
            className="card mb-4 ml-2 mr-2 text-middle container"
            style={{ width: "18rem" }}
            key={photo.id}
          >
            <img
              onMouseEnter={inArea.bind(photo.id)}
              onMouseOut={outArea.bind(photo.id)}
              src={photo.url}
              key={photo.id}
              className="image card-img-top"
              alt="Card image cap"
              style={{ opacity: "1" }}
            />
            <div className="middle">
              <button className="btn btn-danger">
                <i className="fa fa-heart" aria-hidden="true"></i>
              </button>
              <button className="btn btn-primary ri-heart-line favorite">
                <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
            <div className="card-body">
              <p className="card-text">{photo.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
