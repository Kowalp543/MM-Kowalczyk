<template>
  <div>
    <AppHeader />
    <AppPriceList />
    <AppSecondaryFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppPriceList from '@/components/AppPriceList'
import AppSecondaryFooter from '@/components/AppSecondaryFooter'

export default {
  components: {
    AppHeader,
    AppPriceList,
    AppSecondaryFooter,
  }
}
</script>