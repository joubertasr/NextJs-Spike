import Link from 'next/link';
import { useRouter } from 'next/router';
import links from '../../../../config/links';

import { Grid } from '@material-ui/core';
import PageTemplate from '../../../../templates/page-layout';

import Drinks from '../../../../services/drinks';
import DrinkList from '../../../../components/drinkList';

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
    const router = useRouter();
    const pageSelected = props.initialData.links.find(el => el.id == router.query.id );

    return (
        <PageTemplate>
            <Grid container spacing={3}>
                {
                    pageSelected && (
                        <Grid item xs={5}>
                            <h2>{ pageSelected.title } - <i>{router.query.hasOwnProperty('name') ? router.query.name : 'Nope'}</i></h2>
                            <p>Hello Next.js</p>
                            <pre>{ JSON.stringify(props.initialData.startDate) }</pre>
                        </Grid>
                    )
                }
                {!pageSelected && 
                    <Grid item xs={5}><p>No page selected</p></Grid>
                }
                <Grid item xs={7}>
                    <ul>
                        { props.initialData.links.map(
                            (link) => (<LinkEl href={`${link.href}`} title={link.title} /> ) 
                        ) }
                    </ul>
                </Grid>
            </Grid>
            <DrinkList list={props.initialData.drinkInfo} />
        </PageTemplate>
    );
};

Index.getInitialProps = async props => {
    const initialData = {
        state: {
            "Hello": 'World',
            Title: 'PAGE |ONE'
        },
        drinkInfo: {},
        links,
        startDate: new Date(),
    };

    const drinksArgs = {
        pageNumber: props.query.hasOwnProperty('page') ? props.query.page : '', 
        pageSize: props.query.hasOwnProperty('pageSize') ? props.query.pageSize : '', 
        searchTerm: props.query.hasOwnProperty('searchTerm') ? props.query.searchTerm : ''
    };

    // Use service to get drink list
    const data = await Drinks.getDrinksFromAPI(drinksArgs);

    // If there is data its an array and we want a single object
    initialData.drinkInfo = data && Array.isArray(data) ? data : [];

    return {
        initialData
    };
  };

  export default Index