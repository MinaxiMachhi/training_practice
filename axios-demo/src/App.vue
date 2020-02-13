<template>
  <div>
    <!-- <axiosDeo></axiosDemo> -->
    <!-- <posts></posts> -->
    <!-- <PostsHome></PostsHome> -->
    <!-- <watcher></watcher> -->
    <!-- <method></method> -->
    <!-- <RegForm></RegForm> -->
    <!-- <ReferenceDemo></ReferenceDemo> -->
    <RegFormRefs/>
    <!-- <SuperRefs/> -->
  </div>
</template>

<script>
import axiosDemo from "@/components/axios-demo.vue";
import propsDemo from "@/components/props-demo.vue";
import propsDemoChild from "@/components/props-demo-child.vue";
import watcher from "@/components/watcher.vue";
import method from "@/components/method.vue";
import posts from "@/components/posts";
import PostsHome from "@/components/PostsHome.vue";
import ReferenceDemo from "@/components/ReferenceDemo.vue";
import RegFormRefs from "@/components/RegFormRefs.vue";
import SuperRefs from "@/components/SuperRefs.vue";
// import RegForm from "@/components/RegForm.vue";
export default {
  components: {
    propsDemo: propsDemo,
    axiosDemo: axiosDemo,
    propsDemoChild: propsDemoChild,
    watcher: watcher,
    method: method,
    posts,
    PostsHome,
    ReferenceDemo,
    RegFormRefs,
    SuperRefs
    // RegForm

  }
};
</script>