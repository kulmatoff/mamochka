import { Button } from "./components/Button"
import { Heading } from "./components/Heading"
import { Input } from "./components/Input"

function App() {
  return (
    <div className="App">
      <Heading level="1">AAaaa</Heading>
      <Button size="sm">Small</Button>
      <Button size="md" variant="secondary">Medium</Button>
      <Button size="lg" variant="primary">Large</Button>
      <Input label="Input there" placeholder="Type something" danger></Input> 
    </div>
  );
}

export default App;
