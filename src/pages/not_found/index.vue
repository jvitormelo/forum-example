<template>
  <div class='fullscreen bg-dark text-white text-center q-pa-md flex flex-center'>
    <div>
      <div style='font-size: 30vh'>
        404
      </div>

      <div class='text-h2'>
        Oops... Página não encontrada
      </div>

      <q-btn
        class='q-mt-xl'
        color='primary'
        unelevated
        rounded
        to='/'
        label='Voltar para o início'
        no-caps
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'NotFound'
})
export default class NotFound extends Vue {
}
</script>
