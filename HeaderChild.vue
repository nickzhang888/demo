<template>
  <div id="headerchild">
    <button @click="getParent">获取父组件的数据和方法</button>
    <span>{{ getTitle }}</span>
  </div>
</template>
<script>
export default {
  // 弹框中注意要用两个$parent
  // this.$parent.父组件属性
  // this.$parent.父组件方法
  // props里可以对传过来的值进行校验
  //   props: {
  //     // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
  //     propA: Number,
  //     // 多个可能的类型
  //     propB: [String, Number],
  //     // 必填的字符串
  //     propC: {
  //       type: String,
  //       required: true
  //     }
  //   },
  props: ["getTitle"] /*通过props接收父组件传递过来的数据 */,
  data() {
    return {
      name: "我是子组件里面的数据"
    };
  },
  methods: {
    getParent() {
      console.log(this.$parent.title);
      this.$parent.run(); /*获取父组件的方法*/
      this.$emit("getMessage","我通过emit方法传值给父组件")
    }
  }
};
</script>
