
import { shallowMount } from '@vue/test-utils'
import FindIndex from '@/views/find/index.vue';
import { Swipe, SwipeItem } from 'vant';

describe('findIndex.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(FindIndex, {
      propsData: { msg }
    });
    console.log('--->', wrapper.text());
    // debugger
    expect(wrapper.text()).toMatch(msg);
  })
})
