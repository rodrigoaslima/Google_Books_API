import Main from './pages/Main';
import { BookProvider} from './context/BookContext'


import GlobalStyle from './styles/global';

function App() {
  return (
    <BookProvider> 
      <GlobalStyle/>
      <Main/>
    </BookProvider>
  );
}

export default App;
