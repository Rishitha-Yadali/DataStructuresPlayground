import Navbar from "../Navbar";
import "./index.css";
import DataNotation from "../DataNotation";

const Object = () => {
  return (
    <div class="list-bg-main">
      <div className="navbar-section">
        <Navbar />
      </div>
      <div class="list-bg-container">
        <div class="list-sidebar">
          <h1>Methods</h1>
          <ul class="list-ul-container">
            <ul className="list-ul-container">
              <a href="#addKeyPairSection" className="each-method">
                <li>Add key-pair</li>
              </a>
              <a href="#removeKeyPairSection" className="each-method">
                <li>Remove key-pair</li>
              </a>
              <a href="#modifyKeyPairSection" className="each-method">
                <li>Modify key-pair</li>
              </a>
              <a href="#objectKeysSection" className="each-method">
                <li>Object.keys()</li>
              </a>
              <a href="#objectValuesSection" className="each-method">
                <li>Object.values()</li>
              </a>
              <a href="#objectEntriesSection" className="each-method">
                <li>Object.entries()</li>
              </a>
            </ul>
          </ul>
        </div>
        <div class="list-main-section">
          <div class="data-notation-section">
            <DataNotation />
          </div>
          <div className="methods-container">
            <section id="addKeyPairSection">
              <h2>Add key-pair</h2>
              <p>This method adds a new key-value pair to the object.</p>
              <p>Syntax: object[key] = value</p>
              <label>Enter Key:</label>
              <input type="text" placeholder="Enter key" />
              <label>Enter Value:</label>
              <input type="text" placeholder="Enter value" />
              <button>Add Key-Pair</button>
            </section>

            <section id="removeKeyPairSection">
              <h2>Remove key-pair</h2>
              <p>This method removes a key-value pair from the object.</p>
              <p>Syntax: delete object[key]</p>
              <label>Enter Key to Remove:</label>
              <input type="text" placeholder="Enter key" />
              <button>Remove Key-Pair</button>
            </section>

            <section id="modifyKeyPairSection">
              <h2>Modify key-pair</h2>
              <p>
                This method modifies the value of an existing key-value pair in
                the object.
              </p>
              <p>Syntax: object[key] = newValue</p>
              <label>Enter Key:</label>
              <input type="text" placeholder="Enter key" />
              <label>Enter New Value:</label>
              <input type="text" placeholder="Enter new value" />
              <button>Modify Key-Pair</button>
            </section>

            <section id="objectKeysSection">
              <h2>Object.keys()</h2>
              <p>
                The Object.keys() method returns an array of a given object's
                own enumerable property names.
              </p>
              <p>Syntax: Object.keys(object)</p>
              <button>Get Keys</button>
            </section>

            <section id="objectValuesSection">
              <h2>Object.values()</h2>
              <p>
                The Object.values() method returns an array of a given object's
                own enumerable property values.
              </p>
              <p>Syntax: Object.values(object)</p>
              <button>Get Values</button>
            </section>

            <section id="objectEntriesSection">
              <h2>Object.entries()</h2>
              <p>
                The <code>Object.entries()</code> method returns an array of a
                given object's own enumerable property [key, value] pairs.
              </p>
              <p>Syntax: Object.entries(object)</p>
              <button>Get Entries</button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Object;
