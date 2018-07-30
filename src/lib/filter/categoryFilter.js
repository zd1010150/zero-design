import React, {Component} from 'react';
import { Row, Col } from "antd";
import styled from 'styled-components';
import ShowMore from './component/showMore';
import CategoryList from './component/categoryList';
const StyledRow = styled(Row)`
    border-bottom: 1px dashed #f5f5f5;
    padding-bottom: 10px;
    margin-bottom: 10px;
`;

class CategoryFilter extends Component{
    constructor(props){
        super(props);
        this.state={
            collapse: true
        }
    }
    showMore = () => {
        this.setState(prevState => ({collapse:!prevState.collapse}))
    }
    cancel = () => {
        this.setState(prevState => ({collapse: true}))
    }
    render() {
        const {label, data, selectCategory, saveCategory} = this.props;
        return <StyledRow>
                <Col xl={3} lg={5}>
                    {label}
                </Col>
                <Col xl={18} lg={14}>
                    <CategoryList data={data}
                                  selectCategory={selectCategory}
                                  collapse={this.state.collapse}
                                  onSave={saveCategory}
                                  onCancel={this.cancel}
                                  {...this.props}/>
                </Col>
                <Col xl={3} lg={5}>
                    <ShowMore onClick={this.showMore}/>
                </Col>
            </StyledRow>
    }
}



export default CategoryFilter;