import React from 'react'
import sinon from 'sinon'
import {mount} from 'enzyme'

import Avatar from '../src/components/Avatar'

describe('<Avatar/>', () => {
	it('allows us to set props', () => {
		const wrapper = mount(<Avatar width="60px"/>)
		expect(wrapper.props().bar).to.equal('baz')
		wrapper.setProps({bar: 'foo'})
		expect(wrapper.props().bar).to.equal('foo')
	})

	it('simulates click events', ()=>{
		const onAvatarClick = sinon.spy()
		const wrapper = mount(
			<Avatar onClick={onAvatarClick}/>
		)
		wrapper.find('img').simulate('click')
		expect(onAvatarClick).to.have.property('callCount', 1)
	})
})