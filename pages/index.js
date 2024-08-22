import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-4">Welcome to Our Store!</h1>
        <p className="lead">
          Discover the best products and exclusive offers we have in store for you.
        </p>
      </div>
      <div className="d-flex justify-content-center mb-4">
        <Image 
          src="/shopping.svg" 
          alt="Shopping" 
          width={500} 
          height={500} 
          className="img-fluid" 
        />
      </div>
      <div className="d-flex justify-content-center">
        <Link href="/products" className="btn btn-primary btn-lg">
            <h5>Explore Our Products</h5>
        </Link>
      </div>
      <footer className="text-center mt-5">
        <p className="text-muted">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
