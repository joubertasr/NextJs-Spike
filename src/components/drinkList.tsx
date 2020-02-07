import { Grid } from '@material-ui/core';
import Link from 'next/link';

const DrinkList = props => {

    return (
        <Grid container spacing={5} style={{backgroundColor: '#bbb'}}>
            {
                props.list.length > 0 &&
                props.list.map(drink => (
                    <Grid item xs={3} >
                        <div style={{backgroundColor: '#ccc' }} >
                            <p>{drink.title}</p>
                            <p>{drink.time}</p>
                            <p>Number of Guests: {drink.guests.length}</p>
                            <Link href={`/drink/${drink.id}/${encodeURI(drink.title)}`}>
                                <a>More information</a>
                            </Link>
                        </div>
                    </Grid>
                ))
            }
        </Grid>
    );
}


export default DrinkList;