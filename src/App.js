import Product from './Product'

function App() {
  const style = {
    container: `h-[100vh] w-[100vw] bg-[#F3EAE3] flex justify-center items-center`
  }
  return (
    <div className="App">
      <div className={style.container}>
        <Product />
      </div>
    </div>
  );
}

export default App;
