import { mount } from "@vue/test-utils";
import Button from "./index.vue"

describe("Button", () => {
  it('renders correctly', () => {
    const wrapper = mount(Button , {
      propsData: {
        label: "Example label",
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
