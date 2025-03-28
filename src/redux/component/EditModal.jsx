import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { editMovie } from "../action";

function EditModal({ movie }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setMovie] = useState({
    name: movie.name,
    description: movie.description,
    releaseDate: movie.releaseDate,
    poster: movie.poster,
    trailer: movie.trailer,
    rating: movie.rating,
  });
  console.log(newMovie);

  const handleEdit = (id) => {
    dispatch(editMovie(id, newMovie));
    handleClose();
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Movie name </Form.Label>
              <Form.Control
                defaultValue={movie.name}
                onChange={(e) =>
                  setMovie({ ...newMovie, name: e.target.value })
                }
                type="text"
                placeholder="Enter movie's name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setMovie({ ...newMovie, description: e.target.value })
                }
                as="textarea"
                type="text"
                placeholder="Enter description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Release date</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setMovie({ ...newMovie, date: e.target.value })
                }
                type="date"
                placeholder="Enter release date"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Poster link</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setMovie({ ...newMovie, poster: e.target.value })
                }
                type="text"
                placeholder="Enter poster link "
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Trailer link </Form.Label>
              <Form.Control
                onChange={(e) =>
                  setMovie({ ...newMovie, trailer: e.target.value })
                }
                type="text"
                placeholder="Enter trailer link "
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>movie's rating </Form.Label>
              <Form.Control
                onChange={(e) =>
                  setMovie({ ...newMovie, rating: e.target.value })
                }
                type="number"
                placeholder="Enter the rating "
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleEdit(movie._id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
