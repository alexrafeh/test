import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
import Main from "./main"
import data from "./data"



  




  
 function App() {
    const getData = data.map(item => {
        return (
            <Nav
                
                {...item}
                
            />
        )
    })      
  return (
    
   
   <div>
       <section className="cards-list">
       {getData}
            </section>
      
  
    </div>
   
  );
}

export default App;
