import React from "react";

export const TheSidebarButton = (props) => {
    const className = props.visible ? 'is-active' : '';
    const style = {'backgroundColor': props.visible ? 'darkred' : 'white'};
    const onClick = props.onClick;

    return (
        <button type='button'
                className={`${className} hamburger hamburger--minus`}
                onClick={onClick}>
        <span className='hamburger-box'>
            <span className='hamburger-inner' style={style}>
                <span className='hamburger-inner__before' style={style}></span>
                <span className='hamburger-inner__after' style={style}></span>
            </span>
        </span>
        </button>
    )
}