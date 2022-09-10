import React from 'react';
import './footer.css';
import { BsLinkedin } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

const footer = () => {
  return (
    <section className="container">
        <hr />
        <section className="heading">
            <h4>Shruti Periwal</h4>
        </section>

        <section>
              <a
                href="https://www.linkedin.com/in/shruti-periwal-11400b213/"
                target="_blank"
              >
                <BsLinkedin className="linklin" size= "18px" />
              </a>

              <a
                href="https://www.linkedin.com/in/shruti-periwal-11400b213/"
                target="_blank"
              >
                <AiTwotoneMail className="AiTwotoneMail" size= "22px" />
              </a>
            
        </section>
    </section>
  )
}

export default footer;