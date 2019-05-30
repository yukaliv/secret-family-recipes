import React from 'react';
import { connect } from 'react-redux';
import { search } from '../Actions';
import styled from 'styled-components';

const InputDiv = styled.div`
display: flex; 
justify-content: center;
align-items: center;
margin: 10px 0 30px 0; 
`;
const Input = styled.input`
width: 350px;
height: 40px;
border: none;
border-bottom: 1px solid #1f1f44;
font-size: 15px;
@media (max-width: 500px) {
text-align: center;
width: 300px;
}
`;
   
const Titleh2 = styled.h2`
display: flex; 
justify-content: center;
align-items: center;
padding: 25px;
margin: 0;
font-size: 28px;
color: #1f1f44;
border-top: solid 1px #1f1f44;
padding: 45px 0;
`;



class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <div>
                 <Titleh2>Recipes</Titleh2></div>
            <InputDiv>
                <Input className='searchBarInput'
                    placeholder="Search for Recipes..."
                    onChange={(event) => this.props.search(event.target.value, this.props.recipes)}
                />
            </InputDiv >
            </div>
        )
    }

};

const mapStateToProps = (state) => ({
    recipes: state.recipes
})

export default connect(
    mapStateToProps, { search })
    (SearchBar);