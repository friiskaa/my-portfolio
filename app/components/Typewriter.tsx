'use client'
import { TypeAnimation } from "react-type-animation"

const TypeWriter = () => {
    return (
        <TypeAnimation
          sequence={[
            'Student Software Engineer',
            1000,
            'Front-End Web Developer Enthusiast',
            1000,
            'Learning to Build Great User Experience',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1.25em', fontWeight:'bold', color:'#6d28d9', display: 'inline-block' }}
          repeat={Infinity}
        />
    )
}

export default TypeWriter;