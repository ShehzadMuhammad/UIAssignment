import React from "react";
import data from "./data.json";
import "./Tree.css";

const getColour = (status) => {
  if (status === "critical") return "red";
  if (status === "warning") return "yellow";
  if (status === "normal") return "lightgreen";
};

const EmployeeNode = (props) => {
  return (
    <div className="tree">
      <ul>
        {props.data.map((employee) => (
          <li>
            <div
              style={{ backgroundColor: getColour(employee.status) }}
              className="employeeBox"
            >
              <span className="employeeName">{employee.name}</span>
              <span>{employee.title}</span>
            </div>
            {/* <div className="arrowDown">Arrow Down</div> */}
            {employee.children?.length && (
              <EmployeeNode data={employee.children} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function HierarchyTree() {
  return (
    <div className="org__chart">
      <h1 className="treeTitle">Sales Performance Chart</h1>
      <EmployeeNode data={data} />
    </div>
  );
}
