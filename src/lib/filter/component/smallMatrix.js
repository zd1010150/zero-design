import React, {Fragment} from 'react';
import { Checkbox  } from 'antd';
const SmallMatrix =  ({value, onChange}) =>
    <Fragment >
        <Checkbox onChange={onChange}>value</Checkbox>
    </Fragment>



export default SmallMatrix;