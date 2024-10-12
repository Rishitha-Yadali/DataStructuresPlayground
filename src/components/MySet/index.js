import Navbar from "../Navbar";
import "./index.css";
import DataNotation from "../DataNotation";
import { Component } from "react";
class MySet extends Component {
  state = {
    listDataValues: [],
    dummyAddValue: "",
    dummyUpdateValue: [],
    dummyRemoveValue: "",
    dummyDiscardValue: "",
    dummyUnionValue: "",
    dummyIntersectionValue: "",
    dummyDifferenceValue: "",
    dummySymmetricDifferenceValue: "",
    dummyIssubsetValue: "",
    dummyIssupersetValue: "",
    dummyIsdisjointValue: "",
    uniqueSet:[],
    dummyUnionValues:[],
    secondUniqueSet:[],
    showSetData:false,
    showUnionSets:false,
    

  };
  getDataValuesList = (valueList) => {
    const{listDataValues}=this.state
    this.setState({
      listDataValues: [...valueList],
      uniqueSet: [...new Set(valueList)]
    
    });
    if(listDataValues.length >= 0) {
      this.setState({
        showSetData: true
      })
    }
  };
  onChangeAddValue = (event) => {
    this.setState({ dummyAddValue: event.target.value });
  };
  addSetValue = () => {
    const{listDataValues,dummyAddValue,uniqueSet} = this.state; 
    if(dummyAddValue!==""){
      this.setState({
        showSetData:true
      })
    }
      if(listDataValues.length<10){
        if(dummyAddValue===""){
          alert("Value cannot be empty")
        }
        else{
        if(listDataValues.includes(dummyAddValue)){
            alert("Set must include unique values")
        }
      

        else{
          this.setState({
            listDataValues:[...listDataValues,dummyAddValue],
            uniqueSet:[...new Set([...listDataValues,...dummyAddValue])],
            dummyAddValue:""
          })
        }
      }
      }else{
        alert("Maximum length reached. Cannot add more values.")
      }
      this.setState({
        dummyAddValue: "",
      })
    
  }
  onChangeUpdateValue = (event) => {
    this.setState({ dummyUpdateValue:[...event.target.value.split(",")]});
  };
  updateSetValue=()=>{
    const{listDataValues,dummyUpdateValue}=this.state;
   
    if(dummyUpdateValue.length>0){
      this.setState({
        showSetData:true
      })
    }
    if(listDataValues.length+dummyUpdateValue.length<=10 ){
      this.setState({
        listDataValues:[...listDataValues,...dummyUpdateValue], 
        uniqueSet:[...new Set([...listDataValues,...dummyUpdateValue])],
        dummyUpdateValue:[]
      })
    }
    else{
      this.setState({
        listDataValues:[...listDataValues,...dummyUpdateValue.slice(0,10-dummyUpdateValue.length)],
        uniqueSet:[...new Set([...listDataValues,...dummyUpdateValue.slice(0,10-dummyUpdateValue.length)])],
        
        dummyUpdateValue:[],
        
      })

      alert(`${10-listDataValues.length} items updated max limit reached`)
    }

  }
  onChangeRemoveSetValue = (event) => {
    this.setState({ dummyRemoveValue: event.target.value });
  };
  removeSetItem=()=>{
    const{listDataValues,dummyRemoveValue,uniqueSet}=this.state;
    
    if(uniqueSet.includes(dummyRemoveValue)){
      this.setState({
        uniqueSet:uniqueSet.filter(item=>item!==dummyRemoveValue),
        listDataValues:listDataValues.filter(item=>item!==dummyRemoveValue),
        dummyRemoveValue: "",
        showSetData:true
      })
    }
    else{
      if(dummyRemoveValue===""){
        alert("Value cannot be empty")
      }
      else{
        alert(`Key Error: Value ${dummyRemoveValue} not found in the set.`)
      }
    }
    this.setState({ dummyRemoveValue: "" })
  }
  onChangeDiscardSetValue=(event)=>{
    this.setState({ dummyDiscardValue: event.target.value });
  }
  discardSetItem=()=>{
    const{dummyDiscardValue,listDataValues,uniqueSet}=this.state 
    if(listDataValues.length>=0 && dummyDiscardValue!==""){
      this.setState({
        showSetData:true
      })
    }
    if(uniqueSet.includes(dummyDiscardValue)){
      this.setState({
        uniqueSet:uniqueSet.filter(item=>item!==dummyDiscardValue),
        listDataValues:listDataValues.filter(item=>item!==dummyDiscardValue),
        dummyDiscardValue: ""
      })
    }
  
    this.setState({ dummyDiscardValue: "" })
  }
  onChangeUnionValues=(event)=>{
        this.setState({
          dummyUnionValues:[...event.target.value.split(",")]
         })
       
  }
 uniteSets=()=>{
      const{dummyUnionValues,listDataValues}=this.state
      this.setState({
        showUnionSets:true,
        showSetData:true
      })
      
   
      if(dummyUnionValues.length>10){
        this.setState({
          listDataValues:[...listDataValues],
          uniqueSet:[...new Set([...listDataValues])],
          secondUniqueSet:[...new Set([...dummyUnionValues.splice(0,11)])]
        })
        alert("10 items added maximum length exceeded")
      }else{
        this.setState({
          listDataValues:[...listDataValues],
          uniqueSet:[...new Set([...listDataValues])],
          secondUniqueSet:[...new Set([...dummyUnionValues])]
        })
        
      }
      this.setState({
        dummyUnionValues:[],
     
      })
      
  }
  render() {
    const{listDataValues,dummyAddValue,dummyUpdateValue,dummyDiscardValue,dummyRemoveValue,uniqueSet,showSetData,
      dummyUnionValues,secondUniqueSet,showUnionSets} = this.state;
 
    const uniqueItemsList=[...new Set(listDataValues)]
    const commonValues=[...new Set([...uniqueSet,...secondUniqueSet])]
    console.log(commonValues)
   
    return (
      <div class="list-bg-main">
        <div className="navbar-section">
          <Navbar />
        </div>
        <div class="list-bg-container">
          <div class="list-sidebar">
            <h1>Methods</h1>
            <ul class="list-ul-container">
              <a href="#addSection" className="each-method">
                <li>add()</li>
              </a>
              <a href="#updateSection" className="each-method">
                <li>update()</li>
              </a>
              <a href="#removeSection" className="each-method">
                <li>remove()</li>
              </a>
              <a href="#discardSection" className="each-method">
                <li>discard()</li>
              </a>
              <a href="#unionSection" className="each-method">
                <li>union()</li>
              </a>
              <a href="#intersectionSection" className="each-method">
                <li>intersection()</li>
              </a>
              <a href="#differenceSection" className="each-method">
                <li>difference()</li>
              </a>
              <a href="#symmetricDifferenceSection" className="each-method">
                <li>symmetric_difference()</li>
              </a>
              <a href="#issubsetSection" className="each-method">
                <li>issubset()</li>
              </a>
              <a href="#issupersetSection" className="each-method">
                <li>issuperset()</li>
              </a>
              <a href="#isdisjointSection" className="each-method">
                <li>isdisjoint()</li>
              </a>
            </ul>
          </div>
          <div class="list-main-section">
            <div class="data-notation-section">
              <DataNotation onDataChange={this.getDataValuesList} />
              <p className="dummy-list-notation list-notation">{`INPUT SET : { ${listDataValues.join(", ")} }`}</p>
              {showSetData?<p className="list-notation">{`SET : { ${uniqueItemsList.join(
                ", "
              )} }`}</p>:""}
              
            </div>
            <div className="methods-container">
              <section id="addSection">
                <h2>add()</h2>
                <p>The add() method adds a single element to the set.</p>
                <p>Syntax: set.add(element)</p>
                <label>Enter Element:</label>
                <input type="text" placeholder="Enter value" onChange={this.onChangeAddValue} value={dummyAddValue}/>
                <button type="button" onClick={this.addSetValue}>Add</button>
              </section>

              <section id="updateSection">
                <h2>update()</h2>
                <p>
                  The update() method adds all elements from another set or
                  iterable to the current set.
                </p>
                <p>Syntax: set.update(iterable)</p>
                <label>Enter Elements:</label>
                <input type="text" 
                placeholder={listDataValues.length===10?"Maximum length(10) is exceeded":`Enter comma-separated values (max ${10 - listDataValues.length})`}
                className="sequence-input"
                onChange={this.onChangeUpdateValue} value={dummyUpdateValue}/>
                <button type="button" onClick={this.updateSetValue} disabled={listDataValues.length === 10}
                className={listDataValues.length === 10 ? "disabled-button" : ""}>Update</button>
              </section>

              <section id="removeSection">
                <h2>remove()</h2>
                <p>
                  The remove() method removes a specified element from the set.
                  Raises KeyError if the element is not found.
                </p>
                <p>Syntax: set.remove(element)</p>
                <label>Enter Element to Remove:</label>
                <input type="text" placeholder="Enter value"onChange={this.onChangeRemoveSetValue} value={dummyRemoveValue}/>
                <button type="button" onClick={this.removeSetItem}>Remove</button>
              </section>

              <section id="discardSection">
                <h2>discard()</h2>
                <p>
                  The discard() method removes a specified element from the set.
                  Does not raise an error if the element is not found.
                </p>
                <p>Syntax: set.discard(element)</p>
                <label>Enter Element to Discard:</label>
                <input type="text" placeholder="Enter value" onChange={this.onChangeDiscardSetValue} value={dummyDiscardValue}/>
                <button type="button" onClick={this.discardSetItem}>Discard</button>
              </section>

              <section id="unionSection">
                <h2>union()</h2>
                <p>
                  The union() method returns a new set containing all elements
                  from the original set and the specified sets.
                </p>
                <p>Syntax: set1.union(set2)</p>
                <label>Enter Sets to Unite:</label>
                <input type="text" 
                placeholder={dummyUnionValues.length===10?"Maximum length(10) is exceeded":`Enter comma-separated values (max ${10 - dummyUnionValues.length})`}
                className="sequence-input"
                onChange={this.onChangeUnionValues}
                value={dummyUnionValues}
                />
                <button type="button" onClick={this.uniteSets}  disabled={dummyUnionValues.length > 10}
                className={dummyUnionValues.length > 10 ? "disabled-button" : ""}>Unite</button><br/>
                {showUnionSets?<><label>{`Set 1 : { ${uniqueSet.join(", ")} }`}</label>
                <label>{`Set 2 : { ${secondUniqueSet.join(", ")} }`}</label>
                <label>{`Union Set: { ${commonValues.join(", ")} }`}</label></>
                :""
                
                }
                
              </section>

              <section id="intersectionSection">
                <h2>intersection()</h2>
                <p>
                  The intersection() method returns a new set containing only
                  elements that are present in both sets.
                </p>
                <p>Syntax: set.intersection(*others)</p>
                <label>Enter Sets to Intersect:</label>
                <input type="text" 
                placeholder={listDataValues.length===10?"Maximum length(10) is exceeded":`Enter comma-separated values (max ${10 - listDataValues.length})`}
                className="sequence-input"/>
                <button type="button"   disabled={listDataValues.length === 10}
                className={listDataValues.length === 10 ? "disabled-button" : ""}>Intersect</button>
              </section>

              <section id="differenceSection">
                <h2>difference()</h2>
                <p>
                  The difference() method returns a new set containing elements
                  that are in the original set but not in the specified sets.
                </p>
                <p>Syntax: set.difference(*others)</p>
                <label>Enter Sets to Subtract:</label>
                <input type="text" 
                placeholder={listDataValues.length===10?"Maximum length(10) is exceeded":`Enter comma-separated values (max ${10 - listDataValues.length})`}
                className="sequence-input"/>
                <button type="button"   disabled={listDataValues.length === 10}
                className={listDataValues.length === 10 ? "disabled-button" : ""}>Subtract</button>
              </section>

              <section id="symmetricDifferenceSection">
                <h2>symmetric_difference()</h2>
                <p>
                  The symmetric_difference() method returns a new set containing
                  elements that are in either of the sets but not in both.
                </p>
                <p>Syntax: set.symmetric_difference(other)</p>
                <label>Enter Set to Compare:</label>
                <input type="text" 
                placeholder={listDataValues.length===10?"Maximum length(10) is exceeded":`Enter comma-separated values (max ${10 - listDataValues.length})`}
                className="sequence-input"/>
                <button type="button"  disabled={listDataValues.length === 10}
                className={listDataValues.length === 10 ? "disabled-button" : ""}>Find Symmetric Difference</button>
              </section>

              <section id="issubsetSection">
                <h2>issubset()</h2>
                <p>
                  The issubset() method returns True if all elements of the set
                  are present in the specified set.
                </p>
                <p>Syntax: set.issubset(other)</p>
              </section>

              <section id="issupersetSection">
                <h2>issuperset()</h2>
                <p>
                  The issuperset() method returns True if all elements of the
                  specified set are present in the original set.
                </p>
                <p>Syntax: set.issuperset(other)</p>
              </section>

              <section id="isdisjointSection">
                <h2>isdisjoint()</h2>
                <p>
                  The isdisjoint() method returns True if no elements are shared
                  between the sets.
                </p>
                <p>Syntax: set.isdisjoint(other)</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MySet;
