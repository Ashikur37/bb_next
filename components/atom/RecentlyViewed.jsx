import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "../../redux/actions/axios";
import Loader from "./Loader";
import Product from "./Product";
function RecentlyViewed() {
  const [show, setShow] = useState(false);
  const recent_modal = React.createRef();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setcurrent] = useState(0);
  const [images] = useState([
    "https://cdn.beautyboothqa.com/media/thumbnails/4nOneS8MPFO44ImVZ5DvtOqPeb28YKfhePNnpRDv.jpeg",
    "https://cdn.beautyboothqa.com/media/thumbnails/4648bJbX48pjIw8wVXcivniF0BkZTxDcbWOLDKSD.jpeg",
    "https://cdn.beautyboothqa.com/media/thumbnails/1QwoVAGhvKTFXdXYUMuyXj0E0rSjGzBUQV9cs4IJ.jpeg",
    "https://cdn.beautyboothqa.com/media/thumbnails/6ZnukOLJREAgXkMVs9HiG3EoxFCh8sIBe3pZHnLF.jpeg",
    "https://cdn.beautyboothqa.com/media/thumbnails/0XJ9YVzJ33cXeJh2Iv4gUlaTcMkoeP2G6g1hbUj0.jpeg",
  ]);
  const [imgsrc, setImgsrc] = useState(
    "https://cdn.beautyboothqa.com/media/thumbnails/0XJ9YVzJ33cXeJh2Iv4gUlaTcMkoeP2G6g1hbUj0.jpeg"
  );

  useEffect(() => {
    setTimeout(() => {
      if (current + 1 === images.length) {
        setcurrent(0);
      } else {
        setcurrent(current + 1);
      }
      setImgsrc(images[current]);
    }, 8000);
  }, [images, current]);

  useEffect( () => {
    if (show && localStorage.getItem("recently_viewed")) {
      axios
        .get("getdata/products/recentViewed", {
          params: {
            ids: localStorage.getItem("recently_viewed").replace("[", "").replace("]", "")
          }
        })
        .then((res) => {
          setProducts(res.data);
        })
        .catch();
    } 
    if(show){
      setLoading(false);

    }
  }, [show]);

  return (
    <div className="recentView_wrapper" title="Recently Viewed">
      <div onClick={() => setShow(!show)} className="recentview">
        <img src={imgsrc} />
      </div>

      <Modal
        // className="recent__modal"
        dialogClassName="recent__modal"
        show={show}
        size="xl"
        centered
        ref={recent_modal}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton={true}>
          <h6>Recently viewed Proudcts</h6>
        </Modal.Header>
        <Modal.Body scrollable="true">
          {!loading ? (
            <div className="products_wrapper">
              {products.length > 0 ? (
                products.map((product) => (
                  <div
                    key={product.id}
                    className="recent_product_div"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <Product product={product} key={product.id} />
                  </div>
                ))
              ) : (
                  <h4>No Recently viewed Products</h4>
                )}
            </div>
          ) : (
              <div className="loader">
                <Loader />
              </div>
            )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default RecentlyViewed;
