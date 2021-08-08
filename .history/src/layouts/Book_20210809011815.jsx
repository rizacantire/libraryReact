import React from "react";
import { Container } from "semantic-ui-react";
import BookList from "../pages/BookList";

export default function Book() {
  return (
    <Container>
      <div>
        <BookList />
      </div>
    </Container>
  );
}
