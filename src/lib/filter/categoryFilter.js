import React, {Component} from 'react';
import styled from 'styled-components';
import ShowMore from './component/showMore';
import CategoryList from './component/categoryList';
const MySpan = styled.span`
  vertical-align: top;
  display: inline-block;
`;
class CategoryFilter extends Component{
    constructor(props){
        super(props);
        this.state={
            collapse: true
        }
    }
    showMore(){
        this.setState(prevState => ({collapse:!prevState.collapse}))
    }
    render() {
        const {label, data, selectCategory} = this.props;
        return <div>
            <MySpan>{label}</MySpan>
            {/* <CategoryList data={data}
                          selectCategory={selectCategory}
                          collapse={this.state.collapse}/> */}
            <MySpan><ShowMore onClick={this.showMore}/></MySpan>
        </div>
    }
}



export default CategoryFilter;