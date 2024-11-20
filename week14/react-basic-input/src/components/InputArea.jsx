/* eslint-disable react/prop-types */
import './InputArea.css';

export function InputArea(props) {
  return (
    <div className="inputWrapper">
        <input type="text" value={props.text} onChange={(e) => {props.handleChangeText(e.target.value)}} />
        <select onChange={(e) => {props.handleChangeColor(e.target.value)}} value={props.color}>
            <option value="#ff0000">Red</option>
            <option value="#00ff00">Green</option>
            <option value="#0000ff">Blue</option>
        </select>
    </div>
  )
}