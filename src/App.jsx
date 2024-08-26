import { BrowserRouter } from "react-router-dom";
import{About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer} from './components';


const App=()=> {
  

  return (
    <>
   <BrowserRouter>
   <div className="realtive z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar/>
      <Hero/>
      
    </div>
    <About/>
    <Experience/>
    <Tech/>
    <Works/>
    <Feedbacks/>
    <div className="relative z-0">
      <Contact/>
      <StarsCanvas/>
      <Footer/>
    </div>
   </div>
   </BrowserRouter>
    </>
  )
}

export default App

// import { BrowserRouter } from "react-router-dom";
// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from './components';

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <div className="relative z-0 bg-primary">
//           {/* StarsCanvas as the background for the entire app */}
//           <StarsCanvas />
          
//           {/* Main content */}
//           <div className="z-10">
//             <Navbar />
//           </div>
//             <Hero />
//           <About />
//           <Experience />
//           <Tech />
//           <Works />
//           <Feedbacks />
//           <div className="relative z-10">
//             <Contact />
//             <Footer />
//           </div>
//         </div>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App;
