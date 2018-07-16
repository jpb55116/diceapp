import React, { Component } from 'react';

class DiceTen extends Component {

    render() {
        let rollValue;
        let xValue = "";

        if (this.props.diceId === "10") {
            rollValue = this.props.rollValue;
        } else {
            rollValue = '';
        }

        if(this.props.rollValue === "10"){
            xValue = "225";
        } else if (this.props.rollValue === "1"){
            xValue = "275"
        } else {
            xValue = "260"
        }

        return (
            <svg viewBox="0 0 614 646" xmlns="http://www.w3.org/2000/svg" onClick={this.props.rollDice} id="10">
                <g id="Page-1" fill="none" fillRule="evenodd">
                    <g id="Desktop" transform="translate(-1621 -177)" stroke="#D0021B" strokeWidth="5">
                        <g id="d10" transform="translate(1623 179)">
                            <path id="Path-9" d="M305.823568.71959493L.21023825 322.627056 305.670355 640.992435l303.910711-318.365379L305.670355.71959493 142.040205 296.87068l162.855447 84.043719.927916 260.078036" />
                            <path d="M1.14839286 322.882165L142.852607 297.467816M306.213604 2.32778518L466.852607 297.467816" id="Path-10" />
                            <path id="Path-10" transform="matrix(-1 0 0 1 913.325416 0)" d="M304.472809 322.882165l141.704214-25.414349 162.675584 83.327198" />
                            <text fontFamily="Salome" fontSize="141" fontWeight="normal" fill="#D0021B">
                                <tspan x={xValue} y="292.75">{rollValue}</tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}

export default DiceTen