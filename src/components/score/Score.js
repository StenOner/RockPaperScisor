import { useSelector } from 'react-redux'
import Card from '../UI/Card'

const Score = () => {
    const score = useSelector(state => state.score.points)
    return (
        <Card>
            <div className="score-text">
                <span>ROCK</span>
                <span>PAPER</span>
                <span>SCISSORS</span>
            </div>
            <div className="card-column">
                <span>SCORE</span>
                <span className="big-text">{score}</span>
            </div>
        </Card>
    )
}

export default Score