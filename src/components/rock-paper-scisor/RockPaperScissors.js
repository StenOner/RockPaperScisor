import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { scoreActions } from '../../store/score'
import Item from '../UI/Item'

const DUMMY = [
    { name: 'ROCK', value: 0 },
    { name: 'PAPER', value: 1 },
    { name: 'SCISSORS', value: 2 }
]

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const RockPaperScissors = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const onPickHandler = (item) => {
        const [item1] = DUMMY.filter(x => x.name === item.toUpperCase())
        const item2 = randomPick()
        decideWinner(item1, item2)
    }
    const decideWinner = (item1, item2) => {
        let result = 'YOU WIN!'
        switch (item1.name) {
            case DUMMY[0].name:
                if (item2.name === DUMMY[0].name) result = 'TIE!'
                if (item2.name === DUMMY[1].name) result = 'YOU LOSE!'
                if (item2.name === DUMMY[2].name) result = 'YOU WIN!'
                break
            case DUMMY[1].name:
                if (item2.name === DUMMY[0].name) result = 'YOU WIN!'
                if (item2.name === DUMMY[1].name) result = 'TIE!'
                if (item2.name === DUMMY[2].name) result = 'YOU LOSE!'
                break
            case DUMMY[2].name:
                if (item2.name === DUMMY[0].name) result = 'YOU LOSE!'
                if (item2.name === DUMMY[1].name) result = 'YOU WIN!'
                if (item2.name === DUMMY[2].name) result = 'TIE!'
                break
            default:
                result = 'UNKOWN RESULT'
                break
        }
        if (result.includes('WIN')) dispatch(scoreActions.win({ result, choice: { 'playerChoice': item1, 'homeChoice': item2 } }))
        else dispatch(scoreActions.lose({ result, choice: { 'playerChoice': item1, 'homeChoice': item2 } }))
        history.push('/resultado')
    }
    const randomPick = () => {
        const index = getRandomInt(DUMMY.length)
        return DUMMY[index]
    }

    return (
        <div className="triangle">
            {DUMMY.map(({ value, name }, index) => (
                index === DUMMY.length - 1 ? <div key='01' className="line-break"><Item key={value} item={name} onPick={onPickHandler} /></div> :
                    <Item key={value} item={name} onPick={onPickHandler} />
            ))
            }
        </div>
    )
}

export default RockPaperScissors