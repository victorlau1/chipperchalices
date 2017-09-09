import React from 'react';
import renderer from 'react-test-renderer';
import expect from 'expect';
import { shallow } from 'enzyme';

import User from '../../src/page-components/User.jsx';

describe('User Page Component', function() {
  let Component;

  beforeEach(function() {
    Component = shallow (<User />);
  });

  it('should exist', () => {
    expect(Component.length).toBeTruthy();
  });

  it('Correct child components exist within User Page', function() {
    expect(Component.find('<JobForm />')).toBeTruthy();
    expect(Component.find('<LifecycleBoard />')).toBeTruthy();
  });
});