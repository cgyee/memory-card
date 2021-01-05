import React, {useState} from 'react'
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
    console.log(cards)
    // const [bestScore, setBestScore] = useState(0)
    // const [score, setScore] = useState(0)

    /* useEffect(() => {
        setCards(prevState => {
            const imgs = images.map(image => {
                return  {
                    isSelected: false,
                    src: image
                }
            })
            return prevState.concat(imgs)
        })  
        
    }, []) */

    const shuffle = () => {
        setCards(prevState => {
            console.log(":shuffle", prevState)

            for(let i = prevState.length-1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i+1));
                [prevState[i], prevState[j]] = [prevState[j], prevState[i]]
                console.log("here", prevState[i], prevState[j])

            }
            return prevState
        })

    }
    const display = cards.map((card, i) => <Card key={`card-${i}`} value={card} onClick={shuffle} />)
    return (
        <div className="container">
            <div className="card-group">
                {display}
            </div>
        </div>
    )
}
export default Gamepage