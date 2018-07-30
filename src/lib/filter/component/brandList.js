import React from "react";
import {Row, Col, Icon, Checkbox} from "antd";
import styled from "styled-components";
import ActionRow from './actionRow';
const BrandRow = styled.div.attrs({
    width: props => props.width || "500px"
})`
  transition: max-height 300ms ease-in-out;
  // display: inline-block;
  // width: ${props => props.width};
  overflow: hidden;
  max-height: ${props => (props.collapse ? "80px" : "1500px")};
`;

const StyledCheckBox = styled.span`

    font-size: 10px;
`;

const StyledCol = styled(Col)`
    border: ${props => props.picked ? '1px solid grey' : '1px solid #f5f5f5'};
    padding: 0 20px;
    margin: 15px 20px 0 0;
    text-align: center;
`;

const StyledIcon = styled(Icon)`
    position: absolute;
    right: -1px;
    bottom: -1px;
    font-size: 13px;
`;

const BrandList = ({data, selectBrand, pickedBrandsId, collapse, ...props}) =>
    <BrandRow collapse={collapse}>
        <CheckboxSet
            setOptions={data}
            handleChecked={selectBrand}
            pickedBrandsId={pickedBrandsId}/>
        <ActionRow {...props}/>
    </BrandRow>;


const filter = (pickedBrandsId, brand) => {
    return pickedBrandsId && pickedBrandsId.filter(id=> id === brand.id).length > 0
}
const CheckboxSet = (props) => {
    return (
        <Row>
            {props.setOptions.map((option, index) => {
                return (
                    <StyledCol key={option.id} xl={3} sm={5} xs={12} picked={filter(props.pickedBrandsId, option)}>
                        <div className="brand-name">
                            <input
                                id={option.id}
                                onChange={props.handleChecked}
                                type="checkbox"
                                value={option.id}/>
                            <label
                                htmlFor={option.id}
                                key={option}>
                                <StyledCheckBox>
                                    <img src="http://via.placeholder.com/100x30" width='100%'/>
                                    <div>{option.name}</div>
                                    {filter(props.pickedBrandsId, option) && <StyledIcon type="check-square" />}
                                </StyledCheckBox>
                            </label>
                        </div>

                    </StyledCol>
                )
            })}
        </Row>
    );
}


{/*<label
 key={option}>
 <StyledCheckBox>
 <img src="http://via.placeholder.com/100x30"/>
 <div>{option}</div>
 </StyledCheckBox>
 <input
 onChange={props.handleChecked}
 type="checkbox"
 value={option}/>
 </label>
*/}
export default BrandList;
