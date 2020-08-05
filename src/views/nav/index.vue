<template>
  <div>
    <nav>导航</nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({
  components: {}
})
export default class NavIndex extends Vue {

}
</script>
