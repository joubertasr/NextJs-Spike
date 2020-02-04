import Link from 'next/link';
import links from '../config/links';
import { Grid } from '@material-ui/core';
import PageTemplate from '../templates/page-layout';

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
    console.log('Props::', props)
    return (
        <PageTemplate>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h2>{props.initialData.state.Title}</h2>
                    <p>Hello Next.js</p>
                    <pre>{ JSON.stringify(props.initialData.startDate) }</pre>
                    <ul>
                        { props.initialData.links.map(
                            (link) => (<LinkEl href={link.href} title={link.title} /> ) 
                        ) }
                    </ul>
                </Grid>
            </Grid>
        </PageTemplate>
    );
};

Index.getInitialProps = async function() {
    const initialData = {
        state: {
            Title: 'Href page'
        },
        links,
        startDate: new Date(),
    };
    
    return {
        initialData
    };
  };

  export default Index