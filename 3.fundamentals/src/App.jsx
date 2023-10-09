
import { Fragment } from 'react'
/* import UseStageCounter from './components/UseStageCounter'
import UseStageDeleteElementsArray from './components/UseStageDeleteElementsArray/';
import UseStageObjects  from './components/UseStageObjects';
import UseStageTimer from './components/UseStageTimer'; */
import UseEffect from './components/UseEffect';
import UseEffectFetchData from './components/UseEffectFetchData';
import UseEffectConditionalRender from './components/UseEffectConditionalRender';
import VanillaCircuitEvaluation from './components/VanillaCircuitEvaluation';
import {VanillaCircuitEvaluationLogin} from './components/VanillaCircuitEvaluationLogin'
function App() {
  return (
    <Fragment>
{/*       <UseStageCounter></UseStageCounter>
      <hr></hr>
      <UseStageDeleteElementsArray/>
      <hr></hr>
      <UseStageObjects/>
      <hr></hr>
      <UseStageTimer />
      <hr></hr> */}
      <UseEffect/>
      <hr></hr>
      <VanillaCircuitEvaluation></VanillaCircuitEvaluation>
      <hr></hr>
      <VanillaCircuitEvaluationLogin></VanillaCircuitEvaluationLogin>
      <hr></hr>
      <UseEffectConditionalRender></UseEffectConditionalRender>
      <hr></hr>
      <UseEffectFetchData></UseEffectFetchData>
    </Fragment>
  )
}

export default App
