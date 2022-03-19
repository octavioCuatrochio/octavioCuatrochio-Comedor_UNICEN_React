import "./SectionHeader.css";

function SectionHeader(props) {
    
    return(
        <div className="header-section">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

export default SectionHeader;