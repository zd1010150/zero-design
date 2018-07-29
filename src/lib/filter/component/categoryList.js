import React from "react";
import { Row, Col, Checkbox } from "antd";
import styled from "styled-components";
const CategoryRow = styled.div.attrs({
  width: props => props.width || "500px"
})`
  transition: max-height 300ms ease-in-out;
  display: inline-block;
  margin: 0 20px;
  width: ${props => props.width};
  overflow: hidden;
  // white-space: ${props => (props.collapse ? "nowrap" : "normal")};
  // overflow: ${props => (props.collapse ? "hidden" : "visible")};
  max-height: ${props => (props.collapse ? "20px" : "1500px")};
`;

const CategoryList = ({ data, selectCategory, collapse }) =>
  <CategoryRow collapse={collapse}>
    {data.map(d => {
      return (
        <span>
          <Checkbox onChange={selectCategory}>
            {d}
          </Checkbox>
        </span>
      );
    })}
  </CategoryRow>;

export default CategoryList;
