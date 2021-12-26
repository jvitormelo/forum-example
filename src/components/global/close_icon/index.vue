<template>
  <q-icon @click='onClick' style='cursor: pointer' size='md' color='negative' name='close' />
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name:'CloseIcon'
})
export default  class CloseIcon extends Vue{
  @Prop(Function) onClick!: () => void
}
</script>

<style scoped>

</style>
