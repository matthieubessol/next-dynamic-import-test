import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

const SignInModal = dynamic(() => import("../sign-in-modal"));

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header>
      <p>Content of my header</p>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/index-bis">Second page</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
      <button onClick={() => setShow(true)}>Open modal</button>
      {show ? <SignInModal /> : null}
    </header>
  );
};

export default Header;
