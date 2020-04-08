import Header from './Header';
import Footer from './Footer';

const headerSpacer = {
        marginTop: '50px',
        marginBottom: '50px',
        backgroundColor: '#6E6D77',
        height: '100vh'
}

const Layout = props => (<>
    <Header />
    <div style={headerSpacer}>
        {props.children}
    </div>
    <Footer />
</>);

export default Layout;

// .color-primary-0 { color: #2B2A2F }	/* Main Primary color */
// .color-primary-1 { color: #6E6D77 }
// .color-primary-2 { color: #4E4D54 }
// .color-primary-3 { color: #111015 }
// .color-primary-4 { color: #0F0D18 }
