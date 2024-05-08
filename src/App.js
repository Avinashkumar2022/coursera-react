// import Btn from './components/Btn';
// import Promo from './components/Promo';
import Child from './components/Child';
// import NavigationBar from './components/NavigationBar';
// import Header from './components/Header';
// import Main from './components/Main';
// import ModesToggler from './components/ModesToggler';
// import Sidebar from './components/Sidebar';
import './App.css';

// function Logo(props){
//   const userPic=<img src={}
// }

function App() {
  const date=new Date();

  return (
    <div>
      {/* <Header name="Anna" color="purple" />
      <Main greet="hi"/>
      <Sidebar greet="Howdy"/>
      <Btn />  */}
      {/* <NavigationBar /> */}
      {/* <ModesToggler /> */}
      {/* <Promo /> */}
      <Child message={date.toLocaleTimeString()} />
    </div>

  )
}

export default App;
