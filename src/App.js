import logo from './logo.svg';
import './App.scss';
import { NavBar } from './components/NavBar';
import { Sidebar } from './components/SideBar/SideBar';
import { Content } from './components/Content/Content';
import { useEffect, useState } from 'react';
import { AppContext } from './AppContext';

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedNav, setSelectedNav] = useState('discover');
  const [selectedContentId, setSelectedContentId] = useState(null)
  const [selectedCampaignId, setSelectedCampaignId] = useState(null)

  useEffect(()=>{
    const searchParams = new URLSearchParams(window.location.search);
    for (const param of searchParams) {
      if(param[0] === "campaign"){
        setSelectedCampaignId(param[1])
      }
    }
  },[])

  const toggleSideBar = (clickedItem, activeItem)=>{
  if(clickedItem === activeItem)
    setShowSidebar(!showSidebar)
    setSelectedNav(clickedItem)
  }
  
  return (
    <div className='layout'>
      <AppContext.Provider value={{selectedContentId, setSelectedContentId, selectedCampaignId, setSelectedCampaignId}}>
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
