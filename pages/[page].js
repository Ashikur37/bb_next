import { useState, useEffect } from "react";
import Head from "next/head";
import axios from "../redux/actions/axios";
import Error from "next/error";
import dynamic from "next/dynamic";
// dynamic loaded components
const Header = dynamic(() => import("../components/layout/partials/Header"));
const Loader = dynamic(() => import("../components/atom/Loader"));
// page level stylesheet

function Page({ pageTitle, slug,lang }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    useEffect(() => {
        console.log(lang);
        axios.get(`${lang}/getdata/page/${slug}`).then((res) => {
            if (res.data) {
                setData(res.data);
            } else {
                setError(true);
            }
        });
    }, [slug, lang]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const createMarkup = (data) => {
        return {
            __html: data,
        };
    };
    if (error) {
        return <Error title="Not Found" statusCode={404} />;
    }
    return (
        <>
            <div className="page">
                <Head>
                    <title>{pageTitle.toUpperCase()} | Beautyboothqa</title>
                </Head>
                {data ? (
                    <div className="container">
                        <Header h="h2" text={data.name} />
                        <p
                            className="descriptions"
                            dangerouslySetInnerHTML={createMarkup(data.body)}
                        ></p>
                    </div>
                ) : (
                    <div style={{ marginTop: 200 }} className="loader">
                        <Loader />
                    </div>
                )}
            </div>
        </>
    );
}

export async function getStaticProps(context) {
    let slug = context.params.page;
    let pageTitle = "";
    switch (context.params.page) {
        case 'about-us':
            pageTitle = 'about us';
            break;
        case 'faq':
            pageTitle = 'faq';
            break;
        case 'delivery':
            pageTitle = 'delivery';
            break;
        case 'terms-and-conditions':
            pageTitle = 'terms & conditions';
            break;
        case 'privacy-policy':
            pageTitle = 'privacy policy';
            break;
        case value:
            
            break;
    
        default:
            pageTitle = "BeautyBoothqa";
            break;
    }
    return {
        props: {
            slug,
            pageTitle
        }, // will be passed to the page component as props
    };
}
export async function getStaticPaths() {
    return {
        paths: [
            { params: { page: 'about-us' } },
            { params: { page: 'faq' } },
            { params: { page: 'delivery' } },
            { params: { page: 'terms-and-conditions' } },
            { params: { page: 'privacy-policy' } },
        ],
        fallback: false
    }
}

export default Page;
