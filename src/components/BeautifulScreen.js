import "../css/BeautifulScreen.css";

const BeautifulScreen = ({ value }) => {
    return (
        <button className="beautiful-screen" mode="single" max={70}>
            {value}
        </button>
    );
};

export default BeautifulScreen;