import React, { Component } from "react";
import Link from "next/link";
import "../../styles/main.scss";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <p className="customclass">Iampelement</p>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/portfolios">
          <a>portfolios</a>
        </Link>
        <Link href="/cv">
          <a>cv</a>
        </Link>
        <Link href="/blogs">
          <a>Blogs</a>
        </Link>
      </React.Fragment>
    );
  }
}
export default Header;
