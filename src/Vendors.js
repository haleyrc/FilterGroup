import React, { Component } from "react";

import { FilterGroup } from "./FilterGroup";
import { FilterButton } from './FilterButton'
import { VendorList } from './VendorList'

export const filterBy = (vendors, filterValue) =>
  filterValue === "all"
    ? vendors
    : Object.values(vendors).filter(vendor => vendor.type === filterValue);


export class Vendors extends Component {
  state = {
    vendors: {
      1: {
        name: "Rent Vendor",
        type: "rent"
      },
      2: {
        name: "None Vendor",
        type: "none"
      },
      3: {
        name: "Service Vendor",
        type: "vendor"
      }
    },
    filter: "all",
    activeIndex: 0
  };

  render() {
    const vendors = filterBy(this.state.vendors, this.state.filter);
    return (
      <div>
        <FilterGroup>
          <FilterButton onClick={() => this.setState({ filter: "all" })}>
            All
          </FilterButton>
          <FilterButton onClick={() => this.setState({ filter: "vendor" })}>
            Vendor
          </FilterButton>
          <FilterButton onClick={() => this.setState({ filter: "rent" })}>
            Rent
          </FilterButton>
          <FilterButton onClick={() => this.setState({ filter: "none" })}>
            Non-1099
          </FilterButton>
        </FilterGroup>
        <VendorList vendors={vendors} />
      </div>
    );
  }
}
