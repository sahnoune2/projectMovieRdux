import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addMovie } from "../action";

export const MovieForm = () => {
  const [movie, setMovie] = useState({
    name: "",
    description: "",
    releaseDate: "",
    poster: "",
    trailer: "",
    rating: "",
  });

  const dispatch = useDispatch();
  return (
    <div style={{ margin: "2rem", width: "40%" }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Movie name </Form.Label>
          <Form.Control
            onChange={(e) => setMovie({ ...movie, name: e.target.value })}
            type="text"
            placeholder="Enter movie's name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            onChange={(e) =>
              setMovie({ ...movie, description: e.target.value })
            }
            type="text"
            placeholder="Enter description"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Release date</Form.Label>
          <Form.Control
            onChange={(e) =>
              setMovie({ ...movie, releaseDate: e.target.value })
            }
            type="date"
            placeholder="Enter release date"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Poster link</Form.Label>
          <Form.Control
            onChange={(e) => setMovie({ ...movie, poster: e.target.value })}
            type="text"
            placeholder="Enter poster link "
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Trailer link </Form.Label>
          <Form.Control
            onChange={(e) => setMovie({ ...movie, trailer: e.target.value })}
            type="text"
            placeholder="Enter trailer link "
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>movie's rating </Form.Label>
          <Form.Control
            onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
            type="number"
            placeholder="Enter the rating "
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          onClick={() => dispatch(addMovie({ ...movie, id: Math.random() }))}
          variant="primary"
        >
          Add movie
        </Button>
      </Form>
    </div>
  );
};
