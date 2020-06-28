import { mount } from "@vue/test-utils";
import CardCode from "./index.vue"

describe("CardCode", () => {
  it('renders correctly King', () => {
    const wrapper = mount(CardCode , {
      propsData: {
        value: "KING",
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
