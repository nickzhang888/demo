<template>
  <div id="header">
    <!-- 传递动态属性给子组件(title),短横线分割命名 -->
    <header-child ref="headerChild" :getTitle="title" @getMessage="showMessage(e)"></header-child>
    <button @click="getChild">父组件获取子组件的数据和方法</button>
  </div>
</template>
<script>
import HeaderChild from "./HeaderChild";
export default {
  // $emit子组件调用父组件的方法并传递数据
  // this.$emit("key",value),
  // this.$emit("customer", res.data)
  // this.$emit("isContact", this.isContact)
  // <header-child  @isContact="choiceContact(e)" @customer="getCutomer(e)"></header-child>
  components: {
    "header-child": HeaderChild,
  },
  data() {
    return {
      title: "我是父组件的数据",
      message:""
    };
  },
  methods: {
    getChild() {
      console.log(this.$refs.headerChild.name);
    },
    run() {
      console.log("我是父组件里面的方法");
    },
    showMessage(value){
      this.message = value
    }
  },
};
</script>
<style lang="sass" scoped></style>
