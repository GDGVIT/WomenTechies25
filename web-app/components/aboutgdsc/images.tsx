import "./images.css";


interface BodyProps {
    className?: string; // Optional prop for additional class names
  }
  
function Images({ className }: BodyProps) {
    return(
        
        
            <div className={`body ${className ?? ""}`}>
                <div id="id10" >
                </div>
                <div id="id11" >
                </div>
                <div id="id12" >
                </div>
            </div>

        
        
        

    )
}


export default Images;
