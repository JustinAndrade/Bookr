import React from "react";
import { connect } from "react-redux";

import "./index.scss";

class BookCarousel extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return this.props.books.map(item => {
      if (item.id < 12) {
        return (
          <div className="solo-slide">
            <img className="slide-image" src={item.book_img} alt={item.title} />{" "}
          </div>
        );
      }
    });
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

export default connect(mapStateToProps)(BookCarousel);
