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
import AppSecondaryFooter from '@/components/AppFooter'

export default {
  components: {
    AppHeader,
    AppInformationContact,
    AppSecondaryFooter,
  }
}
</script>