import { Grid } from '@mui/material';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import WheelContainer from './components/WheelContainer';

function App() {

  return (
    <Grid container height='100vh'>

      <Grid item xs={12} alignSelf='flex-start'>
        <Header />
      </Grid>

      <WheelContainer />

      <Grid item xs={12} alignSelf='flex-end'>
        <Footer />
      </Grid>

    </Grid>
  );
}

export default App;