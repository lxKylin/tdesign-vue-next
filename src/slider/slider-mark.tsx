import { defineComponent, PropType } from 'vue';

import { usePrefixClass } from '../hooks/useConfig';

import { TdSliderProps } from './type';

export default defineComponent({
  name: 'TSliderMark',
  props: {
    mark: {
      type: [Object, Array, String, Number] as PropType<TdSliderProps['marks']>,
    },
    point: {
      type: Number,
    },
    onClickMarkPoint: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    const COMPONENT_NAME = usePrefixClass('slider__mark');
    const changeValue = (e: MouseEvent) => {
      e.stopPropagation();
      props?.onClickMarkPoint?.(props.point);
    };

    return () => (
      <div class={`${COMPONENT_NAME.value}-text`} onClick={changeValue}>
        {props.mark}
      </div>
    );
  },
});
