import { PureComponent } from 'preact/compat';
import { Button } from "@blueprintjs/core";


class App extends PureComponent {
  render() {
    return (
      <Button intent="success" text="button content" onClick={() => console.log('zo')}></Button>
    );
  }
}

export default App;