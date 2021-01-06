import React, {useState, useEffect} from 'react'
import images from  '../images'
import Card from './Card'

const Gamepage = () => {
    const imgs = images
    const [cards, setCards] = useState(imgs.map(image => {
        return  {
            isSelected: false,
            "src": image
        }
    }))
    const [bestScore, setBestScore] = useState(0)
    const [score, setScore] = useState(0)
    const MAX_SCORE = cards.length
    console.log(MAX_SCORE)

    useEffect(() => {
        function updateBestScore(currentScore) {
            (bestScore < currentScore) &&  setBestScore(currentScore)
            alertWinner(currentScore)
        }
        
        function alertWinner(currentScore) {
            if(currentScore >= MAX_SCORE) {
                setScore(0)
            }
        }
        updateBestScore(score)
    }, [bestScore, score, MAX_SCORE])

    const checkCard = (card) => {
        const selectedCard = cards.filter(element => element === card)[0]
        if(selectedCard.isSelected) {
            setScore(0)
            updateCards()

        }
        else {
            setScore(prevState=> prevState + 1)
        }
        selectedCard.isSelected = true
    }
    
    const shuffle = (array) => {
        for(let i = array.length-1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array

    }

    const  updateCards = () => {
        setCards(prevState => prevState.map(item => {item.isSelected = false; return item }))
    }
    // [...Array] is equivalent to Array.Slice
    const display = cards.map((card, i) => <Card key={`card-${i}`} value={card} onClick={() => {checkCard(card); setCards(prevState => shuffle([...prevState]))}} />)
    return (
        <div className="container">
            <div>
                <h2>Best Score: {bestScore}</h2>
                <h2>Score: {score}</h2>
            </div>
            <div className="card-group">
                {display}
            </div>
        </div>
    )
}
export default Gamepage