import { getRenders } from './TableRenderer'

import defaultProps from './helper/defaultProps'
export default {
  name: 'vue-pivottable',
  mixins: [defaultProps],
  computed: {
    renderers() {
      let table_renderers = getRenders(this.lang)
      return table_renderers[this.rendererName in table_renderers ? this.rendererName : Object.keys(table_renderers)[0]]
    }
  },
  render(h) {
    const props = this.$props
    return h(this.renderers, {
      props
    })
  }
}
