import React from "react";
import { Button } from "@blueprintjs/core";

export default class App extends React.Component {
  render() {
    return (
      <Button intent="success" text="button content" onClick={() => console.log('zo')}></Button>
    );
  }
}