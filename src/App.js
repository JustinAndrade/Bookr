import React, { Component } from "react";
import AddReview from "./components/AddReview";
import BookDetailPage from "./pages/BookDetails";
import HomePage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import { getBooks } from "./store/actions/api";

import { Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";

class App extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="app-body">
          <Route exact path="/" component={HomePage} />
          {/* TODO - implement dynamic routing (i.e. `/book/:bookId)` */}
          {/* Source: https://reacttraining.com/react-router/web/api/Route/route-props */}
          <Route exact path="/book/:id" component={BookDetailPage} />
          <Route path="/book/:id/review" component={AddReview} />
          <Route path="/about" component={About} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(null, { getBooks })(App);
