import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchComponent from '../MainPage/index';
import ArtistEvents from '../ArtistEvents/index';

describe( 'SearchComponent', () =>{
    it('should be true',()=>
    {
        const check=true;
        expect(check).toBe(true);
    });
});

describe( 'ArtistEvents', () =>{
    it('should be true',()=>
    {
        const check=true;
        expect(check).toBe(true);
    });
});


Enzyme.configure({adapter: new Adapter()});

describe( 'SearchComponent', () =>{
    it('should show text',()=>
    {
        const wrapper= shallow(<SearchComponent/>);
        const text = wrapper.find('.main-heading');
        expect(text.text()).toBe('FIND THE ARTIST');
    });
});



describe( 'ArtistEvents Country', () =>{
    it('should show text',()=>
    {
        const wrapper=shallow(<ArtistEvents/>);
        expect(wrapper.contains('Country'));
    });
});

describe( 'ArtistEvents City', () =>{
    it('should show text',()=>
    {
        const wrapper=shallow(<ArtistEvents/>);
        expect(wrapper.contains('City'));
    });
});

describe( 'ArtistEvents Venue', () =>{
    it('should show text',()=>
    {
        const wrapper=shallow(<ArtistEvents/>);
        expect(wrapper.contains('Venue'));
    });
});

describe( 'ArtistEvents Date', () =>{
    it('should show text',()=>
    {
        const wrapper=shallow(<ArtistEvents/>);
        expect(wrapper.contains('Date'));
    });
});
