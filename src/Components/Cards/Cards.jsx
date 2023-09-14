import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards, setCard] = useState([]);

    useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCard(data))
    },[])

    return (
        <div>
            {
                cards.map(card => <Card key={card.id} card={card}></Card> )
            }
        </div>
    );
};

export default Cards;