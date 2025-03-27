import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie } from "../action";
import EditModal from "./EditModal";

export const MoviesList = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  console.log(movies);
  return (
    <div
      style={{
        width: "50%",
        border: "1px solid red",
        margin: "2rem",
        padding: "1rem",
        display: "flex",
        gap: "3rem",
        flexWrap: "wrap",
      }}
    >
      {movies.map((movie) => (
        <>
          {" "}
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ height: "10rem" }}
              variant="top"
              src={movie.poster}
            />
            <Card.Body>
              <Card.Title> {movie.name} </Card.Title>
              <Card.Text>{movie.description}</Card.Text>
              <Card.Text>{movie.releaseDate}</Card.Text>
              <div>
                <iframe style={{ width: "100%" }} src={movie.trailer}></iframe>
              </div>
              <div style={{ display: "flex", gap: "2rem" }}>
                {" "}
                <EditModal movie={movie}/>
                <Button
                  onClick={() => dispatch(deleteMovie(movie.id))}
                  variant="danger"
                >
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        </>
      ))}
    </div>
  );
};
