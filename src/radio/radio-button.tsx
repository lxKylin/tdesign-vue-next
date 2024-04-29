import { computed, defineComponent, provide, reactive } from 'vue';

import { useContent } from '../hooks/tnode';
import { omit } from '../utils/helper';

import { RadioButtonInjectionKey } from './constants';
import props from './props';
import Radio from './radio';

export default defineComponent({
  name: 'TRadioButton',
  inheritAttrs: false,
  props: { ...props },

  setup(props, { attrs }) {
    provide(RadioButtonInjectionKey, reactive({}));

    const radioProps = computed(() => {
      const res = {
        ...props,
        ...omit(
          attrs,
          Object.keys(attrs).filter((key) => key.startsWith('on')),
        ),
      };

      return res;
    });

    const renderContent = useContent();

    return () => <Radio {...radioProps.value}>{renderContent('default', 'label')}</Radio>;
  },
});
