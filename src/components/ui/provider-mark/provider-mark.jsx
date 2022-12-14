import React from 'react';

import { StyledProviderMark } from './styles';

export const ProductProvider = {
  FARM: 'farm',
  SHOP: 'shop'
};

function ProviderMark({ provider }) {
  let options;

  if (provider === ProductProvider.FARM) {
    options = {
      text: 'Фермерские продукты',
      bgColor: '#88aa4d'
    };
  } else {
    options = {
      text: 'Магазинные продукты',
      bgColor: '#f75531'
    };
  }

  return <StyledProviderMark options={options} />;
}

export default ProviderMark;

