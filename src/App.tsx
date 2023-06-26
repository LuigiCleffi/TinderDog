import { QueryClient } from "@tanstack/react-query";
import HomePage from "./Pages/HomePage";

export const queryClient = new QueryClient();

const App: React.FC = () => {
  return <HomePage />
}

export default App;
