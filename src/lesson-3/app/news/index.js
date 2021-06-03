import React from 'react';
import { Article } from '../article';
import { useApiLoader } from './useApiLoader';

export const News = ()=>{
    const { db, isFetching, isServerError, isClientError } = useApiLoader();

    if (isServerError) {
        return <section><h3>Сервер не отвечает</h3></section>
    }

    if (isClientError) {
        return <section><h3>Неправильный запрос</h3></section>
    }

    return (
        <section>
            <h3>{isFetching ? "Загрузка данных" : 'News'}</h3>
            {
                !isFetching && db.map((props, index)=> (
                    <Article 
                        key={index}
                        {...props}
                    />
                ))
            }
        </section>
    )
}
