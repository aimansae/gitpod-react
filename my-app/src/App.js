import './App.css';
import FunctionalGreeting from './components/FunctionalGreetings';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StetefulGreetingWithPrevState from './components/StetefulGreetingWithPrevState';
import EventsClass from './components/EventsClass';
import EventsFuncional from './components/EventsFuncional';
import EventsBinding from './components/EventsBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodPropsParent from './components/MethodPropsParent';
import MethodPropsChild from './components/MethodPropsChild';
import CopyClass from './components/CopyClass';
import RenderList from './components/RenderList';
import DidMountComponent from './components/DidMountComponent';
import LifeCycleCDU from './components/LifeCycleCDU';
import ControlledForm from './components/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm'
import SearchBar1 from './components/SearchBar1'
import ControledFormHook from './components/ControledFormHook';
import UseStateWithArrays from './components/UseStateWithArrays'
import ControlledFormHooks from './components/ControlledFormHooks';
import Colorize from './components/Colorize'

function App() {
  return (
    <div className="App">
    <FunctionalGreeting/>
    {/*<FunctionalGreetingWithProps greeting="Nice to meet you" name='mike' age='15'/>*/}
    {/*<StatefulGreetingWithCallback greetings= 'Stateful component' name='Alex' />*/}
    {/*<StatefulGreetingWithCallback greetings= 'Stateful component' name='Alex' />*/}
    {/*<StetefulGreetingWithPrevState greetings= 'Stateful component' name='Alex'/>*/}
    {/*<EventsClass/>*/}
    {/*<EventsFuncional/>*/}
    {/*<EventsBinding/>*/}
    {/*<ConditionalRenderingFunctional connected={false}/>*/}
    {/*<ConditionalRenderingClass/>*/}
    {/*<NestingComponents/>*/}
    {/*<MethodPropsParent/>*/}
    {/*<CopyClass greeting='A'/>*/}
    {/*<RenderList/>*/}
    {/*<LifeCycleCDU />*/}
    {/*<ControlledForm/>*/}
    {/*<UncontrolledForm/>*/}
    {/*<SearchBar1 />*/}
    {/*<ControledFormHook/>*/}
    {/*<UseStateWithArrays />*/}
    {/*<ControlledFormHooks />*/}
    <Colorize />


    
    </div>
  );
}



export default App;
