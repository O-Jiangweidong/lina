<template>
  <div>
    <GenericListTable :table-config="tableConfig" :header-actions="headerActions" />
  </div>
</template>

<script>
import GenericListTable from '@/layout/components/GenericListTable'
import getConfig from './tableConfig'
export default {
  name: 'AllMessageList',
  components: {
    GenericListTable
  },
  data() {
    const config = getConfig.bind(this)()
    return {
      tableConfig: {
        url: '/api/v1/notifications/site-messages/',
        columns: config.tableConfigColumns,
        columnsShow: config.tableConfigColumnsShow,
        columnsMeta: config.tableConfigColumnsMeta
      },
      headerActions: config.headerActions
    }
  }
}
</script>

<style scoped>
</style>
