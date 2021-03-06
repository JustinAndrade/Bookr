import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getBooks } from "../../store/actions/api";
import CollectionItem from "./CollectionItem";

const CollectionItemContainer = props => {
  useEffect(props => {
    getBooks();
  }, []);

  return (
    <div className="page-container">
      {props.books.map(book => (
        <Link
          className="book"
          to={{ pathname: `/book/${book.id}`, state: { book } }}
          key={book.id}
          style={{
            textDecoration: "none",
            color: "black"
          }}
        >
          <CollectionItem book={book} key={book.id} />
        </Link>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

export default connect(mapStateToProps, { getBooks })(CollectionItemContainer);
