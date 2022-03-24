import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/justinas-urbutis/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      {/* <div>
        <FaFacebookF />
      </div>
      <div>
        <BsInstagram />
      </div> */}
    </div>
  );
}

export default SocialMedia;
