/**
 * 
 * @param {h} preferred header tags h1-h6
 * @param {text} headter text
 * @returns component
 */
const Header = ({h:Tag, text, cssClass = ""}) => {
    return (
       <Tag className={`${cssClass}`}>
           {text}
       </Tag>
    )
}

export default Header;