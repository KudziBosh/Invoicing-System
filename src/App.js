import Header from "./components/Header";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";


function App() {
  const handlePrint = () =>{
    window.print()
  }
  return (
    <>
    <main>
      {/*Header */}
       <Header/>
          {/* End of Header */} 
{/*Your Details */}
      <MainDetails/>
{/*End of your Details */}     

 {/*Client Details*/}
    <ClientDetails/>
 {/*End Of Client Details*/}

 
 {/*Dates*/}
    <Dates/>
   {/*End of Dates*/}


    {/*Table*/}
   
    {/*End of Table*/}

    {/*Notes*/}
    <Notes/>
 
 {/*Footer*/}
<Footer/>
    </main>
    
      
    </>
  );
}

export default App;
