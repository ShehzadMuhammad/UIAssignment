import React from "react";
import data from "./data.json";
import "./HierarchyTree.css";
import { animateScroll } from "react-scroll";

const getColour = (status) => {
  if (status === "critical") return "red";
  if (status === "warning") return "yellow";
  if (status === "normal") return "lightgreen";
};

class EmployeeNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employeeData: this.props.data };
    // this.scrollToBottom(); Commented out for testing purposes
    // this.scrollToTop();
    this.refreshData();
  }

  refreshData() {
    setInterval(() => {
      console.log("Refresh");
      this.setState = { employeeData: this.props.data };
    }, 108000);
  }

  scrollToBottom() {
    setInterval(() => {
      animateScroll.scrollToBottom({
        containerId: "options-holder",
      });
    }, 20000);
  }

  scrollToTop() {
    setInterval(() => {
      animateScroll.scrollToTop({
        containerId: "options-holder",
      });
    }, 40000);
  }

  render() {
    return (
      <div className="hierarchyTree">
        <ul id="treeContainer">
          {this.state.employeeData.map((employee) => (
            <li>
              <div
                style={{ backgroundColor: getColour(employee.status) }}
                className="employeeBox"
              >
                <span className="employeeName">{employee.name}</span>
                <span className="employeeTitle">{employee.title}</span>
              </div>
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
      <div className="statusBox">
        <span className="statusLabels" style={{ color: "red" }}>
          Critical
        </span>
        <span className="statusLabels" style={{ color: "yellow" }}>
          Warning
        </span>
        <span className="statusLabels" style={{ color: "green" }}>
          Normal
        </span>
      </div>
      <EmployeeNode data={data} />
    </div>
  );
}
