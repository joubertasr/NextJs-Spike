import Link from 'next/link';
import useSWR from 'swr';
import links from '../config/links';
import fetch from 'isomorphic-unfetch'

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

    const twitterInfo = {card: 'twitCard', description: 'twitDesc', title: 'twitTitle'};
    if (props.initialData.drinkInfo && props.initialData.drinkInfo.id) {
        const drinkInfo = props.initialData.drinkInfo;
        twitterInfo.card = drinkInfo.creator.name;
        twitterInfo.description = drinkInfo.location.name;
        twitterInfo.title = drinkInfo.title
    }
    return (
        <PageTemplate twitter={ twitterInfo }>
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
        drinkInfo: {}
    };

    // Call the local api to fetch initial data, make sure to await for result
    // uses isomorphic fetch as per import above
    const data = await fetch('http://localhost:3000/api/drinks/5/1').then(r => r.json());

    // If there is data its an array and we want a single object
    initialData.drinkInfo = data && Array.isArray(data) ? data.pop() : {};
    
    return {
        initialData
    };
  };

  export default Index