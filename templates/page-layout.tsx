import { 
    Container,
     AppBar, 
     Toolbar, 
     Typography,
     Grid
 } from '@material-ui/core';

 import Head from 'next/Head';
 
const PageTemplate = props => {

    return (
        <div>
            <Head>
                <meta name="twitter:card" content={props.twitter ? props.twitter.card : ''} />
                <meta name="twitter:description" content={props.twitter ? props.twitter.description : ''} />
                <meta name="twitter:title" content={props.twitter ? props.twitter.title : ''} />
            </Head>
            <Container>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" >
                            NextJS Spike
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Container>
            <Container>
                {props.children}
            </Container>
        </div>
    );
}

export default PageTemplate;