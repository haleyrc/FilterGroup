import React from "react";

export const VendorList = ({ vendors }) =>
  vendors ? (
    Object.values(vendors).map(item => <div key={item.name}>{item.name}</div>)
  ) : (
    <div>No vendors match filter</div>
  );
