<template>
  <div>
    <el-tag v-if="isOk" type="success">{{ $t('common.Yes') }}</el-tag>
    <el-tag v-else type="danger">{{ $t('common.No') }}</el-tag>
  </div>
</template>

<script>
import BaseFormatter from './base'
export default {
  name: 'BoolTagFormatter',
  extends: BaseFormatter,
  props: {
    formatterArgsDefault: {
      type: Object,
      default() {
        return {
          typeChange(val) {
            return !!val
          }
        }
      }
    }
  },
  data() {
    return {
      formatterArgs: Object.assign(this.formatterArgsDefault, this.col.formatterArgs)
    }
  },
  computed: {
    isOk() {
      return this.formatterArgs.typeChange(this.cellValue)
    }
  }
}
</script>

<style scoped>
</style>
