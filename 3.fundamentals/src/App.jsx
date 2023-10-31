
import { Fragment } from 'react'
import {
  VanillaIncompleteApiResponse,
  VanillaCircuitEvaluationLogin,
  VanillaCircuitEvaluation,
  UseEffectConditionalRender,
  UseEffectFetchData,UseEffect,
  UseStageTimer,
  UseStageObjects,
  UseStageDeleteElementsArray,
  UseStageCounter,
  Forms,
  FormsMultipleInputs,
  FormWithFormData,
  UseRef,
  CustomHooksToogle,
  CustomHookFetchData,
  ContextAPINavbar
} from './components/index'
function App() {
  return (
    <Fragment>
      <ContextAPINavbar></ContextAPINavbar>
      <hr></hr>
      <CustomHookFetchData></CustomHookFetchData>
     {/*  <CustomHooksToogle></CustomHooksToogle> */}
     
      {/* <UseRef></UseRef> */}
      <hr></hr>
      { /*        <UseStageCounter></UseStageCounter>
      <hr></hr>
      <Forms></Forms>
      <hr></hr>
      <FormsMultipleInputs></FormsMultipleInputs>
      <hr></hr>
      <FormWithFormData></FormWithFormData>
      <UseStageDeleteElementsArray/>
      <hr></hr>
      <UseStageObjects/>
      <hr></hr>
      <UseStageTimer />
      <hr></hr> 
      <UseEffect/>
      <hr></hr>
      <VanillaCircuitEvaluation></VanillaCircuitEvaluation>
      <hr></hr>
      <VanillaCircuitEvaluationLogin></VanillaCircuitEvaluationLogin>
      <hr></hr>
      <VanillaIncompleteApiResponse></VanillaIncompleteApiResponse>
      <hr></hr>
      <UseEffectConditionalRender></UseEffectConditionalRender>
      <hr></hr>
      <UseEffectFetchData></UseEffectFetchData> */}
    </Fragment>
  )
}

export default App
