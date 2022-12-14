import { Textfit } from "react-textfit";
import "../css/BeautifulScreen.css";

const BeautifulScreen = ({ value }) => {
    return (
        <Textfit className="beautiful-screen" mode="single" max={70}>
            {value}
        </Textfit>
    );
};

export default BeautifulScreen;