import { Link } from "react-router-dom";

import { Button } from '../../components/Button';

const Home = () => {
    return (<>
        <h1>Home</h1>
        <Button title='Test 1' />
        <Button variant="secondary" title='Test 2' />
        <Link to='/login'>Go to login</Link>
    </>)
}

export { Home }