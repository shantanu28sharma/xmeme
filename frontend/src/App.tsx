import './App.css';
import List from './components/list/list';
import Header from './components/header/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <List/>
      <Footer/>
    </div>
  );
}

export default App;