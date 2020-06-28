import { mount } from "@vue/test-utils";
import TextField from "./index.vue"

describe("TextField", () => {
  it('renders correctly', () => {
    const wrapper = mount(TextField)
    expect(wrapper.element).toMatchSnapshot()
  })
})