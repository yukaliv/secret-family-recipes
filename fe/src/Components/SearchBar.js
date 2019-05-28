import React from 'react';
import { connect } from 'react-redux';
import { search } from '../Actions';
import styled from 'styled-components';


const InputDiv = styled.div`
display: flex; 
justify-content: center;
align-items: center;
margin: 30px;
`;
const Input = styled.input`
width: 350px;
height: 40px;

`;

class SearchBar extends React.Component {
    render() {
        return (
            <InputDiv>
                <Input className='searchBarInput'
                    placeholder="Search for Recipes..."
                    onChange={(event) => this.props.search(event.target.value, this.props.recipes)}
                />
            </InputDiv >
        )
    }

};

const mapStateToProps = (state) => ({
    recipes: state.recipes
})

export default connect(
    mapStateToProps, { search })
    (SearchBar);