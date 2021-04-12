import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Header from  "./components/header/Header";
import Sidebar from  "./components/sidebar/Sidebar";
import HomeScreen from "./components/screens/HomeScreen";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./_app.scss"; 
const App = () => {

    const [ sidebar, toggleSidebar ] = useState(false);

    const handleToggleSidebar = () => toggleSidebar(value => !value)

    return (
        <>
          <Header handleToggleSidebar={handleToggleSidebar}/>
                <div className="app_container border border-info" >
                <Sidebar 
                    sidebar={sidebar}
                    handleToggleSidebar={handleToggleSidebar} />
                <Container fluid className="app_main border border-warning">

                    <HomeScreen />

                </Container>
          </div>
        </>
    )
}

export default App
