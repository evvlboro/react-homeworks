// Core
import { useEffect, useState } from 'react';

// Api
import {api} from '../api';

export const useApiLoader = () => {
    const [ db, setdb ] = useState([]);
    const [ isFetching, setisFeching ] = useState(false);
    const [isServerError, setisServerError ] = useState(false);
    const [isClientError, setisClientError ] = useState(false);

    const fetchNewsHandler = async () => {
        try{
            setisFeching(true);
            const response = await api.news.fetch();
            //console.log(response);
            const regOk = /^2[0-9][0-9]$/
            const regClientError = /^4[0-9][0-9]$/;
            const regServerError = /^5[0-9][0-9]$/;
            
            if (regOk.test(response.status)){
                const data = await response.json();
                setdb(data);
            } 
            else if (regClientError.test(response.status)) {
                setisClientError(true);
            }
            else if (regServerError.test(response.status)) {
                setisServerError(true);
            }
            
        } catch(error) {

        } finally {
            setisFeching(false);
        }
    };

    useEffect(() => {
        fetchNewsHandler()
    }, []);

    return {
        db,
        isFetching,
        isServerError,
        isClientError
    };
}