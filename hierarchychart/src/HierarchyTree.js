import React from "react";
import data from "./data.json";
import "./Tree.css";

const getColour = (status) => {
  if (status === "critical") return "red";
  if (status === "warning") return "yellow";
  if (status === "normal") return "lightgreen";
};

class EmployeeNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employeeData: this.props.data };
    this.refreshData();
  }

  refreshData() {
    setInterval(() => {
      console.log("Refresh");
      this.setState = { employeeData: this.props.data };
    }, 108000);
  }

  render() {
    return (
      <div className="hierarchyTree">
        <ul>
          {this.state.employeeData.map((employee) => (
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
  }
}

export default function HierarchyTree() {
  return (
    <div className="org__chart">
      <h1 className="hierarchyTreeTitle">Sales Performance Chart</h1>
      <EmployeeNode data={data} />
    </div>
  );
}
