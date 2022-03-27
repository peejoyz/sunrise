import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Come experience a hiking like no other with our experience team."
      },
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "We offer our customers with free cocktails for parties and event."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Come have fun and drink with family and friends from our varieties of beers. "
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Availability of rides for effective and efficient movement."
      },
     
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
