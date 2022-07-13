<template>
  <div>
    <div class="wrapper" id="wrapper">
      <div :class="`snow${index}`" v-for="(item, index) in number" :key="index"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: 100,
    };
  },
  created() {},
};
</script>
<style lang="scss" scoped>
$total: 100;
body {
  //   height: 100vh;
  // background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
  // filter: drop-shadow(0 0 10px white);
}
@function random_range($min, $max) {
  $random_range: floor(random() * ($max - $min + 1) + $min);
  @return $random_range;
}

// through包括end这个数，to不包括end这个数。

@for $i from 0 to $total {
  $random-x: random(1000000) * 0.0001vw;
  $random-offset: random_range(-100000, 100000) * 0.0001vw;
  $random-x-start: $random-x + $random-offset;
  $random-x-end: $random-x + ($random-offset / 2);
  $random-yoyo-time: random_range(30000, 80000) / 100000;
  $random-y-start: $random-yoyo-time * 100vh;
  $random-scale: random(10000) * 0.0001;
  $fall-duration: random_range(10, 30) * 1s;
  $fall-delay: random(30) * -1s;
  .snow#{$i} {
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    opacity: 0.5;
    border-radius: 50%;
    opacity: random(10000) * 0.0001;
    transform: translate($random-x, -10px) scale($random-scale);
    animation: fall#{$i} $fall-duration $fall-delay linear infinite;

    @keyframes fall#{$i} {
      #{ percentage($random-yoyo-time)} {
        transform: translate($random-x-start, $random-y-start) scale($random-scale);
      }
      to {
        transform: translate($random-x-end, 100vh) scale($random-scale);
      }
    }
  }
}
</style>
