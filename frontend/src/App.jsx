import { useQuery } from "@tanstack/react-query";
import { getClients } from "./services/getClients";
import FormID from "./components/FormID";

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
  });

  if (isLoading) return <div>Delay de 3 segundos para disimular retraso en las llamadas</div>;
  if (error) return <p>Error: {error.message}</p>;

  const clientsArray = data ? Object.values(data) : [];

  return (
    <>
      <ul>
        {clientsArray.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      <h2>Formulario de ID</h2>
      <FormID />
    </>
  );
}

export default App;
