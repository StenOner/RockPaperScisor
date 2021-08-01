import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Item from '../components/UI/Item'

const Resultado = () => {
    const history = useHistory()
    const allChoices = useSelector(state => state.score.gamesChoices)
    const [lastChoice] = allChoices.slice(-1)
    const allResults = useSelector(state => state.score.gamesResults)
    const [lastResult] = allResults.slice(-1)

    const redirectHome = () => {
        history.push('/')
    }

    return (
        <div className='resultado'>
            <div className='flex-column text-center'>
                <span>YOU PICKED</span>
                <Item item={lastChoice?.playerChoice.name} cursor='default' className={lastResult?.includes('WIN') ? 'winner' : ''} />
            </div>
            <div className='flex-column justify-center text-center'>
                <span className='big-text'>{lastResult || 'UNKNOWN'}</span>
                <button className='btn-custom' onClick={redirectHome}>PLAY AGAIN</button>
            </div>
            <div className='flex-column text-center'>
                <span>THE HOUSE PICKED</span>
                <Item item={lastChoice?.homeChoice.name} cursor='default' className={lastResult?.includes('LOSE') ? 'winner' : ''} />
            </div>
        </div>
    )
}

export default Resultado
