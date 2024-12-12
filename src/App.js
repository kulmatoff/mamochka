import { Button } from "./components/Button";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Typography } from "./components/Typography";
import { Tooltip } from "./components/Tooltip";
import { Accordion } from "./components/Accordion";

function App() {
  return (
    <div className="App">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <br></br>
      <Button size="sm" variant="secondary">
        Small
      </Button>
      <Button size="md" variant="secondary">
        Medium
      </Button>
      <Button size="lg" variant="secondary">
        Large
      </Button>
      <Input label="Input not there" placeholder="Type something"></Input>
      <Input label="Input there" placeholder="Type something2" danger></Input>
      <br></br>
      <Typography size="sm">
        SM. Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing
      </Typography>
      <Typography size="md">MD. Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing</Typography>
      <Typography size="lg">LG. Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing</Typography>
        <Heading level="1">Heading 1</Heading>
        <Heading level="2">Heading 2</Heading>
        <Heading level="3">Heading 3</Heading>
        <Heading level="4">Heading 4</Heading>
        <Heading level="5">Heading 5</Heading>
        <Heading level="6">Heading 6</Heading>
        <center><Tooltip text="Tooltip text" position="left">TOOLTIP</Tooltip></center>
        <center><Tooltip text="Tooltip text" position="right">TOOLTIP</Tooltip></center>
        <center><Tooltip text="Tooltip text" position="top">TOOLTIP</Tooltip></center>
        <center><Tooltip text="Tooltip text" position="bottom">TOOLTIP</Tooltip></center>


        <Accordion title="Accordion 1">Lorem ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing</Accordion>
        <Accordion title="Accordion 2" defaultOpen>Lorem ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing</Accordion>
        <Accordion title="Accordion 3">Lorem ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing</Accordion>
    </div>
  );
}

export default App;
