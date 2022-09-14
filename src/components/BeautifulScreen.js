import { Textfit } from "react-textfit";
import "./BeautifulScreen.css";

const BeautifulScreen = ({ value }) => {
    return (
        <Textfit className="BeautifulScreen" mode="single" max={70}>
            {value}
        </Textfit>
    );
};

export default BeautifulScreen;