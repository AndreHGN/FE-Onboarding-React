import './GeneralInfo.css'

function GeneralInfo(props) {
    return (
        <div className="general-info-container">
            <p>Listed episodes: {props.info.listed}</p>
            <p>Total of episodes: {props.info.total}</p>
        </div>
    );
}

export default GeneralInfo;