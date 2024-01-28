import React from "react";

export default function CheckBox(props) {
  return (
    <div>
      <div className="flex items-center">
        <input
          type="checkbox"
          name={props.name}
          onChange={props.isTrue}
          value={props.val}
          className=" rounded-sm border-[#94a3b8] border-2 "
        />
        <span>{props.checkName}</span>
      </div>
    </div>
  );
}

function Radio(props) {
  return (
    <div className="flex items-center justify-between gap-1">
      <p>{props.rBtn}</p>
      <input
        type="radio"
        name={props.name}
        id={props.id}
        onChange={props.isTrue}
        className=" border-[#94a3b8] border-2 "
      />
    </div>
  );
}
export { Radio };
