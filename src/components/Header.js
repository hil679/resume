import { Component } from 'react';

class Header extends Component {
    render() {
        const contents = this.props.contents;

        return (
            <div className="header">
                <div className="title">
                    <h1>{contents.name}</h1>
                    <h2>{contents.desc}</h2>
                </div>
                <div className="contents">
                    <a href={contents.github}><i className="github" /></a>
                    <a href={`mailto:${contents.email}`}><i className="fas fa-envelope" /></a>
                </div >
            </div>
        );
    }
}

export default Header;