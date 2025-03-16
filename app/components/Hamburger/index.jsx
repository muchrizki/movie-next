import "./Hamburger.css"

export default function Hamburger ({onSidebar}) {
    
    return (
        <label className="bar sm:hidden" htmlFor="check" onClick={() => onSidebar()}>
            <input type="checkbox" id="check" />

            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
        </label>
    )
}