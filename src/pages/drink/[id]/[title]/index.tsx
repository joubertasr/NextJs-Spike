import Link from 'next/link';
import { useRouter } from 'next/router';
import links from '../../../../config/links';

import { Grid } from '@material-ui/core';
import PageTemplate from '../../../../templates/page-layout';

import Drinks from '../../../../services/drinks';

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

    console.log('props::', props.initialData);
    return (
        <PageTemplate twitter={ props.initialData.twitter }>
            <Grid container spacing={3}>
                { props.initialData.hasOwnProperty('drink') && props.initialData.drink.hasOwnProperty('title') &&
                    <div>
                        <Grid item xs={5}>
                            <h2>{ props.initialData.drink.title }</h2>
                            <pre>{ JSON.stringify(props.initialData.drink) }</pre>
                        </Grid>
                        <Grid item xs={7}>
                            <ul>
                                { props.initialData.links.map(
                                    (link) => (<LinkEl href={`${link.href}`} title={link.title} /> ) 
                                ) }
                            </ul>
                        </Grid>
                    </div>
                }
                { !props.initialData.drink.hasOwnProperty('title') &&
                    <div>
                        <p>Missing drink info</p>
                    </div>
                }
            </Grid>
        </PageTemplate>
    );
};

Index.getInitialProps = async props => {
    const initialData = {
        state: {
            "Hello": 'World',
            Title: 'PAGE |ONE'
        },
        drink: {},
        twitter: {},
        links,
        startDate: new Date(),
    };

    console.log('   ?props.query::', props.query);

    const theDrink = await Drinks.getDrinksFromAPIByID(props.query.id);

    console.log('  theDrink', theDrink);
    if (props.query.title === theDrink.title) {
        console.log('props.query.title', props.query.title);
        initialData.drink = theDrink;
        initialData.twitter = {
            card: theDrink.creator.name,
            description: theDrink.location.name,
            title: theDrink.title
        };
    }
    
    return {
        initialData
    };
  };

  export default Index