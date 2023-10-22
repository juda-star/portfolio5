import React, { useState } from "react";
import PayPal from "../PayPal/PayPal";
import styled from "styled-components";

const Button = styled.div`
  background-color: gray;
  border: 2px solid #555555;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  :hover {
    background-color: #555555;
    color: white;
  }
`;
export default function ButtonPay() {
  const [checkOut, setCheckOut] = useState(false);
  return (
    <div>
      {checkOut ? (
        <PayPal />
      ) : (
        <Button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
        </Button>
      )}
    </div>
  );
}
