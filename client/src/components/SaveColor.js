import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
const initialColor = {
code: {hex: "#f0f8ff"},
color: "aliceblue",
id: 1
}
const SaveColor = (props) => {
  const [colorData,setColor] = useState()
  const [codeData,setCode] = useState()

console.log('on entering upatecolor props',props)

  const  handleColorInput = e => {
    e.persist();
    e.preventDefault();
      console.log('e.target.value',(e.target.value))
      setColor({ [e.target.name]: e.target.value })
  console.log('colorData',colorData)
    };
  
    const  handleCodeInput = e => {
      e.persist();
      e.preventDefault();
        console.log('e.target.value',(e.target.value))
        setCode({ [e.target.name]: e.target.value })
    console.log('codeData',codeData)
      };
      
    const  handleSubmitColor = (e) => {
  e.preventDefault();
  console.log("props0",props)
  console.log("colorData, codeData",colorData, codeData)
  const id  = props.state.id;
  const newColor = colorData ? colorData.color : props.state.color
  const newCode = codeData ? codeData.code : props.state.code
  const newColorData = {
    code: {hex: newCode},
    color: newColor,
    id: id
    }
        // {id: props.state.movie.id,
    // title: "The Godfather", director: "Francis Ford Coppola", metascore: 100, stars: Array(3)}
    // { newColor, newCode, id };
    console.log("newColor",newColorData)
  

    const saveColor = axios
      .put(`http://localhost:5000/api/colors/${props.state.id}`, newColor)
      .then(response => {
        console.log('put response',response)
        // ///////
        // axios
        // .get("http://localhost:5000/api/movies")
        // .then(res => 
        //   {
        //     console.log('movielist did mount',res.data)
        //   // this.setState({ movies: res.data })
        // })
        // .catch(err => console.log(err.response));
    
  
        // //////

console.log('history',props)
        props.propp.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  // render() {
    console.log('updatecolor',props)
if (!props.state) {return <div></div> } else return (
<div>

        <input
          type="text"
          placeholder="Code"
          defaultValue={props.state.code.hex}
          onChange={handleCodeInput}
          name="code"
        />
        <input
          type="text"
          placeholder="Color"
          defaultValue={props.state.color}
          onChange={handleColorInput}
          name="director"
        />
        {/* <input
          type="text"
          placeholder="..Add actor"
          value={props.state.movie.actor}
          onChange={handleTextInput}
          name="actor"
        /> */}
        {/* <button onClick={handleAddstars}>Add Actor to List</button> */}
        <button onClick={handleSubmitColor}>Update Color</button>
        {/* {props.state.stars.map(actor => {
          return <div>{actor}</div>;
        })} */}
   {/* <Link to={`/`}>
      <MovieList />
    </Link> */}
 
      </div>

);
  }


export default SaveColor;
