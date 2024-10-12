import Navbar from "../Navbar";
import "./index.css";
import DataNotation from "../DataNotation";
import { Component } from "react";

class List extends Component {
  state = {
    listDataValues: [],
    dummyAppendValue: "",
    dummyExtendList:[],
    dummyFindIndexValue:"",
    dummyRemoveValue:"",
    dummyIndexValue:"",
    dummyValue:"",
    dummyCountValue:""
 
  };

  getDataValuesList = (valueList) => {
    this.setState({
      listDataValues: [...valueList],
    });
  };
  onChangeAppendValue = (event) => {
    this.setState({ dummyAppendValue: event.target.value });
  };
  addAppendValue = (event) => {
    event.preventDefault();
    const { dummyAppendValue, listDataValues } = this.state;
    if(listDataValues.length<10){
      this.setState({
        listDataValues: [...listDataValues, dummyAppendValue],
       
        dummyAppendValue: "",
        
      });
      
    }
   else{
    alert("Maximum length reached. Cannot append more values."); 
   }
   this.setState({
    dummyAppendValue: "",
   })
  }
  onChangeExtendValues=(event)=>{
    this.setState({
      dummyExtendList:[...event.target.value.split(',')]
    })
  }
  addExtendList=(event)=>{
    event.preventDefault();
    const { dummyExtendList, listDataValues } = this.state;
    const maxIndex=10-listDataValues.length
    if(listDataValues.length+dummyExtendList.length<=10){
    this.setState({
      listDataValues: [...listDataValues,...dummyExtendList],
      dummyExtendList: [],
     
    });
  }
  else{
    alert(`${maxIndex} items added max limit reached`)
    this.setState({
      listDataValues:[...listDataValues,...dummyExtendList.slice(0,maxIndex)],
      dummyExtendList: [],
      

    })
    
  }
  }
  popListItem=()=>{
    const{listDataValues}=this.state 
    if(listDataValues.length!==0){
      this.setState({
        listDataValues:listDataValues.slice(0, -1),
        
      })
    }
    else{
      alert("List is empty. Cannot pop item.")
    }
  }
  onChangeIndexValue=(event)=>{
    this.setState({
      dummyFindIndexValue:event.target.value
    })

  }
  findListIndex=()=>{
    const{listDataValues,dummyFindIndexValue}=this.state
    if(listDataValues.includes(dummyFindIndexValue)){
        alert(`Index of ${dummyFindIndexValue} is ${listDataValues.indexOf(dummyFindIndexValue)}`)
    }
    else{
      alert(`Value ${dummyFindIndexValue} not found in the list`)
    }
    this.setState({
      dummyFindIndexValue: ""
    })
  }
  reverseList=()=>{
    const{listDataValues}=this.state
    const reversedList=listDataValues.reverse()
   
    this.setState({
      listDataValues:[...reversedList],

    })
  }
  onChangeRemoveValue=(event)=>{
    this.setState({ dummyRemoveValue: event.target.value });
  }
  removeListValue=()=>{
    const{listDataValues,dummyRemoveValue}=this.state 
    if(listDataValues.includes(dummyRemoveValue)){
      const removeItemIndex=listDataValues.indexOf(dummyRemoveValue)
      listDataValues.splice(removeItemIndex,1)
      this.setState({
        listDataValues:[...listDataValues],
        dummyRemoveValue: "",
      })
    }
    else{
      alert(`Value ${dummyRemoveValue} not found in the list`)
    }
    this.setState({
      dummyRemoveValue: "",
    })
}
onChangeInsertIndexValue=(event)=>{
  this.setState({
    dummyIndexValue:event.target.value
  })
}
insertIndexListValue=()=>{
  const{listDataValues,dummyIndexValue,dummyValue}=this.state 
  
    if(dummyIndexValue<listDataValues.length){
      listDataValues.splice(dummyIndexValue,1,dummyValue)
      this.setState({
        listDataValues:[...listDataValues],
        dummyIndexValue: "",
        dummyValue: "",
      })
    }else{
        alert("Index out of range. Cannot insert value.")
    }
    this.setState({
      dummyIndexValue: "",
      dummyValue: "",
    })
}
onChangeValue=(event)=>{
  this.setState({ dummyValue: event.target.value });
}
getCountValue=(event)=>{
    this.setState({ dummyCountValue: event.target.value });
}
countListValue=()=>{
  const{listDataValues,dummyCountValue}=this.state
  if(listDataValues.includes(dummyCountValue)){
    alert(`Value ${dummyCountValue} found ${listDataValues.filter(item=>item===dummyCountValue).length} times`)
  }
  else{
    alert(`Value ${dummyCountValue} not found in the list`)
  }
  this.setState({
    dummyCountValue: "",
  })
}
clearList=()=>{
  const{listDataValues}=this.state 
  this.setState({
    listDataValues:[]
  })
  alert("List cleared successfully")
}
findMinimum=()=>{
  const{listDataValues}=this.state
  let anyStrings = listDataValues.some(item => isNaN(item));
  

  if(listDataValues.length!==0){
      if(anyStrings){
        alert("List contains both numbers and strings. Cannot find minimum value.")
        
      }
      else{
        const minValue=Math.min(...listDataValues)
        alert(`Minimum value is ${minValue}`)
      }
  }
  else{
    alert("List is empty. Cannot find minimum value.")
  }
}
findMaximum=()=>{
  const{listDataValues}=this.state
  let anyStrings = listDataValues.some(item => isNaN(item));
  

  if(listDataValues.length!==0){
      if(anyStrings){
        alert("List contains both numbers and strings. Cannot find maximum value.")
        
      }
      else{
        const maxValue=Math.max(...listDataValues)
        alert(`Maximum value is ${maxValue}`)
      }
  }
  else{
    alert("List is empty. Cannot find maximum value.")
  }
}
findListSum=()=>{
  const{listDataValues}=this.state 
  const anyStrings=listDataValues.some(item => isNaN(item))
  if(listDataValues.length!==0){
    if(anyStrings){
        alert("List contains both numbers and strings. Cannot find sum.")
      }
      else{
          const listSum=listDataValues.reduce((prev,curr)=>parseInt(prev)+parseInt(curr))
          alert(`Sum of all values in the list is ${listSum}`)
      }
  }
  else{
    alert("List is empty. Cannot find sum.")
  }
}


