import type { CSSProperties } from "react";

const firstName = 'Steven';
const lastName = 'Test';

const favoriteGames = ['Elder Ring', 'Smash', 'Metal Gear'];
const isActive = false;

const address = {
  zipCode: 'ABC-123',
  country: 'USA',
};

const myStyles: CSSProperties = {
  backgroundColor: '#fafafa',
  borderRadius: 20,
  padding: 10,
  marginTop: 30,
};

export const MyAwesomeApp = () => {
  return (
    <>
      <h1> {firstName} </h1>
      <h3> {lastName} </h3>

      <p>{favoriteGames.join(', ')}</p>
      <p>{2 + 2}</p>

      <h1>{isActive ? 'Activo' : 'Inactivo'}</h1>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
};

// export function MyAwesomeApp() {
//   return (
//     <>
//       <h1>Fernando</h1>
//       <h3>Herrera</h3>
//     </>
//   );
// }