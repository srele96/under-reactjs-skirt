// how the code looks like before it's compiled by babel
const app = `
  function App() {
    return (
      <div>
        <h1>My ReactJS App</h1>
        <p>Demo to what happens to beautiful react components that we see in our editor.</p>
      </div>
    )
  }

  ReactDOM.render(<App />, document.getElementById('root'))
`

const { code } = require("@babel/core").transform(app, {
  presets: ["@babel/preset-env", "@babel/preset-react"],
})

require("fs").writeFile("under-reactjs-skirt-result.js", code, (err) => {})
