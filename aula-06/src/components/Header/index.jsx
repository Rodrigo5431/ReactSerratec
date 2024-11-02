import React from "react";
import back from "../../assets/back.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <Link to={"/"}>
          <img src={back} alt="" style={{ width: "50px" }} />
        </Link>
      </div>
    </header>
  );
}
