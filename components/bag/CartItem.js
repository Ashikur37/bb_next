import Link from "next/link";
import { test, activeParcent } from "../utils/helper";
function CartItem({ maxValue, cartItem, plusOne, minusOne, removeCartItem, stock, t, flag, inputItem }) {
  const deleteHandler = (id, option_id, bulk_id = null) => {
    removeCartItem(id, option_id, bulk_id);
  };
  const plusHandler = (product_id, qnt, option_id) => {
    plusOne(product_id, option_id);
  };
  const minusHandler = (product_id, qnt, option_id) => {
    if (qnt > 1) {
      minusOne(product_id, option_id);
    }
  };
  const qntInputHnadler = (e, product_id, qnt, option_id, max) => {

    if (parseInt(e.target.value) > 0 && qnt < max && parseInt(e.target.value) < max) {

      inputItem(product_id, option_id, parseInt(e.target.value));
    }
  };
  const PriceCalculate = () => {
    let bulk_id = cartItem.bulk_id;
    let discount;
    let total = cartItem.price.amount * cartItem.qnt;
    if (bulk_id && !flag) {
      discount = Math.ceil((cartItem.price.amount * cartItem.parcent) / 100) * cartItem.qnt;
      total = total - discount;

    }

    return (
      <div>
        <span>{cartItem.price.currency}{total.toFixed(2)}</span><br />
        {bulk_id && !flag && <span style={{ fontSize: 13, color: 'green' }} >Save {cartItem.parcent}% = {discount} </span>}
      </div>
    )
  }
  return (
    <>
      <div className="img_container">
        <img src={cartItem.thumb} alt="" />
      </div>
      <div className="details_container">
        <Link href={`/product/${cartItem.slug}`}>
          <a>
            {" "}
            <span className="product_name">{cartItem.name} </span>
          </a>
        </Link>
        {/* <span className="brand_name">Brand</span> */}
        <span>{cartItem.option_value}</span>
        <div>
          {stock ? (
            <span className="status">{t("in stock")}</span>
          ) : (
            <span className="status" style={{ color: "red", fontSize: 14 }}>
              {t("out of stock")}
            </span>
          )}
        </div>
        <div>
          {
            !stock && 
            <button onClick={(e) =>{
              inputItem(cartItem.product_id, cartItem.option_id, maxValue)
            }}
              style={{ fontSize: 13, padding: 5 }} className="btn btm-sm font-weight-bold my-2 btn-outline-success">
                Adjust to available stock</button>
          }
        </div>
        <div>
          <span
            style={{
              display: "inline-block",
              color: "black",
              borderRadius: "4px",
              padding: "3px 10px",
              cursor: "pointer",
              marginTop: 5,
              textTransform: 'uppercase'

            }}
            onClick={() =>
              deleteHandler(cartItem.product_id, cartItem.option_id, cartItem.bulk_id)
            }
            className="bg-warning"
          >
            delete
          </span>
        </div>
      </div>
      <div className="quantity_container">
        <button
          disabled={cartItem.qnt === 1}
          onClick={() =>
            minusHandler(cartItem.product_id, cartItem.qnt, cartItem.option_id)
          }
        >
          -
        </button>
        <input
          type="number"
          value={cartItem.qnt}
          name="qnt_input"
          className="qnt_input"
          id=""
          readOnly={cartItem.max_cart_qnt <= cartItem.qnt}
          onInput={(e) =>
            qntInputHnadler(
              e,
              cartItem.product_id,
              cartItem.qnt,
              cartItem.option_id,
              cartItem.max_cart_qnt
            )
          }
        />
        <button
          disabled={cartItem.max_cart_qnt <= cartItem.qnt}
          // disabled={cartItem.max_cart_qnt <= cartItem.qnt ? true : false}
          onClick={() =>
            plusHandler(cartItem.product_id, cartItem.qnt, cartItem.option_id)
          }
        >
          +
        </button>
      </div>
      <div className="price_container">
        <div className="md_quantity_container">
          <button
            onClick={() =>
              minusHandler(
                cartItem.product_id,
                cartItem.qnt,
                cartItem.option_id
              )
            }
          >
            -
          </button>
          <span>{cartItem.qnt}</span>
          <button
            disabled={cartItem.max_cart_qnt <= cartItem.qnt ? true : false}
            onClick={() =>
              plusHandler(cartItem.product_id, cartItem.qnt, cartItem.option_id)
            }
          >
            +
          </button>
        </div>
        <span className="md_price">
          {" "}
          {/* {cartItem.price.currency} {cartItem.price.amount * cartItem.qnt}.00 */}
          {/* <PriceCalculate /> */}
          {cartItem.price.currency} {test(cartItem, flag).toFixed(2)}
          {!flag && activeParcent(cartItem.offers, cartItem.qnt) && <span style={{ fontSize: 13, color: 'green', display: 'block' }} >Save {activeParcent(cartItem.offers, cartItem.qnt)}%  </span>}
        </span>
      </div>
    </>
  );
}

export default CartItem;
