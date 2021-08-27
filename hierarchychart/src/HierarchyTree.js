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
    <>
      {props.data.map((employee) => (
        <ul className="tree">
          <div
            style={{ backgroundColor: getColour(employee.status) }}
            className="employeeBox"
          >
            <span className="employeeName">{employee.name}</span>
            <span>{employee.title}</span>
          </div>
          <li>
            {employee.children?.length && (
              <EmployeeNode data={employee.children} />
            )}
          </li>
        </ul>
      ))}
    </>
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
