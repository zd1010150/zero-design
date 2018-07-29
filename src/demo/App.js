import React from 'react';
import Example from '../lib';
import { SecondExample, CategoryFilter } from '../lib';
import 'antd/dist/antd.css';
const App = () => (
  <div>
    <Example />
    <SecondExample />
    <CategoryFilter data={["swiss", "blackmores"]}/>
  </div>
);

export default App;
