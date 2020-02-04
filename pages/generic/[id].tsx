import Link from 'next/link';
import { useRouter } from 'next/router';
import links from '../../config/links';

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

    console.log('Reoutnerer::', router.query);
    console.log('initialData::', props.initialData);
    const pageSelected = props.initialData.links.find(el => el.id == router.query.id )

    console.log('pageSelected::', pageSelected);
    return (
        <div>
            {
                pageSelected && (<div>
                    <h2>{ pageSelected.title }</h2>
                    <p>Hello Next.js</p>
                    <pre>{ JSON.stringify(props.initialData.startDate) }</pre>
                    <ul>
                        { props.initialData.links.map(
                            (link) => (<LinkEl href={`${link.href}`} title={link.title} /> ) 
                        ) }
                    </ul>
                </div>
                )
            }
            {!pageSelected && <p>No page selected</p>}
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