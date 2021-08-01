import { Redirect, Route, Switch } from 'react-router-dom'
import RockPaperScissors from './components/rock-paper-scisor/RockPaperScissors'
import Resultado from './pages/Resultado'
import Score from './components/score/Score'

const App = () => {
  return (
    <main className="container">
      <Score />
      <Switch>
        <Route path='/' exact>
          <RockPaperScissors />
        </Route>
        <Route path='/resultado'>
          <Resultado />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </main>
  )
}

export default App
