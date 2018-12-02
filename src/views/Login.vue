<template>
  <div class="main">
    <div class="tip">
      <img class="logo" src="../assets/logo.png" alt="">
      <p class="message">Sign in to GitHub</p>
    </div>
    <div class="error_tip">密码错误</div>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <FormItem prop="user">
        <i-Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </i-Input>
      </FormItem>
      <FormItem prop="password">
        <i-Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </i-Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { Form, FormItem } from 'iview'

export default {
  name: 'Login',
  components: {
    Form,
    FormItem
  },
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          {required: true, message: 'Please fill in the user name', trigger: 'blur'}
        ],
        password: [
          {required: true, message: 'Please fill in the password.', trigger: 'blur'},
          {type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  background: #FFF;
  text-align: center;
  .tip {
    .logo {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 32px 0 24px;
    }
    .message {
      line-height: 36px;
      font-size: 24px;
      font-weight: 300;
    }
  }
  .error_tip {
    width: 308px;
    margin: 0 auto 10px;
    border: 1px solid rgba(27,31,35,.15);
    border-radius: 5px;
    font-size: 13px;
    padding: 15px 20px;
    background-color: #ffdce0;
    color: #86181d;
  }
}
</style>
