import Link from 'next/link';
import links from '../config/links';

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
        <div>
            <h2>{props.initialData.state.Title}</h2>
            <p>Hello Next.js</p>
            <pre>{ JSON.stringify(props.initialData.startDate) }</pre>
            <ul>
                { props.initialData.links.map(
                    (link) => (<LinkEl href={link.href} title={link.title} /> ) 
                ) }
            </ul>
        </div>
    );
};

Index.getInitialProps = async function() {
    const initialData = {
        state: {
            "Hello": 'World',
            Title: 'PAGE |ONE'
        },
        links,
        startDate: new Date(),
    };
    
    return {
        initialData
    };
  };

  export default Index