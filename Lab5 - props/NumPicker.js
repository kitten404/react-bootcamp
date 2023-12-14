function getNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
    render() {
        const num = getNumber();
        let msg;
        if(num === 7) {
            msg = <div><h1>Congrats, you win!!!</h1><img src="https://i.kym-cdn.com/photos/images/newsfeed/000/538/716/7f5.gif"/></div>
        } else {
            msg = <p>Sorry You Lose!</p>
        }
        return (
            <div>
                <h1>Your Number is { num }</h1>
                {msg}
            </div>
        );
    }
}