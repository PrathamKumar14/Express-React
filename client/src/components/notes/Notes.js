import React, { useState, useEffect} from 'react';
import './notes.css';

function Notes() {

  const[notes, setNotes] = useState({
    data: []
  });

  useEffect(() => {
      fetch("/exampleAPI/url")
        .then(res => res.json())
        .then(data => setNotes({data}));
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      <hr />
      <h2>
          {notes.data.map(note => {
            return <div>
              {note.topic} = {note.content}
            </div>;
          })}
     </h2>
    </div>
  );
}

export default Notes;
