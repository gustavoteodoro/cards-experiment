import { mount } from "@vue/test-utils";
import Card from "./index.vue"

describe("Card", () => {
  it('renders correctly King', () => {
    const wrapper = mount(Card , {
      propsData: {
        value: "KING",
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
