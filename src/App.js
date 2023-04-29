import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';

import CreateNewsUpdate from './Components/CreateNewsUpdate'
import NewsUpdateTable from './Components/NewsUpdateTable'
import NewsUpdates from './Components/NewsUpdates'
function App() {
  return (

    
      
    

    <div className="App">
    {/* <CreateNewsUpdate />
    <NewsUpdateTable/> */}
    <BrowserRouter>
        <Routes>
        <Route path="/"  element={<CreateNewsUpdate/>} />
        <Route  path="/get" element={<NewsUpdates/>} />
        </Routes>
    </BrowserRouter>
       
  </div>
  );
}

export default App;
