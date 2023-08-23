import i18n from '@/i18n/i18n'
import { DateFormatter, BooleanTagFormatter, HtmlDisplayFormatter } from '@/components/TableFormatters'

function getConfig() {
  const tableConfigColumns = [
    'message', 'date_created', 'has_read'
  ]

  const tableConfigColumnsShow = {
    default: ['content.message', 'date_created', 'has_read'],
    min: ['message', 'has_read']
  }

  const tableConfigColumnsMeta = {
    message: {
      label: i18n.t('notifications.Message'),
      formatter: HtmlDisplayFormatter,
      formatterArgs: {
        getTitle: (row) => {
          return row.content.subject
        },
        getDisplay: (row) => {
          return row.content.message
        }
      }
    },
    date_created: {
      showOverflowTooltip: true,
      formatter: DateFormatter
    },
    has_read: {
      label: i18n.t('notifications.OneClickRead'),
      width: '100px',
      align: 'center',
      formatter: BooleanTagFormatter
    }
  }

  const headerActions = {
    hasCreate: false,
    hasExport: false,
    hasImport: false,
    canBulkDelete: true
  }
  return {
    tableConfigColumns: tableConfigColumns,
    tableConfigColumnsShow: tableConfigColumnsShow,
    headerActions: headerActions,
    tableConfigColumnsMeta: tableConfigColumnsMeta
  }
}

export default getConfig
