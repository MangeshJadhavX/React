const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement(
    "div",
    {
      id: "children",
    },
    [
      React.createElement("div", { id: "children" }, [
        React.createElement("h1", { id: "headingOne" }, "headingOne"),
        React.createElement("h2", { id: "headingTwo" }, "headingTwo"),
      ]),
      React.createElement("div", { id: "children" }, [
        React.createElement("h1", { id: "headingOne" }, "headingOne"),
        React.createElement("h2", { id: "headingTwo" }, "headingTwo"),
      ]),
    ]
  )
);

//!this is vary complex code for creating element in react & this problem solve using JAX

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
