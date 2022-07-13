<script setup lang="ts">
import MyHeaderMenu from './components/HeaderMenu.vue'
import MySiderMenu from './components/SiderMenu.vue'
import MyBreadcrumb from './components/Breadcrumb.vue'
import MyContent from './components/Content.vue'
import MyFooter from './components/Footer.vue'
</script>

<template>
  <div class="layout">
    <Layout>
      <Header>
        <my-header-menu></my-header-menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff', 'min-height': '100vh'}">
          <my-sider-menu></my-sider-menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <my-breadcrumb></my-breadcrumb>
          <my-content></my-content>
        </Layout>
      </Layout>
    </Layout>
    <my-footer></my-footer>
  </div>
</template>

<style scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
</style>
