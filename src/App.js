import React from 'react';
import './App.css';

const Reset = () => {
  return (
    <a href="" onClick={console.log('reset')} id="resetBtn"></a>
  );
}

const Agent = (props) => {
  return (
    <div className="agent">
      <span>{props.nps}</span>
      <p>{props.key}</p>
    </div>
  );
}

const Header = (props) => {
  return (
      <header>
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>

          <Reset />

          <div className="supporting">

          </div>
      </header>
  );
}

const Stats = (props) => {
  return (
    <div className="stats">
      <span>{props.average}</span>
      <span>{props.total}</span>
      <span>{props.calls}</span>
    </div>
  );
}

const App = (prop) => {
  return (
    <div className='container'>
        <Header title="Call Routing" subtitle="Text" />

        <div id="nn">
          {prop.allAgents.map(e => 
              <Agent key={e.id} nps={e.nps} />    
          )}

          <Stats average={8.8} total={100} calls={4} />
        </div>

        <div id="traditional">
          {prop.allAgents.map(e => 
              <Agent key={e.id} nps={e.nps} />    
          )}

          <Stats average={8.8} total={100} calls={4} />
        </div>
        
    </div>
  );
}

export default App;
