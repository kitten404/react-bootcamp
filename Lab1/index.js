//class Hello extends React.Component {
  //  render() {
    //    return <h1>Hello There!!!!</h1>
    //}
//}

// function components couldnt use importan features like state, lifecycle methods
//but with HOOKS now it works for functional componenents

function Hello() {
    return (
        <div>
            <h1>Hello There!!!!</h1>
            <h1>Hello There!!!!</h1>
            <h1>Hello There!!!!</h1>
            <h1>Hello There!!!!</h1>
        </div>
    );
}

ReactDOM.render(<Hello/>, document.getElementById('root'))