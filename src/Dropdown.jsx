export default {
  props: {
    values: { type: Array, required: true }
  },
  methods: {
    handleChange(e) {
      const changeValue = e.target.value
      this.$emit('input', changeValue)
    }
  },
  render(h) {
    let options =
      this.values.map(r => {
        return <option value={r}> {r} </option>
      })
    return <select class="pvtDropdown"
      onChange={e => this.handleChange(e)}
    > {options}</select>

    /*
    return h('select', {
      staticClass: ['pvtDropdown'],
      attrs: {
        value: this.value
      },
      on: {
        change: this.handleChange
      }
    }, [options]);
    */
  }
}
