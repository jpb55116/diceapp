import React, { Component } from 'react';

class DiceTwelve extends Component {

    render() {
        let rollValue;
        let xValue;

        if (this.props.diceId === "12") {
            rollValue = this.props.rollValue;
        } else {
            rollValue = '';
        }

        if(this.props.rollValue === "11"){
            xValue = "240";
        } else if(this.props.rollValue === "1"){
            xValue = "270"
        } else if(parseInt(this.props.rollValue,0) > 9){
            xValue = "225";
        } else {
            xValue ="255"
        }

        return (
            <svg viewBox="0 0 604 633" xmlns="http://www.w3.org/2000/svg" onClick={this.props.rollDice} id="12">
                <g id="Page-1" fill="none" fillRule="evenodd">
                    <g id="Desktop" transform="translate(-911 -190)" stroke="#D0021B" strokeWidth="5">
                    <g id="d12" transform="translate(913.221174 190.701364)">
                        <path id="Path-2" d="M299.580592.18580239V148.278479L145.035356 266.588417l58.419249 180.540222h190.71636l59.890975-180.540222"/>
                        <path id="Path-3" d="M145.212499 266.125959L2.22459997 219.292632.20922447 414.625814 113.425284 570.923477l187.383703 59.37223 184.817732-60.382773 113.274702-156.297663 1.073881-193.83155"/>
                        <path id="Path-4" d="M1.8557929 218.927439L116.175358 59.5241747 299.59337.92953084 482.478767 60.5347173 599.011775 218.927439 454.06194 265.883657l-154.46857-117.99716"/>
                        <path d="M113.309367 570.715127l90.312286-123.520584" id="Path-5"/>
                        <path d="M394.454248 569.466992l91.572806-123.282991" id="Path-5" transform="matrix(-1 0 0 1 880.481302 0)"/>
                        <text fontFamily="Salome" fontSize="141" fontWeight="normal" fill="#D0021B">
                            <tspan x={xValue} y="375">{rollValue}</tspan>
                        </text>
                    </g>
                    </g>
                </g>
            </svg>
        )
    }
}

export default DiceTwelve