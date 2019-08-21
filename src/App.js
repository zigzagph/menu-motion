import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import './App.css';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;

class App extends Component{
    render() {
        return (
            <Wrapper>
                <Menu />
            </Wrapper>
        );
    }
}

export default App;