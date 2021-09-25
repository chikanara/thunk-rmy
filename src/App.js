
import './App.css';
import { Route ,BrowserRouter } from 'react-router-dom'
import UserList from './components/UserList';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
         <Nav/>
        <Route path="/" component={UserList} exact/>
        <Route path="/users/:id" component={Detail} exact />
        
     </BrowserRouter>
    </div>
  );
}

export default App;
