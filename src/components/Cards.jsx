import React, {useState, useEffect} from 'react';
import Card from './Card';

function Cards() {
    const [cards, setCards] = useState([])

    // fetch the data from server
    const fetchData = () => {
        fetch('http://localhost:3001/cards')
        .then(res => res.json())
        .then(data => {
            setCards(data);
        })
        .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <>
    {
      cards && cards.length>0 &&
      cards.map(card=><Card key={card._id} card={card}/>)
    } </>
  );
}

export default Cards