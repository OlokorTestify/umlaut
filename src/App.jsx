import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Footer from './Components/Footer'
 import {
   QueryClient,
   QueryClientProvider,
 } from 'react-query'
import './App.scss';

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Body />
        <Footer />
      </QueryClientProvider>
        
    </>
  );
}

export default App;
