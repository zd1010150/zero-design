import React from "react";
import { Row, Col, Checkbox } from "antd";
import styled from "styled-components";
import ActionRow from './actionRow';
const CheckboxGroup = Checkbox.Group;
const CategoryRow = styled.div.attrs({
  width: props => props.width || "500px"
})`
  transition: max-height 300ms ease-in-out;
  // display: inline-block;
  // width: ${props => props.width};
  overflow: hidden;
  // white-space: ${props => (props.collapse ? "nowrap" : "normal")};
  // overflow: ${props => (props.collapse ? "hidden" : "visible")};
  max-height: ${props => (props.collapse ? "20px" : "1500px")};
`;

const CategoryList = ({ data, selectCategory, collapse, ...props }) =>
  <CategoryRow collapse={collapse}>

      <CheckboxGroup onChange={selectCategory}>
          <Row>
              {data.map((d, index) => {
                  return (
                      <Col xl={3} sm={5} key={d.id}>
                          <Checkbox value={d} >
                              {d.name}
                          </Checkbox>
                      </Col>
                  );
              })}
          </Row>
      </CheckboxGroup>
      <ActionRow {...props}/>
  </CategoryRow>;

export default CategoryList;
