import Main from './pages/Main';
import { BookProvider} from './context/BookContext'
import { FavoriteProvider } from './context/FavoriteContext';

import GlobalStyle from './styles/global';


function App() {
  return (
    <FavoriteProvider>
      <BookProvider>
        <GlobalStyle/>
        <Main/>
      </BookProvider> 
    </FavoriteProvider>
  );
}

export default App;
