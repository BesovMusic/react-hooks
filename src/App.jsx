import { Hover } from "./components/Hover";
import useInput from "./hooks/useInput";

function App() {
  const username = useInput('');
  const password = useInput('');


  return (
    <div>
      <input {...username} type="text" placeholder="Username" />
      <input {...password} type="text" placeholder="Password" />

      <Hover />
    </div>
  );
}

export default App;
