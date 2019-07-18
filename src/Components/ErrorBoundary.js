import React, { Component } from 'react'


export default class ErrorBoundary extends React.Component {

  state = {
    hasError: false
  }

  componentDidCatch(error, info) {
      console.log(error, info)
    this.setState({ hasError: true })
  }

  render() {
      console.log(this.state)

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return null
  }
}
