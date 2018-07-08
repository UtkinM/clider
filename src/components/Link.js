import React, { Component } from 'react';
import styled from 'styled-components';

const StylesLink = styled.a`
    color: ${props => props.active ? 'pink' : '#fff'};
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    padding-right: 33px;
    border-right: 1px dotted #fff;
    
    &:hover {
        color: #8d8d8d;
        text-decoration: none;
    }
    
    &: last-child {
        border-right: none;
    }
`;

class Link extends React.Component {
    render() {
        return (
                <StylesLink href={this.props.link}> {this.props.text}</StylesLink>
        )
    }
}

export default Link