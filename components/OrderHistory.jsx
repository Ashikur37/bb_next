import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { isMobile } from "react-device-detect";

function OrderHistory(props) {
  const { styles } = props;
  const [active, setActive] = useState();
  const [orders, setOrders] = useState(props.orders);
  useEffect(() => {
    setOrders(props.orders);
  }, [props.lang]);
  return (
    <div className={`${styles.order_history} order_history_page`}>
      <div className={styles.history_title_container}>
        <span className={styles.history_title}>{props.t("Order History")}</span>
        {/* <select>
          <option>TODAY</option>
          <option>THIS WEEK</option>
          <option>THIS MONTHS</option>
          <option>THIS YEAR</option>
        </select> */}
      </div>

      {/* <div className="table_heading">
        <span>OrderId</span>
        <span> Date</span>
        <span> Status</span>
        <span> Amount</span>
        <span>Expand</span>
      </div> */}
      <Accordion
        allowZeroExpanded={true}
        onChange={(itemUuids) => {
          // console.log(itemUuids[0]);
          if (itemUuids[0]) setActive(itemUuids[0]);
          else setActive(null);
        }}
      >
        {orders.map((order) => (
          <AccordionItem key={order.id} uuid={order.id}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={styles.order_heading}>
                  <span> {order.id}</span>
                  <span>{order.created_at}</span>
                  <span>{order.status}</span>
                  <span>{order.total.formatted}</span>
                  <span className={styles.sts}></span>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <table className={isMobile ? "table table-responsive" : "table"}>
                <thead>
                  <tr>
                    <th> {props.t("product id")}</th>
                    <th> {props.t("name")}</th>
                    <th> {props.t("Price")}</th>
                    <th> {props.t("Quantity")}</th>
                    <th> {props.t("Amount")}</th>
                  </tr>
                </thead>
                <tbody>
                  {order.only_products.map((details, index) => (
                    <tr key={index}>
                      <td>{details.product_id}</td>
                      <td>{details.product.name}</td>
                      <td>{details.unit_price.formatted}</td>
                      <td>{details.qty}</td>
                      <td>{details.line_total.formatted}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default OrderHistory;
