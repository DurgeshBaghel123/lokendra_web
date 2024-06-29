import React from 'react'
import './AutoType.css'
import { Typewriter, Cursor } from "react-simple-typewriter";

function AutoType() {
  return (
    <h6 className="auto-text">
          The best
          <span >
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[" online learning platform.", " online arduino-uno platform.", " online razberry-pi platform."]}
              loop={0}
              typeSpeed={50}
              deleteSpeed={50}
              
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </span>
        </h6>
  )
}

export default AutoType
