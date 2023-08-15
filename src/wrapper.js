import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import some from "./assets/some.png"


const Wrapper = ({ children, doc }) => <React.Fragment>
    <Helmet>
        <meta charSet="utf-8" />
        <title>My Shadow!</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Exotic looking menu" />
        <meta property="og:image" content={some} />
    </Helmet>
    {children}
</React.Fragment>
export default Wrapper