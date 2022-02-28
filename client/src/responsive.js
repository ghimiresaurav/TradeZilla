import {css} from 'styled-components';

export const mobile = (props) =>{
    return css`
        @media only screen and (max-width: 380px){
            ${props}
        `
}

export const tab = (props) =>{
    return css`
        @media only screen and (max-width: 860px){
            ${props}
        `
}

export const vTab = (props) =>{
    return css`
        @media only screen and (max-width: 700px){
            ${props}
        `
}