import { Button } from "./components/Button"
import { Heading } from "./components/Heading"

function App() {
  return (
    <div className="App">
      <Heading level="2">AAaaa</Heading>
      <Button size="sm">Small</Button>
      <Button size="md" variant="secondary">Medium</Button>
      <Button size="lg" variant="primary">Large</Button>
    </div>
  );
}

export default App;
