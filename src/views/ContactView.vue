<template>
  <div>
    <AppHeader />
    <AppInformationContact />
    <AppSecondaryFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppInformationContact from '@/components/AppInformationContact'
import AppSecondaryFooter from '@/components/AppSecondaryFooter'

export default {
  components: {
    AppHeader,
    AppInformationContact,
    AppSecondaryFooter,
  }
}
</script>