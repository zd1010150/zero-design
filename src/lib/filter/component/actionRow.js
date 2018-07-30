import React from "react";
import { Row, Col, Button } from "antd";
import styled from "styled-components";
const StyledRow = styled(Row)`
  margin-top: 30px;
`;
const StyledButton = styled(Button)`
  min-width: 100px;
  color: #fff !important;
  &:hover{
    color: #fff !important;
  }
`;
const SaveButton = StyledButton.extend`
  background-color: ${props => props.background} !important;
`;
const CancelButton = StyledButton.extend`
  background-color: ${props => props.background} !important;
`;


const ActionRow = ({ onSave, onCancel, saveBackground, cancelBackground }) =>
    <StyledRow type="flex" justify="center">
        <Col xxl={2} xl={3} sm={5}>
            <SaveButton background={saveBackground} onClick={onSave}>
                Save
            </SaveButton>
        </Col>
        <Col xxl={2} xl={3} sm={5}>
            <CancelButton background={cancelBackground} onClick={onCancel}>
                Cancel
            </CancelButton>
        </Col>
    </StyledRow>;

export default ActionRow;
