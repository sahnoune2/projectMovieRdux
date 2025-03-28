import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MovieForm } from "./redux/component/MovieForm";
import { MoviesList } from "./redux/component/MoviesList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "./redux/action";

function App() {
  const dispatch = useDispatch();

  const { loading, message } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
    if (message) {
      alert(message);
    }
  }, [message]);

  return (
    <div style={{ display: "flex" }}>
      <MovieForm />
      {loading ? <div>...loading</div> : <MoviesList />}
    </div>
  );
}

export default App;
