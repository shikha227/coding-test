import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './component/Home'
import Grid, { GridSpacing,Container } from '@material-ui/core/Grid';

function App() {
  return (
    <Grid Container  >
      <Header/>
     <Home/>
    
     
    </Grid>
  );
}

export default App;
