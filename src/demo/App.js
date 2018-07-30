import React, { Component } from "react";
import Example from "../lib";
import { SecondExample, CategoryFilter, BrandFilter, RefineResult } from "../lib";
import "antd/dist/antd.css";
import "./app.css";
const mockData = ["Nutritional Foods", "Woman Care", "swiss", "blackmores"];
for (let i = 0; i < 20; i++) {
  mockData.push(`test data ${i}`);
}

const mockBrand = [{ id: 1, name: "swiss" }, { id: 2, name: "blackmores" }];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedCategories: [],
      pickedBrandsId: []
    };
  }
  selectCategory = checkedValues => {
    console.log("category", checkedValues);
    this.setState({ pickedCategories: checkedValues });
  };
  selectBrand = e => {
    let newPickedBrandsId = [];
    if (e.target.checked) {
      newPickedBrandsId = [
        ...this.state.pickedBrandsId,
        parseInt(e.target.value)
      ];
    } else {
      newPickedBrandsId = this.state.pickedBrandsId.filter(
        id => id !== parseInt(e.target.value)
      );
    }
    this.setState({
      pickedBrandsId: newPickedBrandsId
    });
  };
  selectAlphabet = v => {
    console.log("alphabet", v);
  };
  saveCategory = () => {
    console.log("savedCategory", this.state.pickedCategories);
  };
  saveBrand = () => {
    console.log("pickedBrandsId", this.state.pickedBrandsId);
  };
  render() {
    return (
      <div>
        <Example />
        <SecondExample />
          {/*<RefineResult label="Refine By" data={[...this.state.pickedCategories]} removeFilter/>*/}
        <CategoryFilter
          selectCategory={this.selectCategory}
          saveCategory={this.saveCategory}
          label="Category"
          data={mockData}
          saveBackground="green"
          cancelBackground="red"
        />
        <BrandFilter
          pickedBrandsId={this.state.pickedBrandsId}
          selectBrand={this.selectBrand}
          saveBrand={this.saveBrand}
          selectAlphabet={this.selectAlphabet}
          label="Brand"
          data={mockBrand}
          saveBackground="green"
          cancelBackground="red"
        />
      </div>
    );
  }
}

export default App;
