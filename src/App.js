import { useEffect, useState } from 'react';
import './App.css';
import { firestore } from './data/fireBase';

function App() {
  const [value2,setValue2] = useState();
  const myName = firestore.collection('myName');
  useEffect(()=>{
    const myName = firestore.collection('myName');
    myName.doc("hkbg0ek0JPsF3BiU1jpC").get().then((doc)=>{
      const value = doc.data();
      setValue2(value);
    })
  },[])
  console.log(value2);
  return (
    <div className="App">
    </div>
  );
}

export default App;
