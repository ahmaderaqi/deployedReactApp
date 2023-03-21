// import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ModalMovie(props) {

    // const [message, setMessage] = useState('');







    const addFavoriteHandel = async (e) => {
        // console.log("props1",props);
        e.preventDefault();
        const obj = {
            title: props.movieData.title,
            overview: props.movieData.overview,
            poster_path: props.movieData.poster_path,
            release_date: props.movieData.release_date,
            comment: e.target.comment.value
        }

        const serverURl = `https://movies-library-production-27d6.up.railway.app/getMovies`
        const axiosRes = await axios.post(serverURl, obj);
        //setMessage(e.target.comment.defaultValue);
        console.log("props2", axiosRes.config.data);
    }



    return (
        <>
            <Modal show={props.showFlag} onHide={props.handleclose}>

                <Modal.Header closeButton>
                    <Modal.Title>{props.movieData.title}</Modal.Title>

                </Modal.Header>

                <Modal.Body>
                    <Image src={props.movieData.poster_path} width='100%'></Image>
                    <p>{props.movieData.overview}</p>

                    <Form onSubmit={addFavoriteHandel}>

                        <Form.Group className="mb-3">
                            <Form.Label>add comment</Form.Label>
                            <Form.Control name="comment" type="text" defaultValue="ahmad" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Add To Favorite
                        </Button>
                    </Form>

                </Modal.Body>

                <Modal.Footer>
                    



                    <Button variant="secondary" onClick={props.handleclose}>
                        Close
                    </Button>
                    



                </Modal.Footer>

            </Modal>
        </>
    )
}

export default ModalMovie