import React from 'react'
import './App.css'
import ClassNamesComponent from './components/ClassNamesComponent'
import ReactMediaComponent from './components/ReactMediaComponent'
import ReactResponsiveComponent from './components/ReactResponsiveComponent'
import ReactPlayerComponent from './components/ReactPlayerComponent'
import AxiosComponent from './components/AxiosComponent'
import LodashComponent from './components/LodashComponent'
import FramerMotionComponent from './components/FramerMotionComponent'
import ReactHookFormComponent from './components/ReactHookFormComponent'

function App() {
  React.useEffect(() => {
    console.log('App rendering..')
  })
  return (
    <div className="App">
      <h1>Useful NPM packages</h1>
      <hr />
      <FramerMotionComponent />
      <hr />
      <ClassNamesComponent />
      <hr />
      <ReactMediaComponent />
      <hr />
      <ReactResponsiveComponent />
      <hr />
      <ReactPlayerComponent />
      <hr />
      <AxiosComponent />
      <hr />
      <LodashComponent />
      <hr />
      <ReactHookFormComponent />
    </div>
  )
}

export default App
