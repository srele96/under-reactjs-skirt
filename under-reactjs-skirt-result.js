"use strict"

function App() {
  return /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement("h1", null, "My ReactJS App"),
    /*#__PURE__*/ React.createElement(
      "p",
      null,
      "Demo to what happens to beautiful react components that we see in our editor."
    )
  )
}

ReactDOM.render(
  /*#__PURE__*/ React.createElement(App, null),
  document.getElementById("root")
)
