<template>
  <q-input filled :rules='rules'  v-model='valueSynced'  :type='type' :label='label' :name='name'>
  <template #append>
    <slot name='append'></slot>
  </template>
  </q-input>
</template>

<script lang='ts'>
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';

@Component({
  name: 'Input'
})
export default class Input extends Vue{
  @PropSync('value', {required:true, type:String})valueSynced!:string
  @Prop({type:String, default: () => 'text', required:false})type!:string
  @Prop(Array)rules!: ()=>void[]
  @Prop(String)label!:string
  @Prop(String)name!:string



};
</script>

<style scoped>

</style>
