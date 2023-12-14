function getMood() {
    const moods = ['Angry', 'Hungry', 'Happy', 'Depressed', 'Quiet', 'Silly'];
    return moods[Math.floor(Math.random() * moods.length)];
}
class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <img src="https://images.unsplash.com/photo-1616044543567-a31e09b178ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxjeUxjZEpCMmY5NHx8ZW58MHx8fHx8"/>
                <h1>My name is Quezia</h1>
                <p>My current mood is <b>{ getMood() }</b></p>
            </div>
        );
    }
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root'));