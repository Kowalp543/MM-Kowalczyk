<template>
  <div>
    <AppHeader />
    <AppInformationDiabetologist />
    <AppSecondaryFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppInformationDiabetologist from '@/components/AppInformationDiabetologist'
import AppSecondaryFooter from '@/components/AppSecondaryFooter'

export default {
  components: {
    AppHeader,
    AppInformationDiabetologist,
    AppSecondaryFooter,
  }
}
</script>