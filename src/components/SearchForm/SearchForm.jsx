import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";

export const SearchForm = () => {
  return (
    <Container>
      <Card className="p-3 my-5">
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Nama Mobil</Form.Label>
              <Form.Control type="text" placeholder="Ketik nama / tipe mobil" className="search-input"></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Kategori</Form.Label>
              <Form.Select>
                <option>2-4 orang</option>
                <option>4-6 orang</option>
                <option>6-8 orang</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Harga</Form.Label>
              <Form.Select>
                <option>{"<Rp. 400.000"}</option>
                <option>{"<Rp. 400.000 - Rp 600.000"}</option>
                <option>{"> Rp. 400.000"}</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Select>
                <option>Disewa</option>
                <option>Tersedia</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="d-flex justify-content-start align items-end" style={{ height: "" }}>
              <Button style={{ position: "absolute", top: "45px" }} type="submit" variant="success">
                Cari Mobil
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};
