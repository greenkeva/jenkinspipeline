import React from 'react';
import { shallow } from 'enzyme';
import Home from '../home/Home';

describe('renders without crashing', function () {
    let mountedQuote;

    beforeEach(()=>{
        mountedQuote = shallow(<Home />);
    })
    
    it('renders without crashing', function() {
        const mountedQuote = shallow(<Home />);
        expect(mountedQuote.length).toBeGreaterThan(0);
    });

    it('renders a string', () => {
        const quote = mountedQuote.find('h2').text();
        expect(quote.length).toBeGreaterThan(0);
    });
    
});