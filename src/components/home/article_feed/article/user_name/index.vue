<template>
  <div class='flex items-center'>
    <q-img :src='iconURL' width='3rem' style='border-radius: 50%' />
    <span class='q-ml-sm text-body1'>{{ username }}</span>
  </div>
</template>

<script>

import UserName from './UserName';

export default UserName;
</script>

<style scoped>

</style>
