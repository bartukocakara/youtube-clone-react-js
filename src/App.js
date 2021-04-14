import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Header from  "./components/header/Header";
import Sidebar from  "./components/sidebar/Sidebar";
import HomeScreen from "./components/screens/homeScreen/HomeScreen";
import LoginScreen from "./components/screens/loginScreen/LoginScreen";
import { BrowserRouter as Redirect, Route, Switch, useHistory } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./_app.scss"; 
import { useSelector } from 'react-redux';


const Layout = ({ children }) => {
    const [sidebar, toggleSidebar] = useState(false)
 
    const handleToggleSidebar = () => toggleSidebar(value => !value)
 
    return (
       <>
          <Header handleToggleSidebar={handleToggleSidebar} />
          <div className='app__container'>
             <Sidebar
                sidebar={sidebar}
                handleToggleSidebar={handleToggleSidebar}
             />
             <Container fluid className='app__main'>
                {children}
             </Container>
          </div>
       </>
    )
 }


const App = () => {

    const { accessToken, loading } = useSelector(state => state.auth)

    const history = useHistory()

    useEffect(() => { 

        if(!loading && !accessToken) {
            history.push('/auth');
        }


    }, [accessToken, loading, history])

    return (

            <Switch>
                <Route path='/' exact>
                    <Layout>
                        <HomeScreen />
                    </Layout>
                </Route>

                <Route path='/auth'>
                    <LoginScreen />
                </Route>

                <Route path='/search'>
                    <Layout>
                        <h1>Search</h1>
                    </Layout>
                </Route>
                

                <Route>
                    <Redirect to='/' />
                </Route>
            </Switch>
   )
}

export default App
