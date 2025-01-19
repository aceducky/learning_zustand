import { useColorStore } from "./components/q2/color_store";
import Colors from "./components/q2/Colors";

function App() {
  const className = useColorStore((state) => state.className);
  const name = useColorStore((state) => state.name);

  return (
    <div className={`${className} w-screen h-screen grid place-items-center`}>
      <div className="text-center">
        <h2 className="text-4xl mb-4">App</h2>
        <Colors />
        {name && <p className="mt-4 text-4xl">Selected Color: {name}</p>}
      </div>
    </div>
  );
}

export default App;
