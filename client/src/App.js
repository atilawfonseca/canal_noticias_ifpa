import TelaLogin from './pages/initial/TelaLogin';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageAdmin from './pages/admin/PageAdmin';
import Noticias from './pages/noticias/Noticias';
import NovoCadastro from './pages/novaconta/NovoCadastro';



function App() {

  return (
      <Router>
      
      
      <Routes>
        <Route exact path='/' element={<TelaLogin />} handle />
        <Route path='/admin' element={<PageAdmin />} />
        <Route path= '/noticias' element= {<Noticias />} />
        <Route path= '/novocadastro' element={<NovoCadastro />} />
      </Routes>
      

      
      
      </Router>
   
  );
}

export default App;
