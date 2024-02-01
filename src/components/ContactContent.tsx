import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

export function ContactContent() {
  return (
    <Form className="bg-primary text-black">
      <Form.Group
        className="mb-3  flex items-center justify-around "
        controlId="exampleForm.ControlInput1"
      >
        <Form.Control
          type="email"
          className="w-80 rounded-md bg-sandal-100 mt-3 p-2"
          placeholder="Enter Email"
        />
      </Form.Group>
      <Form.Group
        className="mb-3 flex items-center justify-around "
        controlId="exampleForm.ControlInput1"
      >
        <Form.Control
          type="name"
          className="w-80 rounded-md p-2 bg-sandal-100 "
          placeholder="Enter Name"
        />
      </Form.Group>
      <Form.Group
        className="mb-3  flex items-center justify-around"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Control
          as="textarea"
          rows={6}
          className="w-80 rounded-xl p-2 bg-sandal-100"
          placeholder="Enter Message"
        />
      </Form.Group>
      <Form.Group as={Row} className=" ml-4 ">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button className="bg-red-300 p-2 mb-2" type="submit">
            Send
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}
