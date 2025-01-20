import Colors from "./Colors";
import { useColorStore } from "./useColorStore";
import { useCountStore } from "./useCountStore";

function Q2() {
  const className = useColorStore((state) => state.className);
  const name = useColorStore((state) => state.name);
  const count = useCountStore((state) => state.count);
  const increaseCount = useCountStore((state) => state.increaseCount);
  return (
    <div className={`${className} w-screen h-screen grid place-items-center`}>
      <div className="text-center">
        <h2 className="text-4xl mb-4">App</h2>
        <Colors />
        {name && <p className="mt-4 text-4xl">Selected Color: {name}</p>}

        <h3 className="text-3xl mt-10">Count: {count}</h3>
        <button
          className="border-2 bg-green-600 p-2"
          onClick={() => increaseCount()}
        >
          increase count
        </button>
      </div>
    </div>
  );
}
export default Q2;
