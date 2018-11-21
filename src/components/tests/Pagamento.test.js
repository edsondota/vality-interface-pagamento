import React from 'react';
import { shallow } from '../../enzyme';

import Pagamento from '../Pagamento';

describe('Teste pagamento', () => {
  it('Componente renderizado', () => {
    const wrapper = shallow(<Pagamento />);

    expect(wrapper.find('div.pagamento')).toBeDefined();
  });
});
