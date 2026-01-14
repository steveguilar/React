interface Props{
    name: string;
    count: number;
}

export const ItemCounter = (props: Props) => {
  return (
    <>
      <h1>{props.name}: {props.count}</h1>
    </>
  );
}   