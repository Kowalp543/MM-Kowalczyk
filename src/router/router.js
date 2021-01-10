import Vue from 'vue';
import Router from 'vue-router';
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import About from '@/components/About.vue';
import Specialty from '@/components/Specialty.vue';
import Footer from '@/components/Footer.vue';
import Footer2 from '@/components/Footer-2.vue';
import InformationO from '@/components/Information-O.vue';
import InformationD from '@/components/Information-D.vue';
import InformationC from '@/components/Information-C.vue';

Vue.use(Router);

const RouterVue = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
          default: Header,
          banner: Banner,
          about: About,
          specialty: Specialty,
          footer: Footer,
      }
    },
    {
      path: '/okulista',
      name: 'okulista',
      components: {
          default: Header,
          informationO: InformationO,
          footer2: Footer2,
      }
    },
    {
      path: '/diabetolog',
      name: 'diabetolog',
      components: {
          default: Header,
          informationO: InformationD,
          footer2: Footer2,
      }
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      components: {
          default: Header,
          informationO: InformationC,
          footer2: Footer2,
      }
    }
  ]
});

export default RouterVue;