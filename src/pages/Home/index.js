import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories';
import PageDefault from '../../components/PageDefault';

const AppWraper = styled.div`
  background: var(--grayDark);
`;

function Home() {
  const [initialValues, setInitialValues] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInitialValues(categoriesWithVideos);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      <AppWraper>

        {initialValues.length === 0 && (
          <div>
            Loading..
          </div>
        )}

        {initialValues.length >= 1 && (
          <>
            <BannerMain
              videoTitle={initialValues[5].videos[0].title}
              url={initialValues[5].videos[0].url}
              videoDescription="Cover de solos por Monise Gomes. Músicas: Smoke on the water, You really got me, Aces high, Wasted Years."
            />

            <Carousel category={initialValues[5]} />
            <Carousel category={initialValues[0]} />
            <Carousel category={initialValues[1]} />

            <Carousel category={initialValues[2]} />

            <Carousel category={initialValues[3]} />

            <Carousel category={initialValues[4]} />
          </>

        )}

      </AppWraper>
    </PageDefault>
  );
}

export default Home;
