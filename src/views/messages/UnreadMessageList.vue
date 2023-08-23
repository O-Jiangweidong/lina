<template>
  <div>
    <GenericListTable :table-config="tableConfig" :header-actions="headerActions" />
  </div>
</template>

<script>
import GenericListTable from '@/layout/components/GenericListTable'
import getConfig from '@/views/messages/tableConfig'
export default {
  name: 'UnreadMessageList',
  components: {
    GenericListTable
  },
  data() {
    const config = getConfig.bind(this)()
    return {
      tableConfig: {
        url: '/api/v1/notifications/site-messages/?has_read=false',
        columns: config.tableConfigColumns,
        columnsShow: config.tableConfigColumnsShow,
        columnsMeta: config.tableConfigColumnsMeta
      },
      headerActions: Object.assign(config.headerActions, {
        extraActions: [
          {
            name: 'MarkRead',
            title: this.$t('notifications.MarkAsRead'),
            type: 'info',
            can: (cellValue) => {
              return cellValue.selectedRows.length > 0
            },
            callback: (cellValue) => {
              const url = `/api/v1/notifications/site-messages/mark-as-read/`
              const msgIds = cellValue.selectedRows.map((item) => {
                return item.id
              })
              this.$axios.patch(url, { ids: msgIds }).then(res => {
                this.$children[0].$refs.ListTable.reloadTable()
              }).catch(err => {
                this.$message(err.detail)
              })
            }
          }
        ]
      })
    }
  }
}
</script>

<style scoped>
</style>
