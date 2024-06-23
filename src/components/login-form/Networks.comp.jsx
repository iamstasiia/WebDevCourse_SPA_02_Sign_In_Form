import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faGooglePlusG,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function NetworksComponent() {
    return (
        <div className="s-networks">
            <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
        </div>
    );
}

export default NetworksComponent;
