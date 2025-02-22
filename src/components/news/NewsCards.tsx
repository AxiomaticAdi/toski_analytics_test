import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NewsCard } from './NewsCard';
import { Articles } from '../../articles/Articles';

export const NewsCards = React.memo(function NewsCards() {
    const navigate = useNavigate();

    const components = Object.values(Articles).map((article) => {
        const onClickNewsTile = () => {
            navigate(`/news/${article.id}`);
            window.scrollTo(0, 0);
        };

        return (
            <Flex
                marginBottom='4'
                flex='1'
                alignSelf='stretch'
                justifyContent='center'
                key={'flex' + article.id}
            >
                <NewsCard
                    onClick={onClickNewsTile}
                    title={article.title}
                    date={article.date}
                    content={article.summary}
                />
            </Flex>
        );
    });

    return <>{components}</>;
});
