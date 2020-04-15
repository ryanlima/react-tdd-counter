import React from 'react';
import App from './App';
import { mount } from 'enzyme';

describe("Counter Testing", () => {

  let wrapper
  beforeEach(() => {
    wrapper = mount(<App />)
    console.log(wrapper.debug())
  })

  test('render the title of counter', () => {
    expect(wrapper.find('h1').text()).toContain("This is counter app")
  });

  test("render a button with text of `increment`", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment")
  })

  test("render a button with text of `decrement`", () => {
    expect(wrapper.find("#decrement-btn").text()).toBe("Decrement")
  })

  test("rende the initial value of state in a div", () => {
    expect(wrapper.find('#counter-value').text()).toBe("0")
  })

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find('#increment-btn').simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe("1")
  })

  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find('#increment-btn').simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe("1")
    wrapper.find('#decrement-btn').simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe("0")
  })

})