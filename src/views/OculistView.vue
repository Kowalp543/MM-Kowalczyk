<template>
  <div>
    <AppHeader />
    <AppInformationOculist />
    <AppSecondaryFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppInformationOculist from '@/components/AppInformationOculist'
import AppSecondaryFooter from '@/components/AppSecondaryFooter'

export default {
  components: {
    AppHeader,
    AppInformationOculist,
    AppSecondaryFooter,
  }
}
</script>