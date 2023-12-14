class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Quezia" 
                    from="Darci" 
                    bangs={4}
                    img="https://images.unsplash.com/photo-1616044543567-a31e09b178ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxjeUxjZEpCMmY5NHx8ZW58MHx8fHx8"
                />
                <Hello 
                    to="Quezia" 
                />
                <Hello to="Darci" from="Quezia" bangs={10}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))