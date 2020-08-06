import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card'
import './DateCards.css'
import database from './firebase'

function DateCards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        const unsubscribe = database.collection('people').onSnapshot(snapshot => (
             setPeople(snapshot.docs.map(doc => doc.data()))
        ));

        return() => {
            unsubscribe();
        }

    }, []);

    return (
        <div>
            <div className="card__container">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.id}
                        preventSwipe={['up','down']}
                    >

                        <div style={{backgroundImage:`url(${person.url})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>

                ))}
            </div>
        </div>
    );
}

export default DateCards;