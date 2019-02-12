import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faComment
} from "@fortawesome/free-solid-svg-icons";

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.postsObj = [
      {
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },
      {
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },
      {
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },
      {
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },
      {
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },
      {
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },
      {
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },
      {
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },
      {
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },
      {
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },
      {
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },
      {
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },
      {
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },
      {
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },
      {
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },
      {
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      }
    ];

    this.state = {
      curPag: 1,
      postList: this.postsObj.slice(0, 9)
    };
  }
  changePage = (direction)=>{
    if(direction === "left"){
      const newPage = this.state.curPag -1;
      this.setState({
        curPag: newPage,
        postList: this.postsObj.slice(this.state.curPag - (newPage * 10))
        
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.postList.map(e => {
          return <div>{e.url}</div>;
        })}
        {this.postsObj.length > 10 ? (
          <div className="paginator">
            <FontAwesomeIcon icon={faArrowLeft}/>
            {this.state.curPag}<FontAwesomeIcon icon={faArrowRight}/>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
