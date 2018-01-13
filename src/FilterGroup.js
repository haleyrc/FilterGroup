import React, { Component } from "react";

const styles = {
  border: "1px solid black",
  paddingHorizontal: 10,
  paddingVertical: 2,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center"
};

export class FilterGroup extends Component {
  state = {
    activeIndex: 0
  };

  render() {
    return (
      <div style={styles}>
        {React.Children.map(this.props.children, (child, index) => {
          return React.cloneElement(child, {
            index,
            active: this.state.activeIndex === index,
            onClick: () =>
              this.setState({ activeIndex: index }, child.props.onClick)
          });
        })}
      </div>
    );
  }
}

