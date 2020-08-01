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

        {initialValues.map((category, index) => {
          if (index === 0) {
            return (
              <div key={category.id}>

                <BannerMain
                  videoTitle={initialValues[0].videos[0].title}
                  url={initialValues[0].videos[0].url}
                  videoDescription="Aula 1 de Matemática sobre raiz (arrumar)"
                />

                <Carousel category={initialValues[0]} />
              </div>
            );
          }
          return (
            <Carousel
              key={category.id}
              category={category}
            />
          );
        })}

      </AppWraper>
    </PageDefault>
  );
}

export default Home;
