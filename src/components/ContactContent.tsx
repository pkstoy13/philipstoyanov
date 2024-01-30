import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

export function ContactContent() {
  return (
    <Form className="bg-indigo-500">
      <Form.Group
        className="mb-3  flex items-center justify-around "
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          className="w-80 rounded-md bg-gray-200 mt-3"
          placeholder="name@example.com"
        />
      </Form.Group>
      <Form.Group
        className="mb-3  flex items-center justify-around"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          className="w-80 rounded-xl bg-gray-200"
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
