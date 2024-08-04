import { header} from "./resumeContents";
import { Header} from "../components/component"
import { Component } from 'react';
// import styles from "../styles.module.scss"

class Resume extends Component {
    render() {
        return (
            <div className="Resume">
                <Header contents={header} />
            </div>
        );
    }
}

export default Resume;