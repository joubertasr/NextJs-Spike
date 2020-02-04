import Link from 'next/link';
import useSWR from 'swr';
import links from '../config/links';

import PageTemplate from '../templates/page-layout';

import {
    Grid
} from '@material-ui/core';

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
        <PageTemplate>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h2>{props.initialData.state.Title}</h2>
                    <p>Hello Next.js</p>
                </Grid>
                <Grid item xs={9}>
                    <ul>
                        { props.initialData.links.map(
                            (link) => (<LinkEl href={link.href} title={link.title} /> ) 
                        ) }
                    </ul>
                </Grid>
                <Grid item xs={3}>
                    <h3>Quote of the day</h3>
                    {
                        data && <p>{ data.quote }</p>
                    }
                    {
                        !data && <p>Loading...</p>
                    }
                </Grid>
            </Grid>
        </PageTemplate>
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