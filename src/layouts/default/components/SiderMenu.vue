<script setup lang="ts">

</script>

<template>
  <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
    <MenuItem name="home" to="/home">首页</MenuItem>
    <MenuItem name="about" to="/about">关于</MenuItem>
    <Submenu name="3">
      <template #title>
        <Icon type="ios-analytics"></Icon>
        Item 3
      </template>
      <MenuItem name="3-1">Option 1</MenuItem>
      <MenuItem name="3-2">Option 2</MenuItem>
    </Submenu>
  </Menu>
</template>

<style scoped>

</style>