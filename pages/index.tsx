import Link from 'next/link';
import useSWR from 'swr';
import links from '../config/links';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const LinkEl = props => {

    return (
        <li>
            <Link href={props.href} as ={props.href}>
                <a>{props.title}</a>
            </Link>
        </li>
    );
}

const Index = props => {
    const { data, error } = useSWR('/api/randomQuote', fetcher);

    return (
        <div>
            <h2>{props.initialData.state.Title}</h2>
            <p>Hello Next.js</p>
            <ul>
                { props.initialData.links.map(
                    (link) => (<LinkEl href={link.href} title={link.title} /> ) 
                ) }
            </ul>
            <h3>Quote of the day</h3>
            {
                data && <pre>{ data.quote }</pre>
            }
            {
                !data && <p>Loading...</p>
            }
        </div>
    );
};

Index.getInitialProps = async function() {
    const initialData = {
        state: {
            "Hello": 'World',
            Title: 'A title for you'
        },
        links,
        startDate: new Date(),
    };
    
    return {
        initialData
    };
  };

  export default Index