<template>
  <div>
    <h1>sample site</h1>
    <hr />
    <!-- <Nuxt keep-alive /> -->
    <Nuxt />
    <hr />
    <div>footer</div>
    <Nav />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
declare const window: any;

export default Vue.extend({
  created: () => {
    // console.log("nuxtjs top created!");
    // // 手持ちから検索
    // const script1 = document.createElement("script");
    // script1.src =
    //   "https://dev-biz.xz-closet.jp/assets/tag-sample-site/tag-loader/xzbiz-script-loader.js?type=search&version=3.1.0&env=dev&site=andmall&initMode=manual";
    // document.body.appendChild(script1);
    // // 商品詳細提案
    // const script2 = document.createElement("script");
    // script2.src =
    //   "https://dev-biz.xz-closet.jp/assets/tag-sample-site/tag-loader/xzbiz-script-loader.js?type=suggest&version=3.1.0&env=dev&site=andmall&initMode=manual";
    // document.body.appendChild(script2);
    // // 商品詳細提案
    // const script3 = document.createElement("script");
    // script3.src =
    //   "https://dev-biz.xz-closet.jp/assets/tag-sample-site/tag-loader/xzbiz-script-loader.js?type=cart&version=3.1.0&env=dev&site=andmall&initMode=manual";
    // document.body.appendChild(script3);
    // //
    // script1.onload = script2.onload = script3.onload = function() {
    //   console.log("script loaded: ", (this as any).src);
    // };
  }
});
</script>
