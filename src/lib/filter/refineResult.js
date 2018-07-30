import React, {Component} from 'react';
import { Row, Col } from "antd";
import styled from 'styled-components';
const StyledRow = styled(Row)`
    border-bottom: 1px dashed #f5f5f5;
    padding-bottom: 10px;
    margin-bottom: 10px;
`;

const FilterDetails = styled.div`
    border-bottom: 1px dashed grey;
    padding: 5px;
`;
const floatContent = styled.div`
    position: absolute;
`;

class RefineResult extends Component{
    constructor(props){
        super(props);
        this.state={
            showMore: false
        }
    }
    render() {
        const {label, data, removeFilter, children} = this.props;
        return <StyledRow>
            <Col xl={3} lg={5}>
                {label}
            </Col>
            <Col xl={5} lg={8}>
                <FilterDetails onHover={this.setState({showMore: true})}>
                    {data[0]}...
                    <span onClick={removeFilter}>X</span>
                </FilterDetails>
                <floatContent>
                    {data.map(d=>d)}
                </floatContent>
            </Col>
            {children}
        </StyledRow>
    }
}



export default RefineResult;