import { Component } from 'react';

class Main extends Component {
    render() {
        const subject = this.props.contents.subject;
        const contents = this.props.contents.contents;
        const wrapper = contents.map((content, index) => (<Wrapper key={index} content={content} />))
        return (
            <div className="header">
                <h4>{contents.period}</h4>
                <a href={contents.link}>{contents.link}</a>
            </div>
        )
    }
}

export default Main;