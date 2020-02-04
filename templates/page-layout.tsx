import { 
    Container,
     AppBar, 
     Toolbar, 
     Typography,
     Grid
 } from '@material-ui/core';

 
const PageTemplate = props => {

    return (
        <div>
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