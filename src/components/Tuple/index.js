import Navbar from "../Navbar";
import "./index.css";
import DataNotation from "../DataNotation";
import { Component } from "react";

class Tuple extends Component {
  state = {
    listDataValues: [],
    dummyFindIndexValue: "",
    dummyCountValue: "",
  };

  getDataValuesList = (valueList) => {
    this.setState({
      listDataValues: [...valueList],
    });
  };
  getCountValue = (event) => {
    this.setState({ dummyCountValue: event.target.value });
  };
  countListValue = () => {
    const { listDataValues, dummyCountValue } = this.state;
    if (listDataValues.includes(dummyCountValue)) {
      alert(
        `Value ${dummyCountValue} found ${
          listDataValues.filter((item) => item === dummyCountValue).length
        } times`
      );
    } else {
      alert(`Value ${dummyCountValue} not found in the Tuple`);
    }
    this.setState({
      dummyCountValue: "",
    });
  };
  onChangeIndexValue = (event) => {
    this.setState({
      dummyFindIndexValue: event.target.value,
    });
  };
  findListIndex = () => {
    const { listDataValues, dummyFindIndexValue } = this.state;
    if (listDataValues.includes(dummyFindIndexValue)) {
      alert(
        `Index of ${dummyFindIndexValue} is ${listDataValues.indexOf(
          dummyFindIndexValue
        )}`
      );
    } else {
      alert(`Value ${dummyFindIndexValue} not found in the Tuple`);
    }
    this.setState({
      dummyFindIndexValue: "",
    });
  };
  findMinimum = () => {
    const { listDataValues } = this.state;
    let anyStrings = listDataValues.some((item) => isNaN(item));

    if (listDataValues.length !== 0) {
      if (anyStrings) {
        alert(
          "Tuple contains both numbers and strings. Cannot find minimum value."
        );
      } else {
        const minValue = Math.min(...listDataValues);
        alert(`Minimum value is ${minValue}`);
      }
    } else {
      alert("Tuple is empty. Cannot find minimum value.");
    }
  };
  findMaximum = () => {
    const { listDataValues } = this.state;
    let anyStrings = listDataValues.some((item) => isNaN(item));

    if (listDataValues.length !== 0) {
      if (anyStrings) {
        alert(
          "Tuple contains both numbers and strings. Cannot find maximum value."
        );
      } else {
        const maxValue = Math.max(...listDataValues);
        alert(`Maximum value is ${maxValue}`);
      }
    } else {
      alert("Tuple is empty. Cannot find maximum value.");
    }
  };
  render() {
    const { dummyCountValue, dummyFindIndexValue, listDataValues } = this.state;
    return (
      <div class="list-bg-main">
        <div className="navbar-section">
          <Navbar />
        </div>
        <div class="list-bg-container">
          <div class="list-sidebar">
            <h1>Methods</h1>
            <ul class="list-ul-container">
              <a href="#tupleCountSection" class="each-method">
                <li>count()</li>
              </a>
              <a href="#tupleIndexSection" class="each-method">
                <li>index()</li>
              </a>
              <a href="#tupleMinSection" class="each-method">
                {" "}
                <li>min()</li>
              </a>
              <a href="#tupleMaxSection" class="each-method">
                <li>max()</li>
              </a>
            </ul>
          </div>
          <div class="list-main-section">
            <div class="data-notation-section">
              <DataNotation onDataChange={this.getDataValuesList} />
              <p className="list-notation">{`TUPLE : ( ${listDataValues.join(
                ", "
              )} )`}</p>
            </div>
            <div className="methods-container">
              <section id="tupleCountSection">
                <h2>count()</h2>
                <p>
                  The count() method returns the number of times a specified
                  value occurs in a tuple.
                </p>
                <p>Syntax: tuple.count(value)</p>
                <label>Enter Value:</label>
                <input
                  type="text"
                  placeholder="Enter value"
                  className="index-input"
                  onChange={this.getCountValue}
                  value={dummyCountValue}
                />
                <button onClick={this.countListValue} type="button">
                  Count
                </button>
              </section>

              <section id="tupleIndexSection">
                <h2>index()</h2>
                <p>
                  The index() method finds the first occurrence of the specified
                  value in a tuple and returns its index.
                </p>
                <p>Syntax: tuple.index(value)</p>
                <label>Enter Value:</label>
                <input
                  type="text"
                  placeholder="Enter value"
                  className="index-input"
                  onChange={this.onChangeIndexValue}
                  value={dummyFindIndexValue}
                />
                <button type="button" onClick={this.findListIndex}>
                  Find Index
                </button>
              </section>

              <section id="tupleMinSection">
                <h2>min()</h2>
                <p>
                  The min() method returns the smallest element in the tuple.
                </p>
                <p>Syntax: min(tuple)</p>
                <button type="button" onClick={this.findMinimum}>
                  Find Minimum
                </button>
              </section>

              <section id="tupleMaxSection">
                <h2>max()</h2>
                <p>
                  The max() method returns the largest element in the tuple.
                </p>
                <p>Syntax: max(tuple)</p>
                <button type="button" onClick={this.findMaximum}>
                  Find Maximum
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tuple;
