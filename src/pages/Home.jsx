import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "../component/image-gallery/galleryImages";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Home page</h1>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}
          >
            <Masonry gutter="1rem">
              {galleryImages.map((item, index) => (
                <img
                  src={item}
                  key={index}
                  alt="..."
                  style={{
                    width: "100%",
                    display: "block",
                    borderRadius: "10px",
                  }}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
