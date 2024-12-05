import { Button } from "./components/Button"

function App() {
  return (
    <div className="App">
      <Button size="sm">Small</Button>
      <Button size="md" variant="secondary">Medium</Button>
      <Button size="lg" variant="primary">Large</Button>
    </div>
  );
}

export default App;
