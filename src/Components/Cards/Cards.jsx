import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = ({selectHandler}) => {
    const [cards, setCard] = useState([]);

    useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCard(data))
    },[])

    return (
        <div className=" md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {
                cards.map(card => <Card key={card.id} card={card} selectHandler={selectHandler}></Card> )
            }
        </div>
    );
};

export default Cards;