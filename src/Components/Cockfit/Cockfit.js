import React from 'react';
import styled from 'styled-components';

const cockpit = (props) => {

  return (
         <div>
         <h1>Im working on reactjs</h1>
         <button alt = {props.showPersons}
           onClick = {props.clicked}>Toggle Persons
         </button>
         </div>

 )

};

export default cockpit;

/*
const cockpit = (props) => {

  const StyledButton = styled.button`
        background-color:{props => props.alt ? red : green};
        font: inherit;
        border: 1px solid blue;
        padding: 8px;
        cursor: pointer;

        &:hover {
          backgroundColor:{props => props.alt ? red : salmon};
          color:black;
        }

  `;

  const class1='cls';

   return (

          <h1 className={class1}>Im working on reactjs</h1>
          <StyledButton alt={props.showPersons}
            onClick={props.clicked}>Toggle Persons
          </StyledButton>

  );
};

export default cockpit;

*/
