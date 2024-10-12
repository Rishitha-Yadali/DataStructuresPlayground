import { Component } from "react";
import "./index.css";


class DataNotation extends Component {
  state = {
    sizeVal: "",
    dataTypeValues: [{ value: "", type: "" }],

   
  };

  changeSize = (event) => {
    const size = parseInt(event.target.value);
    if (size >= 1 && size <= 7) {
      this.setState({ sizeVal: size, dataTypeValues: Array(size).fill({ value: "", type: "" }) });
    } else {
      alert("Please enter a valid size between 1 and 7");
    }
  
  }

  handleChange = (index, event) => {
    const newValue = event.target.value;
    let dataType = "";
    if(newValue===""){
        dataType=""
    }else if (!isNaN(newValue)) {
      dataType = newValue.includes(".") ? "Float" : "Integer";
    } else if (newValue.toLowerCase() === "true" || newValue.toLowerCase() === "false") {
      dataType = "Boolean"; 
    } else {
      dataType = "String";
    }

    const newValues = [...this.state.dataTypeValues];
    newValues[index] = { value: newValue, type: dataType };
    this.setState({
        dataTypeValues: newValues,

      },
      ()=>{
        const dataValuesList=newValues.map(dataVal=>dataVal.value)
        this.props.onDataChange(dataValuesList)
      }
    );
  };

  renderBoxesContainer = () => {
    const { sizeVal, dataTypeValues} = this.state;
   
   
    let divs = [];
    for (let i = 0; i < sizeVal; i++) {
      divs.push(
        <div key={i} className="each-box">
          <input
            className="value-input"
            type="text"
            value={dataTypeValues[i].value}
            onChange={(event) => this.handleChange(i, event)}
          />
          <p className="data-type">{dataTypeValues[i].type}</p>
        </div>
      );
    }
    
    return divs;
  };

  render() {
    const { sizeVal} = this.state;
    
   
    return (
      <div className="notation-container">
        <div>
          <label className="select-size">Select Default Size:</label>
          <input
            className="size-input"
            type="number"
            value={sizeVal}
            onChange={this.changeSize}
            placeholder="Enter size value"
          />
          <div className="boxes-container">
            {this.renderBoxesContainer()}
          </div>
    
        </div>
      </div>
    );
  }
}

export default DataNotation;




