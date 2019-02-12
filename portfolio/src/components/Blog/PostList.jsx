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
        url: "test1"
      },
      {
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },{
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },{
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },{
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },{
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },{
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test7"
      },{
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test8"
      },{
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test"
      },{
        title: "Test9",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test10"
      },
      {
        title: "Test",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non turpis ante. Aliquam commodo, diam in commodo malesuada, enim ante molestie lacus, mollis congue quam turpis id magna. Donec quis metus quis lorem volutpat pellentesque. Nulla bibendum pellentesque lectus non commodo. Nam vitae ullamcorper massa. Integer at porttitor nunc. Aliquam vitae arcu fermentum, eleifend nunc ac, pharetra nisl. Vestibulum in venenatis lorem. Morbi accumsan, tellus sit amet porttitor sollicitudin, tellus neque imperdiet sapien, sed ultrices urna sapien vitae est.",
        url: "test11"
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
      postList: this.postsObj.slice(0, 10)
    };
  }
  changePage = (direction)=>{
    if(direction === "left"){
      const newPage = this.state.curPag -1;
      if(newPage === 0){
        return
      }
      this.setState({
        curPag: newPage,
        postList: this.postsObj.slice((newPage * 10) - 10, (newPage * 10))
        
      })
    }
    else{
      const newPage = this.state.curPag + 1;
      if(newPage > Math.ceil(this.postsObj.length/10)){
        return
      }
      this.setState({
        curPag: newPage,
        postList: this.postsObj.slice((this.state.curPag * 10), (newPage * 10))
        
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
            <FontAwesomeIcon onClick={()=>this.changePage('left')} icon={faArrowLeft}/>
            {this.state.curPag}<FontAwesomeIcon onClick={()=>this.changePage('right')} icon={faArrowRight}/>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
