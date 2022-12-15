import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
  constructor() {
    super()
    this.state ={
      pageTitle: "Portfolio Projects",
      isLoading: false,

      data: []
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

  getPortfolioItems () {
    axios
      .get('https://alanmccall.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        this.setState({
          data: response.data.portfolio_items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {

      return <div>Loading...</div>;
    }

    return (
        <div className="portfolio-items-wrapper">
          <button className="btn" onClick={() => this.handleFilter ("Class")}>Class Projects</button>
          <button className="btn" onClick={() => this.handleFilter ("Fitness")}>Fitness</button>
          <button className="btn" onClick={() => this.handleFilter ("Gaming")}>Gaming</button>

          {this.portfolioItems()}
        </div>
    );
  }
}

// data: [
//   {title: "HTML5", category: 'Front End', url: "https://html.spec.whatwg.org/", slug: 'HTML5'},
//   {title: "CSS", category: 'Front End', url: "https://www.w3.org/Style/CSS/", slug: 'CSS'},
//   {title: "SCSS/SASS", category: 'Front End', url: "https://sass-lang.com/", slug: 'SCSS-SASS'},
//   {title: "Python", category: 'Mid Level', url: "https://www.python.org/", slug: 'Python'},
//   {title: "JavaScript", category: 'Mid Level', url: "https://www.javascript.com/", slug: 'JavaScript'},
//   {title: "Mongo db", category: "Back End", url: "https://www.mongodb.com/", slug: 'Mongo db'},
//   {title: "ReactJS", category: "Full Stack", url: "https://reactjs.org/", slug: 'ReactJS'},
//   {title: "UML", category: "Diagram", url: "https://www.uml.org/", slug: 'UML'}
// ]

// this.getPortfolioItems = this.getPortfolioItems.bind(this);

// this.getPortfolioItems();