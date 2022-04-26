<template>
    <nav-bar></nav-bar>
    <div class="h-screen flex flex-col justify-center items-center">
                <h1 class="text-center leading-normal font-bold sm:text-sm_title md:text-md_title lg:text-lg_title xl:text-xl_title text-5xl">DÉVELOPPEUR WEB<br>X<br>ÉTUDIANT</h1>
                <button @click="scrollToSectionOne" type="button" class="uppercase flex flex-row justify-center items-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-8">
                    en savoir plus
                    <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </button>
            </div>
            <div class="container mx-auto sm:px-2 md:px-6 lg:px-12 xl:px-16 px-2 min-h-screen">
                <div class="flex sm:justify-center md:justify-start lg:justify-start xl:justify-start justify-center">
                    <div class="flex justify-center flex-col items-start">
                        <h1 class="uppercase text-2xl font-heading" ref="propos">a propos</h1>
                        <div class="w-full h-1 bg-red-700"></div>
                    </div>
                </div>
                <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 grid-cols-1 items-start justify-center mt-12">
                    <div class="flex sm:justify-center md:justify-center lg:justify-end xl:justify-end justify-center flex-col font-heading text-center sm:text-center md:text-left lg:text-left xl:text-left text-center">
                        <label class="text-2xl uppercase">Bonjour,</label>
                        <h1 class="sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl text-3xl font-heading font-bold">Je suis Marin, développeur web<br>et passionnée</h1>
                        <p class="font-heading mt-8 text-lg">
                            Depuis maintenant quelques années,<br>
                            je me suis intéressé à la création de sites web,<br>
                            et plus particulièrement au framework PHP Laravel, associé avec Vue.js</p>
                        <div class="flex w-full sm:justify-center md:justify-start lg:justify-start xl:justify-start justify-center">
                            <a href="path_to_file" download="proposed_file_name"><button @click="scrollToSectionOne" type="button" class="uppercase w-48 flex flex-row justify-center items-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-8">
                                Mon cv
                                <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                            </button></a>
                        </div>
                    </div>
                    <div class="flex sm:justify-center md:justify-center lg:justify-start xl:justify-start justify-center">
                        <img src="@/assets/images/website.svg" class="sm:h-72 md:h-72 lg:h-96 xl:h-website h-72">
                    </div>
                </div>
            </div>
            <div class="container mx-auto sm:px-2 md:px-6 lg:px-12 xl:px-16 px-2 min-h-screen">
                <div class="flex sm:justify-center md:justify-start lg:justify-start xl:justify-start justify-center">
                    <div class="flex justify-center flex-col items-start">
                        <h1 class="uppercase text-2xl font-heading" ref="competences">compétences</h1>
                        <div class="w-full h-1 bg-red-700"></div>
                    </div>
                </div>
                <div class="flex sm:flex-col md:flex-row lg:flex-row xl:flex-row sm:justify-center md:justify-start lg:justify-start xl:justify-start items-start justify-center mt-12 flex-col">
                    <competence-component  name="php" color="border-indigo-400" image="/images/techno/php.png" loading="bg-indigo-400" pourcent="80"></competence-component>
                    <competence-component name="html" color="border-red-700" loading="bg-red-700" image="/images/techno/html.png" pourcent="90"></competence-component>
                    <competence-component name="css" color="border-blue-700" loading="bg-blue-700" image="/images/techno/css.png" pourcent="70"></competence-component>
                    <competence-component name="js" color="border-yellow-200" image="/images/techno/js.png" loading="bg-yellow-200" pourcent="90"></competence-component>
                </div>
                <div class="flex sm:flex-col md:flex-row lg:flex-row xl:flex-row sm:justify-center md:justify-start lg:justify-start xl:justify-start items-start justify-center mt-12 flex-col">
                    <competence-component name="laravel" color="border-red-700" image="/images/techno/laravel.png" loading="bg-red-700" pourcent="70"></competence-component>
                    <competence-component name="sql" color="border-yellow-300" loading="bg-yellow-300" image="/images/techno/sql.png" pourcent="60"></competence-component>
                    <competence-component name="tailwind" color="border-blue-400" loading="bg-blue-400" image="/images/techno/tailwind.png" pourcent="90"></competence-component>
                    <competence-component name="vuejs" color="border-cyan-600" image="/images/techno/vuejs.png" loading="bg-cyan-600" pourcent="70"></competence-component>
                </div>

            </div>
            <div class="container mx-auto sm:px-2 md:px-6 lg:px-12 xl:px-16 px-2 mt-8">
                <div class="flex sm:justify-center md:justify-start lg:justify-start xl:justify-start justify-center">
                    <div class="flex justify-center flex-col items-start">
                        <h1 class="uppercase text-2xl font-heading" ref="realisation">réalisations</h1>
                        <div class="w-full h-1 bg-red-700"></div>
                    </div>
                </div>
                <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 items-start justify-center mt-12">
                    <realisation-component name="Projet Pokedex" date="Janv.2022" description="Pokedex est un projet réalisé en python durant ma 3éme année chez EPSI, l'objectif de ce projet était de mettre en place une page web regroupant une liste de pokemons et leur informations.
                    Technologies: Django, VueJS, TailwindCSS " type="Développement web" image="https://github.com/marintosti12/pokedex/raw/main/images/home.png?raw=true" link="https://github.com/marintosti12/pokedex"></realisation-component>

                    <realisation-component name="Arpon Technologies" date="Sept.2020 - Dec.2020" description="Pendant ma deuxième année chez Epitech j'ai pu réaliser un stage de 4 mois dans l'entreprise Arpon Technologies, durant cette période j'ai pu mettre en pratique mes connaissances en réalisant un site web pour l'entreprise" type="Stage" image="https://media-exp1.licdn.com/dms/image/C4D0BAQHmVnGtBzqQYA/company-logo_200_200/0/1608803079073?e=2147483647&v=beta&t=bnWc5pzntScATdnTbUTtz9r7d03r9dw1URETsJbswYM" link="https://www.arpon-technologies.com/"></realisation-component>
                    <realisation-component name="Arpon Technologies" date="Sept.2020 - Dec.2020" description="Pendant ma deuxième année chez Epitech j'ai pu réaliser un stage de 4 mois dans l'entreprise Arpon Technologies, durant cette période j'ai pu mettre en pratique mes connaissances en réalisant un site web pour l'entreprise" type="Création de site" image="https://media-exp1.licdn.com/dms/image/C4D0BAQHmVnGtBzqQYA/company-logo_200_200/0/1608803079073?e=2147483647&v=beta&t=bnWc5pzntScATdnTbUTtz9r7d03r9dw1URETsJbswYM" link="https://www.arpon-technologies.com/"></realisation-component>
                </div>
            </div>
            <div class="container mx-auto sm:px-2 md:px-6 lg:px-12 xl:px-16 px-2 mt-24 min-h-screen ">
                <div class="flex sm:justify-center md:justify-start lg:justify-start xl:justify-start justify-center">
                    <div class="flex justify-center flex-col items-start">
                        <h1 class="uppercase text-2xl font-heading" ref="contact">Contact</h1>
                        <div class="w-full h-1 bg-red-700"></div>
                    </div>
                </div>
                <form class="w-full mt-4">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Prénom
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="">
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Nom
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="">
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                E-mail
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="">
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="align-bottom inline-block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Téléphone
                            </label>
                            <label class=" align-bottom inline-block float-right uppercase tracking-wide text-red-700 text-xs font-bold mb-2">Optionnel</label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="">
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6 mt-8">
                        <div class="w-full px-3">
                            <label class="align-bottom inline-block font-heading uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Sujet
                            </label>
                            <label class=" align-bottom inline-block float-right uppercase tracking-wide text-red-700 text-xs font-bold mb-2">Optionnel</label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="">
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6 mt-8">
                        <div class="w-full px-3">
                            <label class="block font-heading uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Message
                            </label>
                            <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="" rows="8"></textarea>
                        </div>
                    </div>
                    <button type="submit" class="uppercase flex flex-row justify-center items-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ">
                        Envoyer
                    </button>
                </form>
            </div>
