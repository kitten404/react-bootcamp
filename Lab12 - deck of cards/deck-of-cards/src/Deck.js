import React, {Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import Card from "./Card";
const API_BASE_URL="https://www.deckofcardsapi.com/api/deck";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {deck: null, drawn: []}
        this.getCard = this.getCard.bind(this);
    }

    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
        this.setState({ deck: deck.data });
    }
    async getCard() {
        let id = this.state.deck.deck_id;
        try {
            let cardUrl = `${API_BASE_URL}/${id}/draw`;
            let cardRes = await axios.get(cardUrl);
            if(!cardRes.data.success) {
                throw new Error("no card remaining!");
            }
            let card = cardRes.data.cards[0];
            this.setState(st => ({
                drawn: [
                    ...st.drawn,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.suit} of ${card.value}`
                    }
                ]
            }));
            //console.log(this.state.drawn);
        } catch(err) {
            alert(err);
        }
    }
    render() {
        const cards = this.state.drawn.map(c => {
            return <Card key={uuidv4()} image={c.image}/>
        })
        return (
            <div>
                <h1>Card Dealer</h1>
                <button onClick={this.getCard}>Get Card!</button>
                {cards}
            </div>
        )
    }
}

export default Deck