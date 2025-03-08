import "./Body.css";


interface BodyProps {
    className?: string; // Optional prop for additional class names
  }
  
function Body({ className }: BodyProps) {
    return(
        <>
        <div className={`body ${className ?? ""}`}>
            <span id="id1">
            Fueled by <em>curiosity </em>
             and a bit of chaos, 
              </span > we are a 
            <span id="id2"> community of</span>
             <span id="id3"><em> coders </em></span>
               who love to push limits,
               <span id="id4"> designers who </span>
               <span id="id5">
             <em> bring ideas to life, </em></span>
              and 
              <span id="id6"> managers who turn </span> <span id="id7"><em>vision into reality.</em></span>
<br/><br/>
<span id="id8">
Through hackathons, sprints,
 and late-night builds,</span><span id="id9"> <em>we build crazy things that matter.</em></span>
        </div>

        
        


        </>
    )
}


export default Body;
