<script setup lang="ts">
import {mapState, useStore} from 'vuex'
import { toRaw } from "@vue/reactivity";
import { computed } from '@vue/runtime-core';

const store = useStore()
const tableColumns:any = computed(() => toRaw(store.state.user.columns))
const tableData:any = computed(() => toRaw(store.state.user.data))
const tableMate:any = computed(() => toRaw(store.state.user.mate))
const searchFromData = computed(() => toRaw(store.state.user.searchFromData))
const handleSubmit = () => {
  store.dispatch('user/search')
}
</script>

<template>
  <Form ref="formInline" :model="searchFromData" inline>
      <FormItem prop="name">
          <Input type="text" v-model="searchFromData.name" placeholder="Name">
              <template #prepend>
                <Icon type="ios-person-outline"></Icon>
              </template>
          </Input>
      </FormItem>
      <FormItem>
          <Button type="primary" @click="handleSubmit()">Search</Button>
      </FormItem>
  </Form>
  <Table :columns="tableColumns" :data="tableData"></Table>
    <Page :total="tableMate.total" />
</template>

<style scoped>

</style>