</template>

<script>
import NavBar from './views/Navbar.vue';
import CompetenceComponent from './components/CompetenceComponent.vue';
import RealisationComponent from './components/RealisationComponent.vue';


export default {
  name: 'App',
  components: {
    NavBar,
    CompetenceComponent,
    RealisationComponent
  },
  data:  function () {
      return {
        route: window.location.search
      }
  },
  methods: {
      scrollToSectionOne()
      {
          let el = this.$refs.propos
          window.scrollTo({top: el.offsetTop - 100, behavior: 'smooth'});
      },
      scrollToSectionTwo()
      {
          let el = this.$refs.competences
          window.scrollTo({top: el.offsetTop - 100, behavior: 'smooth'});
      },
      scrollToSectionThird()
      {
          let el = this.$refs.realisation
          window.scrollTo({top: el.offsetTop - 100, behavior: 'smooth'});
      },
      scrollToSectionFour()
      {
          let el = this.$refs.contact
          window.scrollTo({top: el.offsetTop - 100, behavior: 'smooth'});
      }

  },
  mounted() {
      const instance = this;

      window.addEventListener('hashchange', function() {
          if (window.location.hash === '#apropos')
              instance.scrollToSectionOne()
          if (window.location.hash === '#competences')
              instance.scrollToSectionTwo()
          if (window.location.hash === '#realisation')
              instance.scrollToSectionThird()
          if (window.location.hash === '#contact')
              instance.scrollToSectionFour()
      }, false);
  }
}
</script>

