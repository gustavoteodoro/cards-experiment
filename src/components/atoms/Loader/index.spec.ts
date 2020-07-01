import { mount } from "@vue/test-utils";
import Loader from "./index.vue"

describe("Loader", () => {
  it('renders correctly', () => {
    const wrapper = mount(Loader)
    expect(wrapper.element).toMatchSnapshot()
  })
})
