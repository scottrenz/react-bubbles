import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor)
  const refresh = () => {
    setEditing(false);
    setAdding(false);
  };
  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };
  const addColor = () => {
    setAdding(true);
    // setColorToEdit(color);
  };
  let colorID = colorToEdit.id
const tempColors = []
  function updatecolor (element,ix,arr) {
    if(colorID === arr[ix].id)
    {
      tempColors.push(colorToEdit)
    }
    else
    {
    tempColors.push(arr[ix])  
    }
      };
      function removecolor (element,ix,arr) {
        if(colorID === arr[ix].id)
        {
        }
        else
        {
        tempColors.push(arr[ix])  
        }
          };
  
          const saveEdit = e => {
            e.preventDefault();
            // Make a put request to save your updated color
            // think about where will you get the id from...
            // where is is saved right now?
            // const saveColor =
             axiosWithAuth().put(`http://localhost:5000/api/colors/${colorID}`, colorToEdit)
            .then(response => {
            colors.map(updatecolor)
        updateColors(tempColors)
          })
            .catch(err => {
              console.log(err);
            });
        };
  
        const postColor = e => {
          e.preventDefault();
          // Make a put request to save your updated color
          // think about where will you get the id from...
          // where is is saved right now?
          // const saveColor =
           axiosWithAuth().post(`http://localhost:5000/api/colors/`, colorToEdit)
          .then(response => {
            // colors.map(updatecolor)
      updateColors(response.data)
        })
          .catch(err => {
            console.log(err);
          });
      };
              
  const deleteColor = color => {
    // make a delete request to delete this color
    setEditing(false)
    // const deleteColor =
     axiosWithAuth().delete(`http://localhost:5000/api/colors/${colorID}`)
    .then(response => {
      colors.map(removecolor)
      updateColors(tempColors)
          })
    .catch(err => {
      console.log(err);
    });
  };

  return (
    <div className="colors-wrap">
      <p>colors (click color to edit</p>
      <p>click "X" twice to delete</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={() => deleteColor(color)}>
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      <span>
              <button  className="post-button" onClick={() => addColor()}>
                Add Color
              </button>{" "}
              {/* {color.color} */}
            </span>
            <span>
              <button  className="post-button" onClick={() => refresh()}>
                Remove Entry Boxes
              </button>{" "}
              {/* {color.color} */}
            </span>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
      {adding && (
        <form onSubmit={postColor}>
          <legend>add color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setAdding(false)}>cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ColorList;
