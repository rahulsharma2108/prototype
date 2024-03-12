import logo from './logo.svg';
import './App.scss';
import { NavBar } from './components/NavBar';
import { Sidebar } from './components/SideBar/SideBar';
import { Content } from './components/Content/Content';
import { useState } from 'react';

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedNav, setSelectedNav] = useState('discover');
  const toggleSideBar = (clickedItem, activeItem)=>{
  if(clickedItem === activeItem)
    setShowSidebar(!showSidebar)
    setSelectedNav(clickedItem)
  }
  return (
    <div className='layout'>
      <nav>
        <NavBar toggleNav={toggleSideBar}/>  
      </nav>
      
     {showSidebar && <div className='sidebar-container'>
        <Sidebar selectedNav={selectedNav}/>
      </div>}
      <div className='content-container'>
        <Content/>
      </div>
      

    </div>
  );
}

export default App;
