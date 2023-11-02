import { useState } from "react";
import Alert from "./Components/Alert";
import Buttons from "./Components/Buttons";
import ListGroup from "./Components/ListGroup";

function App() {
  const [alertvisible, setalertVisibility] = useState(false);
  let Items = [
    "New York",
    "San Fasncisco",
    "Los Angeles",
    "Chicago",
    "Tokyo",
    "London",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        Items={Items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <br />
      {
        <Alert>
          Hello <span>World</span>
        </Alert>
      }
      <br />
      <Buttons onClick={() => setalertVisibility(true)}>My Button</Buttons>
    </div>
  );
}

export default App;
