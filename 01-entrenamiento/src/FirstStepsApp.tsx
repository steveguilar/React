import { ItemCounter } from "./ItemCounter";

export function FirstStepsApp() {
  return (
    <>
      <h1>First Steps App</h1>
      <ItemCounter name="Apples" count={5} />
      <ItemCounter name="Oranges" count={3} />  
    </>
  );
}