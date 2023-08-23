<template>
  <el-tooltip effect="light" placement="top-start">
    <div slot="content"><span v-html="display" /></div>
    <span style="overflow: auto" v-html="title" />
  </el-tooltip>
</template>

<script>
import BaseFormatter from './base'
export default {
  name: 'HtmlDisplayFormatter',
  extends: BaseFormatter,
  data() {
    return {
      title: this.col.formatterArgs.getTitle(this.row),
      display: this.col.formatterArgs.getDisplay(this.row)
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
