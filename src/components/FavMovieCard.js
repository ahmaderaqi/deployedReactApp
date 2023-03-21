import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import axios from 'axios';



function FavMovieCard(props) {
    
    const updateFavList = async (e) => {

        e.preventDefault();
        const obj={
            comment: e.target.comment.value

        }
        
        // console.log(obj.comment);
        const serverURl = `https://movies-library-production-27d6.up.railway.app/getMovies/${props.id}`
        const axiosRes = await axios.put(serverURl,obj);
        props.addFavoriteHandel()
        console.log(props.id)
        
    }

    const deletMovie=async()=>{
        const serverURl = `https://movies-library-production-27d6.up.railway.app/getMovies/${props.id}`
        const axiosRes = await axios.delete(serverURl);
        props.addFavoriteHandel();
        console.log(props)
        

    }

    return (
        <>
            <Row xs={1} md={4} className="g-4">

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.poster_path} />
                        <Card.Body>

                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                                <p>{props.overview}</p>

                            </Card.Text>

                            {/* <InputGroup>
                                <InputGroup.Text>write your comment</InputGroup.Text>
                                <Form.Control defaultValue={"ahamd"} as="textarea" aria-label="With textarea" />
                            </InputGroup> */}

                            <Form onSubmit={updateFavList}>

                                <Form.Group className="mb-3">
                                    <Form.Label>add comment</Form.Label>
                                    <Form.Control name="comment" type="text" defaultValue="ahmad" />
                                </Form.Group>

                                <Button variant="success" type="submit">
                                    Add your comment
                                </Button>
                            </Form>
                            {/* <Button variant="success" onClick={() => { props.addFavoriteHandel() }} >Update</Button> */}
                            <Button variant="danger" onClick={deletMovie}>Delete</Button>


                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            {}



        </>

    );
}

export default FavMovieCard;

