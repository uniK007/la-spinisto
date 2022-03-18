import { Box } from '@mui/material';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import WheelContainer from './components/WheelContainer';

function App() {

  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <Header />
        <WheelContainer />
        <Footer />
    </Box>
  );
}

export default App;