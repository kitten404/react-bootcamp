class App extends React.Component {
    render() {
        return (
            <div>
                <Friend 
                    name="Darci" 
                    hobbies={["church", "studying", "watching TV", "Take care of fifi"]}
                />
                <Friend 
                    name="Quezia" 
                    hobbies={["working", "studying", "Jiu-Jitsu", "Take care of fifi"]}
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))