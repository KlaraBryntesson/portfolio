import { createContext } from "react";

export const SomeContext = createContext();

// export function APIContext({ children }) {
//   const [details, setDetails] = useState(null);

//   useEffect(() => {
//     fetch("/klara.json")
//       .then((response) => response.json())
//       .then((result) => {
//         setDetails(result.about.details);
//       });
//   }, []);
// }
// export default React.

// {
//   userName: "klarabryntesson",
//   password: "secret",
// }
