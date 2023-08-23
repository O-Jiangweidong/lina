<template>
  <div>
    <GenericListTable :table-config="tableConfig" :header-actions="headerActions" />
  </div>
</template>

<script>
import GenericListTable from '@/layout/components/GenericListTable'
import getConfig from '@/views/messages/tableConfig'
export default {
  name: 'ReadMessageList',
  components: {
    GenericListTable
  },
  data() {
    const config = getConfig.bind(this)()
    return {
      tableConfig: {
        url: '/api/v1/notifications/site-messages/?has_read=true',
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
