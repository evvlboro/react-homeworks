import React, {useState} from 'react';
import Styles from './styles.module.scss';
import cx from 'classnames';

export const Article = (props)=>{
        const {id, isConfirmed, isSelected, title, description, hidden} = props;
        const confirmedJSX = isConfirmed && <h1>Новость подтверждена правительством</h1>;
        const [isArticleVisible, setVisibility] = useState(!hidden);
        const articleCx = cx({
            [Styles.article]: true,
            [Styles.selected]: isSelected
        });

        const showArticle = ()=>{
            setVisibility(true);
        }

        const articleJSX =  isArticleVisible && (
            <div key = {id} className={articleCx}>
                <h4>{title}</h4>
                <p>{description}</p>
                {confirmedJSX}
            </div>
        );

        const showJSX = !isArticleVisible && (
            <>
                <p>
                    Article is hidden, but if you want to open it, just
                    <button onClick={showArticle}>Click Here !</button>
                </p>
            </>
        );


        return(
            <>
                {articleJSX}
                {showJSX}
            </>
        )
}