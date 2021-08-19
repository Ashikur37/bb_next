/**
 * 
 * @param {h} preferred header tags h1-h6
 * @param {text} headter text
 * @param {cssClass} additional css class
 * @param {url} see all link
 * @returns component
 */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Header = ({ h: Tag, text, cssClass = "", url = null, urlText = "see more", Link, FontAwesomeIcon }) => {
    return (
        <div className="header_component">
            <Tag className={`${cssClass}`}>
                {text}
            </Tag>
            {url && (
                <Link href={url}>
                    <a className="header_see_all">
                        <span>{urlText}</span>{" "}
                        <FontAwesomeIcon className="fa-xs" icon={faArrowRight}></FontAwesomeIcon>
                    </a>
                </Link>
            )}
        </div>
    )
}

export default Header;