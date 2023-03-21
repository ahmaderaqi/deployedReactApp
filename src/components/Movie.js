import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ModalMovie from './ModalMovie ';
import { useState,useEffect } from 'react';

function Movie(props){
    
    const [showFlag,setShowFlag] = useState(false);
    const [clickedItem,setClickedItem]=useState({});
    const[imagee,setImagee]=useState("");
    // setImagee(`https:/${props.poster_path}`)

    const handleShow = (item) =>{
        // console.log(item);
        setClickedItem(item);
        setShowFlag(true);
    }
    const handleclose = () =>{
        
        setShowFlag(false);
    }

    useEffect(()=>{
        console.log("props")
        console.log(props)
    }, [])


    return(
        <>
        <Row xs={1} md={3} className="g-4">
                
                     <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" />
                            <Card.Body>
                                <Card.Title>{props.title}</Card.Title>
                                <Card.Text>
                                    <p>{props.overview}</p>
                                    
                                </Card.Text>
                                <Button variant="primary" onClick={()=>handleShow(props)}>add to favorite</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                
            </Row>

        <ModalMovie showFlag={showFlag} handleclose={handleclose} movieData={clickedItem}  />
        </>
    );
}

export default Movie;