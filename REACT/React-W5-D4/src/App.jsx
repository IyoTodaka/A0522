import { useDispatch, useSelector } from 'react-redux'
import { Cat, Backpack } from 'react-kawaii'
import { updateCatMood, MOODS } from './moodOld'
import './App.css'

function App() {

  const dispatch = useDispatch()
  const currentMood = useSelector(state => state.mood)

  const handleMoodUpdate = (evt) => {
    const mood = evt.target.dataset.type
    dispatch(updateCatMood(mood))
  }

  return (
    <div className="App">
      <Cat size={320} mood={currentMood} />
      <section>
        {Object.values(MOODS).map(mood => (
          <button
            data-type={mood}
            key={mood}
            onClick={handleMoodUpdate}
          >
            {mood}
          </button>
        ))}
      </section>
    </div>
  )
}

export default App
