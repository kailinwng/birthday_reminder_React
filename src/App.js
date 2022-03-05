import React, { useState } from 'react'; 
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data) //destructured array: dar
  return ( 
    <main> {/*css component*/} {/* */}
      <section className='container'> {/*container is css component*/}
        <h3>{people.length} birthdays today</h3>
        <List people={people}> {/*pass in value to List object*/}
          {/*imported type from List.js*/}
        </List>
        <button onClick={() => setPeople([])}>
                          {/*anfn for annonymous function */
                          /*clear the array by setting people as [] */ }
          clear all
        </button>
      </section> 
    </main>
  );
}

export default App;
