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


function App() {
  return (
    <div className="App">
    {/*<FunctionalGreeting/>*/}
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
    <CopyClass greeting='A'/>

    </div>
  );
}



export default App;
