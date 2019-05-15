import React from 'react';
import Story from './story'
import './App.css';

const stories = [
  'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/avengers-end-game-et00090482-07-12-2018-06-50-21.jpg',
  'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pokemon-detective-pikachu-et00088312-13-11-2018-10-58-13.jpg',
  'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/maharshi-et00081372-09-08-2018-10-00-31.jpg',
  'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/student-of-the-year-2-et00045192-17-04-2017-18-00-34.jpg',
  'https://in.bmscdn.com/Events/moviecard/bollyboom-guru-randhawa-india-tour-2-o-et00100451-2019-4-17-t-11-59-8.jpg'
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Story delay={2000}>
          {stories.map((s, idx) => <img src={s} key={idx} alt='img' />)}
        </Story>
      </header>
    </div>
  );
}

export default App;
