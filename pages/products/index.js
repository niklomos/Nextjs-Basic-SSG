import styles from "@/styles/Products.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export async function getStaticProps() {
    const res  = await fetch('https://dummyjson.com/products?limit=50'); // ดึงข้อมูลทั้งหมด
    const data = await res.json();
    return {
        props: { products: data.products },
    };
}

export default function Index({ products }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // คำนวณข้อมูลที่จะถูกแสดงในหน้าปัจจุบัน
    const currentItems = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    {currentItems.map((item) => (
                        <div key={item.id} className="col-md-4 mb-4">
                            <div className={`card h-100`}>
                                <Link href={'/products/' + item.id} className="text-decoration-none">
                                    <Image
                                        src={item.thumbnail}
                                        className="card-img-top"
                                        width={300}
                                        height={200}
                                        alt={item.title}
                                    />
                                    <div className={`card-body text-center ${styles.card2}`}>
                                        <h5 className="card-title text-dark">{item.title}</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <nav>
                    <ul className="pagination justify-content-center">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <li key={i + 1} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                                <button className="page-link" onClick={() => handleClick(i + 1)}>
                                    {i + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
}
