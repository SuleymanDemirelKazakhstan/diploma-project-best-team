import Assistant from "./Components/Assistent";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AssistantPage from "./pages/BeAssistant";
import CourseCard from "./Components/CourseCard";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <>
      <Switch>
        <Route path='/Стать ассистентом' component={AssistantPage}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/login' component={Login}/>
        <Route path='/assistant' component={Assistant}/>
        <Route path='/' component={Home}/>
      </Switch>
      {/* <Header />
      <Nav />
      <Blog />
      <Mobile />
      <Footer />
      <SignUp />
      <CourseCard />
      <Assistant /> */}
    </>
  );
}

export default App;
