import { useColorStore } from "./useColorStore";
import { colors_list } from "./colors_list";

export default function Colors() {
  const setName = useColorStore((state) => state.setName);
  const setClassName = useColorStore((state) => state.setClassName);
  return (
    <div className="w-full fixed right-0 left-0 bottom-36">
      <div className="grid grid-flow-col justify-evenly">
        {colors_list.map((color) => (
          <button
            className={`${color.className}  w-fit text-white py-3 px-5 border-2 border-double`}
            key={color.name}
            onClick={() => {
              setName(color.name);
              setClassName(color.className);
            }}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
}
