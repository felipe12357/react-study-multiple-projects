
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
  ContextAPINavbar,
  ContextAPIGlobalExample,
  UseReducerBasics,
  ContextAPIGlobalDummyTestComponent,
  MemoPerformance,
  Lazyloading
} from './components/index'
import { useState } from 'react'
import './App.css';
function App() {
  const [currentView,setCurrentView] = useState(0);

  return (
      <main className='app-main'> 
        <div className='app-menu'>
            <div className="app-element" onClick={()=>setCurrentView('UseStageCounter')}>UseStageCounter</div>
            <div className="app-element" onClick={()=>setCurrentView('UseStageObjects')}>UseStageObjects</div>
            <div className="app-element" onClick={()=>setCurrentView('UseStageDeleteElementsArray')}>UseStageDeleteElementsArray</div>
            <div className="app-element" onClick={()=>setCurrentView('UseStageTimer')}>UseStageTimer</div>
            <hr></hr>
            <div className="app-element" onClick={()=>setCurrentView('UseEffect')}>UseEffect</div>
            <div className="app-element" onClick={()=>setCurrentView('UseEffectConditionalRender')}>UseEffectConditionalRender</div>
            <div className="app-element" onClick={()=>setCurrentView('UseEffectFetchData')}>UseEffectFetchData</div>
            <hr></hr>
            <div className="app-element" onClick={()=>setCurrentView('CustomHookFetchData')}>CustomHookFetchData</div>
            <div className="app-element" onClick={()=>setCurrentView('CustomHooksToogle')}>CustomHooksToogle</div>
            <hr></hr>
            <div className="app-element" onClick={()=>setCurrentView('UseRef')}>UseRef</div>
            <hr></hr>
            <div className="app-element" onClick={()=>setCurrentView('UseReducerBasics')}>UseReducer</div>
            <hr></hr>
            <div className="app-element" onClick={()=>setCurrentView('ContextAPIGlobalExample')}>ContextAPIGlobalExample</div>
            <div className="app-element" onClick={()=>setCurrentView('ContextAPINavbar')}>ContextAPINavbar</div>
            <hr></hr>
            <div className="app-element" onClick={()=>setCurrentView('Forms')}>Forms</div>
            <div className="app-element" onClick={()=>setCurrentView('FormsMultipleInputs')}>FormsMultipleInputs</div>
            <div className="app-element" onClick={()=>setCurrentView('FormWithFormData')}>FormWithFormData</div>
            <hr></hr>
            <div className="app-element" onClick={()=>setCurrentView('VanillaIncompleteApiResponse')}>VanillaIncompleteApiResponse</div>
            <div className="app-element" onClick={()=>setCurrentView('VanillaCircuitEvaluation')}>VanillaCircuitEvaluation</div>
            <div className="app-element" onClick={()=>setCurrentView('VanillaCircuitEvaluationLogin')}>VanillaCircuitEvaluationLogin</div>
            <div className="app-element" onClick={()=>setCurrentView('Performance')}>Performance - memo</div>
            <div className="app-element" onClick={()=>setCurrentView('Lazy Loading')}>Lazy Loading</div>
        </div>
        <div className='app-container'>
            {currentView ==='UseStageCounter' && <UseStageCounter></UseStageCounter>}
            {currentView ==='UseStageObjects' && <UseStageObjects></UseStageObjects> }
            {currentView ==='UseStageDeleteElementsArray' && <UseStageDeleteElementsArray></UseStageDeleteElementsArray> }
            {currentView ==='UseStageTimer' && <UseStageTimer></UseStageTimer> }

            {currentView ==='UseEffect' && <UseEffect></UseEffect>}
            {currentView ==='UseEffectConditionalRender' && <UseEffectConditionalRender></UseEffectConditionalRender>}
            {currentView ==='UseEffectFetchData' && <UseEffectFetchData></UseEffectFetchData>}

            {currentView ==='CustomHookFetchData' && <CustomHookFetchData></CustomHookFetchData>}
            {currentView ==='CustomHooksToogle' && <CustomHooksToogle></CustomHooksToogle>}

            {currentView ==='UseRef' && <UseRef></UseRef>}

            {currentView ==='UseReducerBasics' && <UseReducerBasics></UseReducerBasics>}

            {currentView ==='ContextAPINavbar' && <ContextAPINavbar></ContextAPINavbar>}
            {currentView ==='ContextAPIGlobalExample' &&<ContextAPIGlobalExample>
                  <div>
                   Context API Global Example
                    <ContextAPIGlobalDummyTestComponent></ContextAPIGlobalDummyTestComponent>
                  </div>
                </ContextAPIGlobalExample>}

            {currentView ==='Forms' && <Forms></Forms>}
            {currentView ==='FormsMultipleInputs' && <FormsMultipleInputs></FormsMultipleInputs> }
            {currentView ==='FormWithFormData' && <FormWithFormData></FormWithFormData> }

            {currentView ==='VanillaIncompleteApiResponse' && <VanillaIncompleteApiResponse></VanillaIncompleteApiResponse>}
            {currentView ==='VanillaCircuitEvaluation' && <VanillaCircuitEvaluation></VanillaCircuitEvaluation> }
            {currentView ==='VanillaCircuitEvaluationLogin' && <VanillaCircuitEvaluationLogin></VanillaCircuitEvaluationLogin>}
            {currentView ==='Performance' && <MemoPerformance></MemoPerformance> }
            {currentView ==='Lazy Loading' && <Lazyloading></Lazyloading> }
        </div>
      </main>         
  )
}

export default App
