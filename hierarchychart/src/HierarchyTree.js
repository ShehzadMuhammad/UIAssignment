import React from "react";
import data from "./data.json";

export default function HierarchyTree() {
  console.log(data);

  return (
    <div>
      <div className="tree">
        {data.map((employee) => {
          return (
            <li key={employee.key} className="Employee">
              <h1>{employee.name}</h1>
              <h2>{employee.title}</h2>
              <span>{employee.status}</span>
              {/* <div>{employee.children}</div> */}
            </li>
          );
        })}
      </div>
    </div>
  );
}
