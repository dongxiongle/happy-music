<template>
  <div>
    <nav>导航</nav>
    <keep-live>
      <router-view></router-view>
    </keep-live>
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
