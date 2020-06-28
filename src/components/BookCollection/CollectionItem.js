import React from "react";
import StaticRating from "../../pages/BookDetails/StaticsRating";
import { calculateAvgRating } from "../../utils";

const CollectionItem = props => {
  return (
    <div className="item">
      <img className="cover" src={props.book.book_img} alt={props.book.title} />

      <div className="details">
        <div className="rating">
          <span>Avg. Rating: </span>
          <StaticRating value={calculateAvgRating(props.book.reviews)} />
        </div>
        <h3>{props.book.title}</h3>

        <div className="author">
          {props.book.author} &middot; {props.book.publisher}
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
