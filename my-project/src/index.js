/*import React from "react"
import ReactDOM from "react-dom"

const navbar = (
  <nav>
  <h1>Bob's Bistro</h1>
  <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
  </ul>
</nav>
)
ReactDOM.render(navbar,document.getElementById("root"))
//ReactDOM.createRoot(document.getElementById("root")).render(navbar)
//const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(navbar)*/
import React from "react"
import ReactDOM from "react-dom"
/*const page = (
 <div>
  <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
 </div>
  
)*/
/*function TemporaryName(){
  return(
    <div>
  <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
 </div>
  )
}*/

function Header(){
  return(
     <header>
      <nav className="nav">
      <img src="Image/react7473.logowik.com.webp.png(3).webp" alt="" className="logo" />
      <ul className="nav-items">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
       </nav>
       </header>
       
  )
}
function Footer(){
  return(
    <footer className="right-list">
        <small>© 2023 Saal development. All rights reserved.</small>
      </footer>
  )
}
function MainContent(){
  return(
    <div className="maincontent">
      <h1>Why i'm excited to learn <span>React</span></h1>
      <ol className="main-list">
        <li>it is fun to learn</li>
        <li>it will improve my coding</li>
        <li>it will give me a better understanding of JavaScript</li>
      </ol>
    </div>
  )
}
function Page(){
  return(
    <div>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  )
}
ReactDOM.render(<Page/>,document.getElementById("root"))
 