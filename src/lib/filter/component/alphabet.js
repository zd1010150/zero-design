import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
const Alphabet = styled.a`
  display: inline-block;
  padding: 1px 5px;
  color: grey;
  &:hover {
    text-decoration: none;
    color: grey;
  }
  &:focus {
    text-decoration: none;
    color: grey;
    border: 1px solid black;
    padding: 0 4px;
  }
`;

const DeactivatedAlphabet = styled.div`
  display: inline-block;
  padding: 1px 5px;
  color: #f5f5f5;
  cursor: not-allowed;
`;

const StyledRow = styled(Row)`
  background: rgba(	245, 245, 245, 0.2);
  max-width: 700px;
`;

const AlphabetList = ({ selectAlphabet, alphabets }) =>
    <StyledRow>
        <Col span={2}>
            <Alphabet id="all" href="#" onClick={(e) => {e.preventDefault(); selectAlphabet(e.target.id)}}>All</Alphabet>
        </Col>
        <Col span={18}>
            {alphabets.map((d, index) => {
                return d.activated ? (
                    <Alphabet href="#" key={index} onClick={(e) => {e.preventDefault(); selectAlphabet(e.target.text)}}>
                    {d.value}
                    </Alphabet>
                ) : <DeactivatedAlphabet href="#" key={index}>
                    {d.value}
                    </DeactivatedAlphabet>
            })}
        </Col>
        <Col span={2}>
            <Alphabet id="number" href="#" onClick={(e) => {e.preventDefault(); selectAlphabet(e.target.id)}}>0-9</Alphabet>
        </Col>

    </StyledRow>;

export default AlphabetList;
