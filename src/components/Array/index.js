import Navbar from "../Navbar";
import "./index.css";
import DataNotation from "../DataNotation";
const Array = () => {
  return (
    <div className="list-bg-main">
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="list-bg-container">
        <div className="list-sidebar">
          <h1>Methods</h1>
          <ul class="list-ul-container">
            <a href="#indexOfSection" class="each-method">
              <li>indexOf()</li>
            </a>
            <a href="#lastIndexOfSection" class="each-method">
              <li>lastIndexOf()</li>
            </a>
            <a href="#spliceSection" class="each-method">
              <li>splice()</li>
            </a>
            <a href="#sliceSection" class="each-method">
              <li>slice()</li>
            </a>
            <a href="#joinSection" class="each-method">
              <li>join()</li>
            </a>
            <a href="#concatSection" class="each-method">
              <li>concat()</li>
            </a>
            <a href="#unshiftSection" class="each-method">
              <li>unshift()</li>
            </a>
            <a href="#shiftSection" class="each-method">
              <li>shift()</li>
            </a>
            <a href="#findIndexSection" class="each-method">
              <li>findIndex()</li>
            </a>
            <a href="#includesSection" class="each-method">
              <li>includes()</li>
            </a>
          </ul>
        </div>
        <div className="list-main-section">
          <div class="data-notation-section">
            <DataNotation />
          </div>
          <div className="methods-container">
          <section id="indexOfSection">
            <h2>indexOf()</h2>
            <p>The <code>indexOf()</code> method returns the first index at which a given element can be found in the array.</p>
            <p>Syntax: array.indexOf(element)</p>
            <label>Enter Element:</label>
            <input type="text" placeholder="Enter value"/>
            <button>Find Index</button>
        </section>
        
        <section id="lastIndexOfSection">
            <h2>lastIndexOf()</h2>
            <p>The <code>lastIndexOf()</code> method returns the last index at which a given element can be found in the array.</p>
            <p>Syntax: array.lastIndexOf(element)</p>
            <label>Enter Element:</label>
            <input type="text" placeholder="Enter value"/>
            <button>Find Last Index</button>
        </section>
        
        <section id="spliceSection">
            <h2>splice()</h2>
            <p>The <code>splice()</code> method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.</p>
            <p>Syntax: array.splice(start, deleteCount, item1, ..., itemN)</p>
            <label>Start Index:</label>
            <input type="number" placeholder="Enter start index"/>
            <label>Delete Count:</label>
            <input type="number" placeholder="Enter delete count"/>
            <label>Items:</label>
            <input type="text" placeholder="Enter items separated by comma"/>
            <button>Splice Array</button>
        </section>
        
        <section id="sliceSection">
            <h2>slice()</h2>
            <p>The <code>slice()</code> method returns a shallow copy of a portion of an array.</p>
            <p>Syntax: array.slice(start, end)</p>
            <label>Start Index:</label>
            <input type="number" placeholder="Enter start index"/>
            <label>End Index:</label>
            <input type="number" placeholder="Enter end index"/>
            <button>Slice Array</button>
        </section>
      
        <section id="joinSection">
            <h2>join()</h2>
            <p>The <code>join()</code> method joins all elements of an array into a string.</p>
            <p>Syntax: array.join(separator)</p>
            <label>Separator:</label>
            <input type="text" placeholder="Enter separator"/>
            <button>Join Array</button>
        </section>

        <section id="concatSection">
            <h2>concat()</h2>
            <p>The <code>concat()</code> method merges two or more arrays.</p>
            <p>Syntax: array.concat(array2, ..., arrayN)</p>
            <label>Enter Arrays:</label>
            <input type="text" placeholder="Enter arrays separated by comma"/>
            <button>Concat Array</button>
        </section>
        
        <section id="unshiftSection">
            <h2>unshift()</h2>
            <p>The <code>unshift()</code> method adds one or more elements to the beginning of an array and returns the new length of the array.</p>
            <p>Syntax: array.unshift(element1, ..., elementN)</p>
            <label>Enter Elements:</label>
            <input type="text" placeholder="Enter elements separated by comma"/>
            <button>Unshift Array</button>
        </section>

        <section id="shiftSection">
            <h2>shift()</h2>
            <p>The <code>shift()</code> method removes the first element from an array and returns that removed element.</p>
            <p>Syntax: array.shift()</p>
            <button>Shift Array</button>
        </section>

        <section id="findIndexSection">
            <h2>findIndex()</h2>
            <p>The <code>findIndex()</code> method returns the index of the first element in the array that satisfies the provided testing function.</p>
            <p>Syntax: array.findIndex(callback)</p>
            <label>Enter Callback Function:</label>
            <input type="text" placeholder="Enter function"/>
            <button>Find Index</button>
        </section>

        <section id="includesSection">
            <h2>includes()</h2>
            <p>The <code>includes()</code> method determines whether an array includes a certain element, returning true or false as appropriate.</p>
            <p>Syntax: array.includes(element)</p>
            <label>Enter Element:</label>
            <input type="text" placeholder="Enter value"/>
            <button>Check Includes</button>
        </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Array;
