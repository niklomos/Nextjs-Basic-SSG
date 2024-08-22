import Image from "next/image";

// ฟังก์ชัน getStaticPaths เพื่อกำหนดเส้นทางไดนามิก
export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products/?limit=50");
  const data = await res.json();
  const paths = data.products.map((item) => {
    return {
      params: { id: String(item.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

// ฟังก์ชัน getStaticProps เพื่อดึงข้อมูลสำหรับแต่ละหน้า
export async function getStaticProps({ params }) {
  const id = params.id;
  const res = await fetch("https://dummyjson.com/products/" + id);
  const data = await res.json();
  return {
    props: { product: data },
  };
}

// คอมโพเนนต์ ProductDetail ที่จะแสดงรายละเอียดของผลิตภัณฑ์
export default function ProductDetail({ product }) {
  return (
    <>
      <div className="container d-flex justify-content-center mt-4">
        <div className="row">
          <div className="col">
            <div className="card h-100">
              <div className="row no-gutters">
                {/* ส่วนของภาพ */}
                <div className="col-md-6 d-flex align-items-center">
                  <Image
                    src={product.thumbnail}
                    className="card-img"
                    width={300}
                    height={300}
                    alt={product.title}
                  />
                </div>
                {/* ส่วนของเนื้อหา */}
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title text-dark text-center">
                      <b>{product.title}</b>
                    </h5>
                    <div className="pt-2">
                      <h6 className="card-title text-dark">
                        <strong>Brand: </strong> {product.brand}
                      </h6>
                      <p className="card-text">
                        <strong>Detail: </strong>
                        {product.description}
                      </p>
                      <p className="card-text">
                        <strong>Price: </strong>${product.price}
                      </p>
                      <p className="card-text">
                        <strong>Warranty Information: </strong>
                        {product.warrantyInformation || "Not Available"}
                      </p>
                      <p className="card-text">
                        <strong>Shipping Information: </strong>
                        {product.shippingInformation || "Not Available"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
