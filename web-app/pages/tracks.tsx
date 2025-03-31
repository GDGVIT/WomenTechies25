import React from "react"
import Track1 from "../components/tracks/Track1"
import Track2 from "../components/tracks/Track2"
import Track3 from "../components/tracks/Track3"
import Track4 from "../components/tracks/Track4"
import Track5 from "../components/tracks/Track5"
import Track6 from "../components/tracks/Track6"
import HighlightText from "../components/HighlightText";

export default function Tracks() {
  return (
    <div className="custom-cursor bg-background">
    
        <Track1 />
     
        <Track2 />
        <Track3 />
        <Track4 />
        <Track5 />
        <Track6 />
    
    </div>
  )
}
