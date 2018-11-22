import React from 'react';
import { shallow } from '../../enzyme';

import App from '../../App';

describe('Teste App', () => {
  it('Componente pagamento renderizado', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('div.pagamento')).toBeDefined();
  });
});
