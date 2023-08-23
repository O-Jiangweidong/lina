<template>
  <TabPage :active-menu.sync="config.activeMenu" :submenu="config.submenu">
    <div slot="title">
      {{ Title }}
    </div>
    <keep-alive>
      <component :is="config.activeMenu" />
    </keep-alive>
  </TabPage>
</template>

<script>
import { TabPage } from '@/layout/components'
import AllMessageList from './AllMessageList'
import ReadMessageList from './ReadMessageList'
import UnreadMessageList from './UnreadMessageList'
export default {
  name: 'Index',
  components: {
    TabPage,
    AllMessageList,
    ReadMessageList,
    UnreadMessageList
  },
  data() {
    return {
      config: {
        activeMenu: 'UnreadMessageList',
        submenu: [
          {
            title: this.$t('notifications.AllMessages'),
            name: 'AllMessageList'
          },
          {
            title: this.$t('notifications.ReadMessages'),
            name: 'ReadMessageList'
          },
          {
            title: this.$t('notifications.UnreadMessages'),
            name: 'UnreadMessageList'
          }
        ]
      }
    }
  },
  computed: {
    Title() {
      return this.$t('route.MessageCenter')
    }
  },
  mounted() {
    const params = this.$route.params
    switch (params.activeMenu) {
      case 'AllMessageList':
        this.config.activeMenu = 'AllMessageList'
        break
      case 'ReadMessageList':
        this.config.activeMenu = 'ReadMessageList'
        break
      case 'UnreadMessageList':
        this.config.activeMenu = 'UnreadMessageList'
        break
    }
  }
}
</script>

<style scoped>
</style>
