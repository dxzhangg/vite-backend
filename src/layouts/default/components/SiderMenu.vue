<script setup lang="ts">
import {useRoute} from 'vue-router'
const route = useRoute()
</script>

<template>
  <Menu active-name="route.name" theme="light" width="auto">
    <MenuItem name="home" to="/home"><Icon type="md-home" />首页</MenuItem>
    <MenuGroup title="后台管理">
      <MenuItem name="user_manage" :to="{name: 'user_manage'}"><Icon type="ios-people" />用户管理</MenuItem>
      <MenuItem name="role_manage" :to="{name: 'role_manage'}"><Icon type="md-people" />角色管理</MenuItem>
    </MenuGroup>
  </Menu>
</template>

<style scoped>

</style>