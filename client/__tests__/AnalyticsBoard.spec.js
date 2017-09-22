import React from 'react';
import expect from 'expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import JobCard from '../src/containers/JobCard.jsx';
import AnalyticsBoard from '../src/containers/AnalyticsBoard.jsx';