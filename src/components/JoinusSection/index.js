import React from "react";
import "./style.scss"
function JoinusSection() {
  return (
    <section id="JoinusSection">
      <div className="sign-up-email">
        <h4 className="join-us-heading">Join our travel revolution</h4>
        <p>
          Sign up to stay in the know - hot new travel spots, how we strive to
          make the world a better place, and all sorts of surprises.
        </p>
        <div className="email-input-area">
            <input placeholder="Email" type="email"/>
            <button>Sign up</button>
        </div>
      </div>
    </section>
  );
}

export default JoinusSection;
