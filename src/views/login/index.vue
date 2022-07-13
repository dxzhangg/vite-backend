<script setup lang="ts">
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {reactive, ref} from "vue";
const router = useRouter()
const store = useStore()
interface FormData {
  username: string,
  password: string,
}
const formData: FormData = reactive({
  username: 'admin',
  password: 'password',
})
const ruleValidate = {

}
const handleSubmit = () => {
  store.dispatch('auth/login', formData).then((data) => {
    if (data === true) {
      router.replace({name: 'home'})
    }
  })
}
</script>

<template>
  <div class="login">
    <Form ref="formValidate" :model="formData" :rules="ruleValidate" :label-width="80">
      <FormItem label="用户名" prop="username">
        <Input v-model="formData.username" placeholder="请输入用户名"></Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input v-model="formData.password" placeholder="请输入密码"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit()">Submit</Button>
      </FormItem>
    </Form>
  </div>
</template>

<style scoped>
.login{
  width: 400px;
  margin: 20vh auto 0 !important;
}
</style>
