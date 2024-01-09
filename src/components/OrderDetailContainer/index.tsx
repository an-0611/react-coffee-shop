import React from "react";
import styled from "styled-components";
import { OrderDetailContainerType } from "../../types";

const OrderDetailContainer: React.FC<OrderDetailContainerType> = ({
  itemsOrdered,
  totalPrice,
  priceUnit,
}) => (
  <StyledOrderDetailContainer>
    <div className="order-detail-title">Your bill</div>
    <span id="count">Items ordered：{itemsOrdered}</span>
    <span id="price">
      Total Price： {totalPrice} {priceUnit}
    </span>
  </StyledOrderDetailContainer>
);

const StyledOrderDetailContainer = styled.div.attrs({
  className: "order-detail-container",
})`
  width: 180px;
  line-height: 1;
  padding: 15px;
  border: 2px solid #dcdce0;
  border-radius: 5px;
  box-shadow: 0 0 10px #dcdce0;
  display: inline-block;
  margin-left: 100px;
  vertical-align: middle;
  .order-detail-title {
    font-size: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
  }

  #count,
  #price {
    display: block;
    padding: 0px 0 5px;
  }

  #count {
    padding-top: 10px;
  }
`;

export default OrderDetailContainer;
