import { useEffect, createRef } from "react";
import { withTranslation } from "../i18n";

import axios from "../redux/actions/axios";
import Link from "next/link";
import Head from "next/head";

import s from "../styles/Brands.module.scss";

function Brands (props){
    const { t, lang } = props;
    useEffect(() => {
        window.scrollTo(0, 0);
        // if (props.allBrands.length === 0) {
        //     props.getAllBrands();
        // }
    }, []);
    let Alphabate = [
        "0-9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    const refs = Alphabate.reduce((acc, value) => {
        acc[value.toLowerCase()] = createRef();
        return acc;
    }, {});
    const handleClick = (id) => {
        let y = refs[id].current.offsetTop - 250;
        window.scrollTo(0, y);
    };
    return (
        <div className={`container ${s.brands_page}`}>
            <Head>
                <title>Brands | Beautyboothqa </title>
            </Head>
            <div className="row">
                <div className="col-12">
                    <div className={s.title} dir={lang == "en" ? "ltr" : "rtl"}>
                        {t("Beauty Booth Brands")}
                    </div>
                    <div className={s.navigation_div}>
                        <div className={s.title_div}>
                            <span>{t("GOTO")}:</span>
                        </div>
                        <ul>
                            {Object.keys(props.allBrands).map((alp) => (
                                <li key={alp}>
                                    <button onClick={() => handleClick(alp.toLowerCase())}>
                                        {alp}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-12">
                    <ul className={s.brand_lists} dir={lang == "en" ? "ltr" : "rtl"}>
                        {Object.keys(props.allBrands).map((letter) => (
                            <li
                                ref={refs[letter.toLowerCase()]}
                                className={s.brandlist_group}
                                key={letter}
                            >
                                <div className={s.letter}>
                                    <div className={s.letter_wrapper}>
                                        <span>{letter.toUpperCase()}</span>
                                    </div>
                                </div>
                                <div className={s.lists}>
                                    <ul>
                                        {props.allBrands[`${letter}`].map((lt, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={{
                                                        pathname: "/brand/[brand]",
                                                        query: { brand: lt.name.split(" ").join("-") },
                                                    }}
                                                >
                                                    <a> {lt.name}</a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export async function getStaticProps() {
    const allBrands = await axios
        .get("en/getdata/brands")
        .then((res) => {
            return res.data;
        })
        .catch();
    return {
        props: {
            allBrands,
        },
        revalidate: 7200, // In seconds
    };
}
export default withTranslation("common")(Brands);
