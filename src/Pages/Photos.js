import React, { useState, useContext, useEffect } from "react";
import { PhotoContext } from "../Context/PhotoContext";
import "../challenge.css";

const Photos = (props) => {
  //loaded the values in diff variables of 2 objects
  const { photos, loader } = useContext(PhotoContext);
  //Decontructed for the hooks
  const [photo, setPhoto] = photos;
  const [loading, setLoading] = loader;
  const [hovered, setHovered] = useState(false);
  if (!loading) {
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
      return "middle";
      //setPhoto(copy);
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
              <div class="middle">
                <button className="btn btn-danger">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </button>
                <button className="btn btn-primary ri-heart-line favorite">
                  <i class="fa fa-plus" aria-hidden="true"></i>
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
  } else {
    return <div></div>;
  }
};

export default Photos;
