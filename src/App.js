import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
function App() {
  // const [name, setName] = useState("amit");

  // const handleclick = () => {
  //   console.log("first clicked");
  // };

  // const handleclick2 = () => {
  //   setName(xyz);
  // };

  // const xyz = "amitsfdsdfsdfsdfs";

  // const handleclick3 = (name) => {
  //   console.log(`${name} was clicked`);
  // };
  return (
    <div className="App">
      {/* <button onClick={handleclick}>1</button>
      <button onClick={handleclick()}>2</button>
      <button onClick={() => handleclick2()}>3</button>
      <button onClick={() => handleclick3(name)}>4</button> */}
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
