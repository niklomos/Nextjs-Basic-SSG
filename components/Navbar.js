import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image src="/logo.png" width={50} height={50} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${router.pathname === "/" ? "active  " : ""}`}>
                <b>Home</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className={`nav-link ${router.pathname === "/about" ? "active" : ""}`}>
              <b>About</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/products" className={`nav-link ${router.pathname === "/products" ? "active" : ""}`}>
              <b>Product</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
