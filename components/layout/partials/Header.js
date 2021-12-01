/**
 * @param {h} preferred header tags h1-h6
 * @param {text} headter text
 * @param {cssClass} additional css class
 * @param {url} see all link
 * @returns component
 */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Header({
  h: Tag = "h2",
  text,
  cssClass = "",
  lang = "en",
  url = null,
  urlText = { en: "see all", ar_QA: "اظهار الكل" },
  Link,
  FontAwesomeIcon,
  textColor,
}) {
  return (
    <div className="header_component">
      <Tag style={textColor ? { color: "red" } : {}} className={`${cssClass}`}>
        {text}
      </Tag>
      {url && (
        <Link href={url}>
          <a className="header_see_all">
            <span>{urlText[lang]}</span>{" "}
            <FontAwesomeIcon
              className="fa-xs"
              icon={faArrowRight}
            ></FontAwesomeIcon>
          </a>
        </Link>
      )}
    </div>
  );
}
