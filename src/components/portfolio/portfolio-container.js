import React, { Component } from "react";

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
  constructor() {
    super()
    this.state ={
      pageTitle: "Welcome to my Portfolio",
      isLoading: false,

      data: [
        {title: "HTML5", category: 'Front End', url: "https://html.spec.whatwg.org/", slug: 'HTML5'},
        {title: "CSS", category: 'Front End', url: "https://www.w3.org/Style/CSS/", slug: 'CSS'},
        {title: "SCSS/SASS", category: 'Front End', url: "https://sass-lang.com/", slug: 'SCSS-SASS'},
        {title: "Python", category: 'Mid Level', url: "https://www.python.org/", slug: 'Python'},
        {title: "JavaScript", category: 'Mid Level', url: "https://www.javascript.com/", slug: 'JavaScript'},
        {title: "Mongo db", category: "Back End", url: "https://www.mongodb.com/", slug: 'Mongo db'},
        {title: "ReactJS", Category: "Full Stack", url: "https://reactjs.org/", slug: 'ReactJS'},
        {title: "UML", Category: "Diagrams", url: "https://www.uml.org/", slug: 'UML'}
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

    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={item.url} slug={item.slug}/>;
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

        <button onClick={() => this.handleFilter ("Front End")}>Front End</button>
        <button onClick={() => this.handleFilter ("Mid Level")}>Mid Level</button>
        <button onClick={() => this.handleFilter ("Back End")}>Back End</button>
        <button onClick={() => this.handleFilter ("Diagrams")}>Diagrams</button>
        <button onClick={() => this.handleFilter ("Full Stack")}>Full Stack</button>

        {this.portfolioItems()}

        

      </div>
    );
  }
}