<template>
  <div>
    <AppHeader />
    <AppBanner />
    <AppAbout />
    <AppSpeciality />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppBanner from '@/components/AppBanner'
import AppAbout from '@/components/AppAbout'
import AppSpeciality from '@/components/AppSpeciality'
import AppFooter from '@/components/AppFooter'

export default {
  components: {
    AppHeader,
    AppBanner,
    AppAbout,
    AppSpeciality,
    AppFooter,
  }
}
</script>