import Navbar from "../Navbar";
import "./index.css";
import DataNotation from "../DataNotation";

const Dictionary = () => {
  return (
    <div className="list-bg-main">
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="list-bg-container">
        <div class="list-sidebar">
          <h1>Methods</h1>
          <ul className="list-ul-container">
            <a href="#clearSection" className="each-method">
              <li>clear()</li>
            </a>
            <a href="#copySection" className="each-method">
              <li>copy()</li>
            </a>
            <a href="#fromkeysSection" className="each-method">
              <li>fromkeys()</li>
            </a>
            <a href="#getSection" className="each-method">
              <li>get()</li>
            </a>
            <a href="#itemsSection" className="each-method">
              <li>items()</li>
            </a>
            <a href="#keysSection" className="each-method">
              <li>keys()</li>
            </a>
            <a href="#valuesSection" className="each-method">
              <li>values()</li>
            </a>
            <a href="#popSection" className="each-method">
              <li>pop()</li>
            </a>
            <a href="#popitemSection" className="each-method">
              <li>popitem()</li>
            </a>
            <a href="#updateSection" className="each-method">
              <li>update()</li>
            </a>
          </ul>
        </div>
        <div className="list-main-section">
          <div class="data-notation-section">
            <DataNotation />
          </div>
          <div className="methods-container">
            <section id="clearSection">
              <h2>clear()</h2>
              <p>
                The clear() method removes all elements from the dictionary.
              </p>
              <p>Syntax: dict.clear()</p>
              <button>Clear Dictionary</button>
            </section>

            <section id="copySection">
              <h2>copy()</h2>
              <p>The copy() method returns a shallow copy of the dictionary.</p>
              <p>Syntax: dict.copy()</p>
              <button>Copy Dictionary</button>
            </section>

            <section id="fromkeysSection">
              <h2>fromkeys()</h2>
              <p>
                The fromkeys() method creates a new dictionary from the given
                keys and an optional value.
              </p>
              <p>Syntax: dict.fromkeys(keys, value)</p>
              <label>Enter Keys:</label>
              <input type="text" placeholder="Enter comma-separated keys" />
              <label>Enter Value:</label>
              <input type="text" placeholder="Enter value" />
              <button>Create Dictionary</button>
            </section>

            <section id="getSection">
              <h2>get()</h2>
              <p>
                The get() method returns the value for the specified key if key
                is in the dictionary.
              </p>
              <p>Syntax: dict.get(key, default=None)</p>
              <label>Enter Key:</label>
              <input type="text" placeholder="Enter key" />
              <button>Get Value</button>
            </section>

            <section id="itemsSection">
              <h2>items()</h2>
              <p>
                The items() method returns a view object of the dictionary's
                key-value pairs.
              </p>
              <p>Syntax: dict.items()</p>
              <button>Get Items</button>
            </section>

            <section id="keysSection">
              <h2>keys()</h2>
              <p>
                The keys() method returns a view object of the dictionary's
                keys.
              </p>
              <p>Syntax: dict.keys()</p>
              <button>Get Keys</button>
            </section>

            <section id="valuesSection">
              <h2>values()</h2>
              <p>
                The values() method returns a view object of the dictionary's
                values.
              </p>
              <p>Syntax: dict.values()</p>
              <button>Get Values</button>
            </section>

            <section id="popSection">
              <h2>pop()</h2>
              <p>
                The pop() method removes the specified key and returns the
                corresponding value.
              </p>
              <p>Syntax: dict.pop(key)</p>
              <label>Enter Key:</label>
              <input type="text" placeholder="Enter key" />
              <button>Pop Key</button>
            </section>

            <section id="popitemSection">
              <h2>popitem()</h2>
              <p>
                The popitem() method removes and returns the last key-value pair
                inserted into the dictionary.
              </p>
              <p>Syntax: dict.popitem()</p>
              <button>Pop Item</button>
            </section>

            <section id="updateSection">
              <h2>update()</h2>
              <p>
                The update() method updates the dictionary with elements from
                another dictionary object or from an iterable of key-value
                pairs.
              </p>
              <p>Syntax: dict.update([other])</p>
              <label>Enter Key-Value Pairs:</label>
              <input
                type="text"
                placeholder="Enter comma-separated key=value pairs"
              />
              <button>Update Dictionary</button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
