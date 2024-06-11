// import ChangeThemeButtonComponent from './components/ChangeThemeButton/ChangeThemeButtonComponent'
// import LoadingComponent from './components/LoadingComponent/LoadingComponent'
// import TypedLineComponent from './components/TypedLineComponent/TypedLineComponent'
import AboutView from './views/AboutView'
import './App.css'
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import StarfieldBackgroundComponent from './components/StarfieldBackgroundComponent/StarfieldBackgroundComponent'

function App() {
  return (
    <div style={{
      boxSizing: "content-box",
    }}>
      <StarfieldBackgroundComponent />
      <NavbarComponent />
      {/* <LoadingComponent /> */}
      {/* <TypedLineComponent textColor={"red"}
                          typedText={"Hello World!"}
                          animationDelay={0}
                          animationDuration={.5}
                          inifiniteCursor={false}
                          /> */}
      <AboutView />
    </div>
  )
}

export default App
