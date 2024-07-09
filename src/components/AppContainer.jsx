import React, { Component } from 'react';
import BannerSection from './Banner/BannerSection';
import Services from './services/Services';
import NavbarContainer from './Navbar/NavbarContainer';

class AppContainer extends Component {
    state = {
        pos: 0,
        imglight: false,
        navClass: ''
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollNavigation, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        const scrollup = window.scrollY;
        if (scrollup > this.state.pos) {
            this.setState({ navClass: 'nav-sticky', imglight: false, pos: scrollup });
        } else {
            this.setState({ navClass: '', imglight: false, pos: scrollup });
        }
    };

    render() {
        const { navClass, imglight } = this.state;
        return (
            <div>
                <NavbarContainer navClass={navClass} imglight={imglight} />
                <BannerSection />
                <Services />
            </div>
        )
    }
}
export default AppContainer;