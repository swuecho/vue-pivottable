export default {
  props: ['values', 'changeValue'],
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

    /*return <select className="pvtDropdown" value={this.value}
       onChange={this.handleChange}
    > {options}</select>
    */

    return h('select', {
      staticClass: ['pvtDropdown'],
      attrs: {
        value: this.value
      },
      on: {
        change: this.handleChange
      }
    }, [options]);
  }
}