  render() {
    const { listDataValues, dummyAppendValue,dummyExtendList,dummyFindIndexValue,dummyRemoveValue,dummyIndexValue,
      dummyValue,dummyCountValue }  = this.state;
  

    return (
      <>
        <div className="navbar-section">
          <Navbar />
        </div>
        <div className="list-bg-main">
          <div className="list-bg-container">
            <div className="list-sidebar">
              <h1>Methods</h1>
              <ul className="list-ul-container">
                <a href="#appendSection" className="each-method">
                  <li>append()</li>
                </a>
                <a href="#extendSection" className="each-method">
                  <li>extend()</li>
                </a>
                <a href="#popSection" className="each-method">
                  {" "}
                  <li>pop()</li>
                </a>
                <a href="#indexSection" className="each-method">
                  <li>index()</li>
                </a>
                <a href="#reverseSection" className="each-method">
                  <li>reverse()</li>
                </a>
                <a href="#removeSection" className="each-method">
                  <li>remove()</li>
                </a>
                <a href="#insertSection" className="each-method">
                  <li>insert()</li>
                </a>
                <a href="#countSection" class="each-method">
                  <li>count()</li>
                </a>
                <a href="#clearSection" className="each-method">
                  <li>clear()</li>
                </a>
                <a href="#minSection" className="each-method">
                  <li>min()</li>
                </a>
                <a href="#maxSection" className="each-method">
                  <li>max()</li>
                </a>
                <a href="#sumSection" className="each-method">
                  <li>sum()</li>
                </a>
              </ul>
            </div>
            <div className="list-main-section">
              <div class="data-notation-section">
                <DataNotation onDataChange={this.getDataValuesList} listDataValues={listDataValues}/>
                <p className="list-notation">{`LIST : [ ${listDataValues.join(", ")} ]`}</p>
              </div>

              <div className="methods-container">
                <section id="appendSection">
                  <h2>append()</h2>
                  <p>
                    The append() method in a list adds a single element to the
                    end of the list.
                  </p>
                  <p>Syntax: list.append(element)</p>
                  <label>Enter Element:</label>
                  <input
                    type="text"
                    placeholder="Enter value"
                    onChange={this.onChangeAppendValue}
                    value={dummyAppendValue}
                  />
                  <button type="button" onClick={this.addAppendValue}>
                    Add
                  </button>
                </section>
                <section id="extendSection">
                  <h2>extend()</h2>
                  <p>
                    The extend() adds all elements from another list to the end
                    of the current list.
                  </p>
                  <p>Syntax: list.extend(iterable)</p>
                  <label>Enter Sequence:</label>
                  <input
                    className="sequence-input"
                    type="text"
                    placeholder={listDataValues.length===10?"Maximum length(10) is exceeded":`Enter comma-separated values (max ${10 - listDataValues.length})`}
                    value={`${[...dummyExtendList]}`}
                    onChange={this.onChangeExtendValues}
                  />
                  <button type="button" disabled={listDataValues.length === 10} onClick={this.addExtendList}
                   className={listDataValues.length === 10 ? "disabled-button" : ""}>Merge</button>
                </section>
                <section id="popSection">
                  <h2>pop()</h2>
                  <p>
                    The pop() method removes and returns the last element of the
                    list, or the element at the specified index..
                  </p>
                  <p>Syntax: list.pop([index])</p>
                  <button type="button" onClick={this.popListItem}>Pop Item</button>
                </section>
                <section id="indexSection">
                  <h2>index()</h2>
                  <p>
                    The index() method returns the index of the first occurrence
                    of the specified element.
                  </p>
                  <p>Syntax: list.index(element)</p>
                  <label>Enter Value:</label>
                  <input type="text" placeholder="Enter Value" onChange={this.onChangeIndexValue} 
                  value={dummyFindIndexValue}/>

                  <button type="button" onClick={this.findListIndex}>Find Index</button>
                </section>
                <section id="reverseSection">
                  <h2>reverse()</h2>
                  <p>
                    The reverse() method reverses the order of the elements in
                    the list in place.
                  </p>
                  <p>Syntax: list.reverse()</p>
                  <button type="button" onClick={this.reverseList}>Reverse</button>
                </section>
                <section id="removeSection">
                  <h2>remove()</h2>
                  <p>
                    The remove() method removes the first occurrence of the
                    specified element from the list.
                  </p>
                  <p>Syntax: list.remove(element)</p>
                  <label>Enter Element:</label>
                  <input type="text" placeholder="Enter Value" value={dummyRemoveValue} onChange={this.onChangeRemoveValue}/>
                  <button type="button" onClick={this.removeListValue}>Remove</button>
                </section>
                <section id="insertSection">
                  <h2>insert()</h2>
                  <p>
                    The insert() method inserts an element at the specified
                    position.
                  </p>
                  <p>Syntax: list.insert(index,value)</p>
                  <label>Index:</label>
                  <input type="text" placeholder="Enter Index" onChange={this.onChangeInsertIndexValue} value={dummyIndexValue}/>
                  <label>Value:</label>
                  <input type="text" placeholder="Enter Value" onChange={this.onChangeValue} value={dummyValue}/>
                  <button type="button" onClick={this.insertIndexListValue}>Insert</button>
                </section>
                <section id="countSection">
                  <h2>count()</h2>
                  <p>
                    The count() method returns the number of times a specified
                    value occurs in the list.
                  </p>
                  <p>Syntax: list.count(value)</p>
                  <label>Enter Value:</label>
                  <input
                    type="text"
                    placeholder="Enter value"
                    className="index-input"
                    onChange={this.getCountValue}
                    value={dummyCountValue}
                  />
                  <button type="button" onClick={this.countListValue}>Count</button>
                </section>
                <section id="clearSection">
                  <h2>clear()</h2>
                  <p>The clear() method removes all elements from the list.</p>
                  <p>Syntax: list.clear()</p>
                  <button type="button" onClick={this.clearList}>Clear</button>
                </section>
                <section id="minSection">
                  <h2>min()</h2>
                  <p>
                    The min() method returns the smallest element in the list.
                  </p>
                  <p>Syntax: min(list)</p>
                  <button type="button" onClick={this.findMinimum}>Find Minimum</button>
                </section>
                <section id="maxSection">
                  <h2>max()</h2>
                  <p>
                    The max() method returns the largest element in the list.
                  </p>
                  <p>Syntax: max(list)</p>
                  <button type="button" onClick={this.findMaximum}>Find Maximim</button>
                </section>
                <section id="sumSection">
                  <h2>sum()</h2>
                  <p>
                    The sum() method returns the sum of all elements in the
                    list.
                  </p>
                  <p>Syntax: sum(list)</p>
                  <button onClick={this.findListSum}>Sum</button>
                </section>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default List;


