import logo from './logo.svg';
import './App.scss';
import { NavBar } from './components/NavBar';
import { Sidebar } from './components/SideBar/SideBar';
import { Content } from './components/Content/Content';
import { useState } from 'react';
import { AppContext } from './AppContext';

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedNav, setSelectedNav] = useState('discover');
  const [selectedContentId, setSelectedContentId] = useState(null)
  const toggleSideBar = (clickedItem, activeItem)=>{
  if(clickedItem === activeItem)
    setShowSidebar(!showSidebar)
    setSelectedNav(clickedItem)
  }
  return (
    <div className='layout'>
      <AppContext.Provider value={{selectedContentId, setSelectedContentId}}>
      <nav>
        <NavBar toggleNav={toggleSideBar}/>  
      </nav>
      
     {showSidebar && <div className='sidebar-container'>
        <Sidebar selectedNav={selectedNav}/>
      </div>}
      <div className='content-container'>
        <Content/>
      </div>
      </AppContext.Provider>

    </div>
  );
}

export default App;
