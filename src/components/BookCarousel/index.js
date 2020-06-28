import React from "react";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./index.scss";

class BookCarousel extends React.Component {
  render() {
    return (
      <Carousel autoPlay showArrows={true}>
        {this.props.books.map(book => (
          <img
            style={{ height: "350px", width: "auto" }}
            src={book.book_img}
            alt={book.title}
            key={book.title}
          />
        ))}
      </Carousel>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

export default connect(mapStateToProps)(BookCarousel);
