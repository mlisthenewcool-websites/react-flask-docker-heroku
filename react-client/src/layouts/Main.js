// todo analytics, scroll-to-top

import React from "react";
import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

import {TheHeader} from "./TheHeader";
import {TheSidebar} from "./TheSidebar";
import {TheSidebarButton} from "./TheSidebarButton";
import {ScrollToTop} from "./ScrollToTop";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.toggleSidebar = this.toggleSidebar.bind(this)

        this.state = {
            visible: true,
        }
    }

    toggleSidebar() {
        this.setState((currentState) => ({
            visible: !currentState.visible
        }));
    }

    render() {
        const divStyle = this.state.visible ? 'inline' : 'none'
        return (
            <>
                <ScrollToTop />
                <HelmetProvider>
                    <Helmet titleTemplate="%s | Hippolyte Debernardi"
                            defaultTitle="Hippolyte Debernardi"/>
                    <div id="app">
                        <TheHeader/>
                        <div className="container">
                            <div className="content">
                                <div className="left" style={{'display': divStyle}}>
                                    {this.state.visible && <TheSidebarButton visible={this.state.visible} onClick={this.toggleSidebar}/>}
                                    <TheSidebar visible={this.state.visible} />
                                </div>
                                <div className="right">
                                    {!this.state.visible && <TheSidebarButton visible={this.state.visible} onClick={this.toggleSidebar}/>}
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </HelmetProvider>
            </>
        )
    }
}

Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

Main.defaultTypes = {
    children: null
}

export default Main;
