import React from "react";
import styled from "styled-components";

const OrderDetailContainer: React.FC = ({}) => (
  <StyledOrderDetailContainer>
    <div>OrderDetailContainer</div>
  </StyledOrderDetailContainer>
);

const StyledOrderDetailContainer = styled.div.attrs({
  className: "order-detail-container",
})``;

export default OrderDetailContainer;
