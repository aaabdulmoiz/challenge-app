import React, { useState, useContext, useEffect } from "react";
import { PhotoContext } from "../Context/PhotoContext";
import "../challenge.css";

// const Photos = (props, context) => {
//   const { photos, loader } = useContext(PhotoContext);
//   const [photo, setPhoto] = photos;
//   const [loading, setLoading] = loader;

//   //console.log(photo);
//   useEffect(() => {
//     console.log("UseEffect runs of Photos");
//     console.log(photo);
//   }, []);

//   return <div></div>;
// };

const Photos = (props) => {
  const { photos, loader } = useContext(PhotoContext);
  const [photo, setPhoto] = photos;
  const [loading, setLoading] = loader;
  const [hovered, setHovered] = useState(false);
  if (!loading) {
    // const copy = [...photo];
    // copy.map((copy) => {
    //   copy.hovered = false;
    // });
    // console.log(copy);
    //setPhoto(copy);

    //    useEffect(() => {}, []);

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

// const Photos = (props) => {
//   const [photo, setPhoto] = useContext(PhotoContext);

//   if (photo.length != 0) {
//     copy= photo

//     //setPhotos(addHover);
//     console.log(photo);

//     function inArea() {
//       console.log(this);
//       const copy = [...photo];
//       console.log(copy[this]);
//       copy[this - 1].hovered = true;
//       console.log(copy);
//       setPhoto(copy);
//     }

//     // function outArea() {
//     //   console.log("Out of Image");
//     // }

//     return (
//       <div>
//         <div className="container row justify-content-center">
//           {photo.map((photo) => (
//             <div
//               className="card mb-4 ml-2 mr-2 text-left"
//               style={{ width: "18rem" }}
//               key={photo.id}
//             >
//               <img
//                 onMouseEnter={inArea.bind(photo.id)}
//                 src={photo.url}
//                 key={photo.id}
//                 className="card-img-top"
//                 alt="Card image cap"
//               />
//               <div className="card-body">
//                 <p className="card-text">{photo.id}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   } else {
//     return <div></div>;
//   }
// };

const cstyle = { container: { position: "relative", width: "50%" } };
const imagetyle = {
  image: {
    opacity: "1",
    display: "block",
    width: "100%",
    height: "auto",
    transition: ".5s ease",
    backfaceVisibility: "hidden",
  },
};

export default Photos;
