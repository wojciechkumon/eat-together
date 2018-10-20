import * as React from 'react';

class ScrollOnMountHoc extends React.Component<ScrollOnMountHocProps> {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {Component, ...otherProps} = this.props;
    return (<Component {...otherProps}/>);
  }
}

interface ScrollOnMountHocProps {
  Component: React.ComponentType;
}

export const scrollOnMount = (wrappedComponent: React.ComponentType) => () => (
  <ScrollOnMountHoc Component={wrappedComponent}/>
);
