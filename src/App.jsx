
function App() {
  // const { bgColor, color_name } = useColorStore((state) => ({
  //   bgColor: state.bgColor,
  //   color_name: state.color_name,
  // }));
  
  return (
    <div className={`w-screen h-screen  grid place-items-center`}>
      <div className="text-center">
        <h2 className="text-4xl mb-4">App</h2>
        <h2 className="text-4xl mb-4">Choose a color</h2>
        {/* <Coolors /> */}
      </div>
    </div>
  );
}

export default App;
