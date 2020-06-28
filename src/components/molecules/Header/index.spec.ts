import { mount } from "@vue/test-utils";
import Header from "./index.vue"

describe("Header", () => {
  it('renders correctly', () => {
    const wrapper = mount(Header)
    expect(wrapper.element).toMatchSnapshot()
  })
})