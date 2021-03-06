import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Loading = () => {

    const { isLoading } = useAuth0();

    if (isLoading){
        return <div><h1>Loading...</h1></div>
    }
    return(
        <div><h1>Loading...</h1></div>
    )

}

export default Loading;