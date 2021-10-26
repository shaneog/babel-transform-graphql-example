import React, { Component } from "react";
import { graphql } from "react-apollo";
import myImportedQuery from "./queries/productsQuery.graphql";

class ProductsPage extends Component {
  render() {
    if (this.props.data.loading) return <h3>Loading...</h3>;
    return <div>{`This is my data: ${this.props.data.queryName}`}</div>;
  }
}

export default graphql(myImportedQuery)(ProductsPage);
