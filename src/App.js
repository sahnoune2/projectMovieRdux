import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MovieForm } from "./redux/component/MovieForm";
import { MoviesList } from "./redux/component/MoviesList";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <MovieForm />
      <MoviesList />
    </div>
  );
}

export default App;
