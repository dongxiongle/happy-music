<template>
  <div>{{msg}}1111</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class FindIndex extends Vue {
  name = 'findIndex';
  @Prop() msg!: string;
}
</script>
