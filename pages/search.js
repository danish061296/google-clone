import Head from 'next/head';
import Header from '../components/Header';
const API_KEY = process.env.API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;

import Response from '../GoogleResponse';
import { useRouter } from 'next/router';
import SearchResults from '../components/SearchResults';

function Search({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/** Header */}

      <Header />

      {/** Search Results */}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

// server side rendering
export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || '0';

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  // pass the results to client side
  return {
    props: {
      results: data,
    },
  };
}
