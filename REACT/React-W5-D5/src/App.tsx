import './App.css'
import Counter from './components/Counter'
import CounterTwo from './components/CounterTwo'
import Hello from './components/Hello'
import SearchBox from './components/SearchBox'
import ThemeProvider from './components/ThemeProvider'
import Header from './components/Header';
import Search from './components/Search'

function App() {

  return (
    <div className="App">
      <Hello 
        who={{ name: "Hoge", friend: true }} 
        message="How are you"
        renderMessage={(m) => <i>{m}</i>}
      />

      <hr/>

      <Counter />
      <hr/>

      <CounterTwo 
        incrementStep={1}
        decrementStep={2}
      />
      <hr />

      <SearchBox onSearch={(criteria: string) => console.log(criteria)}/>
      <hr />

      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <hr />

      <Search /> 
    </div>
  )
}

export default App
