import Link from "next/link";
import Head from "next/head";

export default function FourOhFour() {
  return (
    <div className="container my-5">
        <Head>
          <title>404 | Beautyboothqa</title>
        </Head>
      <div className="row my-5">
        <div className="col text-center my-5">
          <h1>404 - Page Not Found</h1>
          <Link href="/">
            <a className="font-weight-bold my-5  text-success btn btn-outline-success">Go back home</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
