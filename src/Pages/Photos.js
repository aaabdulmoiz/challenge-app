import React, { useState, useContext, useEffect } from "react";
import { PhotoContext } from "../Context/PhotoContext";
import "../challenge.css";

const Photos = (props) => {
  //Decontructed for the hooks
  const {photos, toggleFavorite, carts, addToCart, removeFromCart} = useContext(PhotoContext);
  const [photo, setPhoto] = photos;
  const [cartItems, setCartItems] = carts;
  const [hovered, setHovered] = useState(false)
  //console.log(photo);
  //Function called when moused is hovered over the image


  function heartIcon(id, fav) {
    if(fav && hovered) {
      //console.log(photo.id);
        return <button className="btn btn-danger" onClick={() => toggleFavorite(id)}>
                <i className="fa fa-heart" ></i>
              </button>
    } else if(hovered) {
        return <button className="btn btn-danger" onClick={() => toggleFavorite(id)}>
        <i className="fa fa-heart-o" ></i>
      </button>
    }
}

function cartIcon(id) {
  const alreadyInCart = cartItems.some(item => item.id === id)
  if(alreadyInCart) {
      return <button className="btn btn-primary" onClick={() => removeFromCart(id)}>
        <i className="fa fa-cart-plus" ></i>
      </button>
  } else if(hovered) {
      return  <button className="btn btn-primary" onClick={() => addToCart()}><i className="fa fa-cart-plus" ></i></button>
  }
}

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        {photo.map((photo) => (
          <div
            className="mb-4 ml-2 mr-2 text-middle container"
            style={{ width: "20rem"}}
            key={photo.id}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
            width='60'
            height='60'
              src={photo.url}
              key={photo.id}
              className="image img-top"
            />
            <div>
              {heartIcon(photo.id, photo.isFavorite)}
              {cartIcon(photo.id)}
              {/* <button className="btn btn-primary ri-heart-line favorite">
                <i className="fa fa-plus" aria-hidden="true"></i>
              </button> */}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
