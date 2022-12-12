import React, { Component } from "react";

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
  constructor() {
    super()
    this.state ={
      pageTitle: "Welcome to my Portfolio",
      isLoading: false,

      data: [
        {title: "Alan", category: 'Awesome'},
        {title: "Austin", category: 'Cool'},
        {title: "Jordan", category: 'Knowledgeable'},
        {title: "Trenton", category: 'Teacher'},
        {title: "Terry", category: 'Leaver'}
      ]
    }

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }

  portfolioItems() {
    // const data = ["Alan", "Austin", "Jordan", "Trenton", "Terry"];

    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={"google.com"}/>;
    });
  }


  render() {
if (this.state.isLoading) {
  return <div>Loading...</div>;
}

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
        <h2>Portfolio items go here updated...</h2>

        <button onClick={() => this.handleFilter ("Awesome")}>Awesome</button>
        <button onClick={() => this.handleFilter ("Cool")}>Cool</button>
        <button onClick={() => this.handleFilter ("Knowledgeable")}>Knowledgeable</button>
        <button onClick={() => this.handleFilter ("Teacher")}>Teacher</button>
        <button onClick={() => this.handleFilter ("Leaver")}>Leaver</button>

        {this.portfolioItems()}

        

      </div>
    );
  }
}