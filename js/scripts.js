/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const { createApp, ref } = Vue

createApp({
    data(){
        return {
            experiences: [
                {
                    title: 'Sistem Informasi Sumber Daya Air',
                    subtitle: 'Visualisasi Geospatial',
                    timeline: 'September 2013 - now',
                    url: 'http://jasatirta2.id/',
                    description: `Fullstack developer.
                    The application initially built using Yii version 1.1, but the rewrite using Laravel as API backend and VueJS as it frontend.
                    I am also developing mobile app using React Native and Kotlin for officer in field.`
                },
                {
                    title: 'Optimally Organic',
                    subtitle: 'Platform e-commerce',
                    timeline: 'April 2015 - Juni 2015',
                    url: 'https://www.optimallyorganic.com/',
                    description: 'Fullstack developer. built using Magento, MySql and Prototype.js'
                },
                {
                    title: 'e-Procurement',
                    subtitle: 'e-procurement for Perum Jasatirta II',
                    timeline: 'September 2016 - Februari 2017',
                    url: 'http://eproc.jasatirta2.co.id/',
                    description: 'Fullstack developer. built using Laravel, jQuery and PostgreSQL.'
                },
                {
                    title: 'Promotion media marketplace',
                    subtitle: 'Platform e-commerce',
                    timeline: 'Oktober 2018 - Januari 2019',
                    url: 'http://adpoint.id/',
                    description: 'Backend developer. built using Magento2 framework, MariaDB, and Elastic search.'
                },
                {
                    title: 'Accounting Application',
                    subtitle: 'Accounting Application of dinas kebersihan kota Bandung',
                    timeline: 'Januari 2019 - April 2019',
                    url: 'http://adm-pdk.com/',
                    description: 'Fullstack developer. built using Laravel, jQuery and PostgreSQL.'
                },
                {
                    title: 'Garbage collector and transportation',
                    subtitle: 'Garbage collector and transportation application for dinas kebersihan kota Bandung.',
                    timeline: 'April 2019 - Agustus 2019',
                    url: 'http://angkutsampah.com/bdg/',
                    description: `Fullstack developer. built using Laravel, jQuery and PostgreSQL.
                    I am also developing mobile app using React Native for officer in field.`
                },
                {
                    title: 'Sistem Informasi Manajemen Monitoring Pertambangan',
                    subtitle: 'Mining activity monitoring application along with legalization of mining company documents in North Maluku province',
                    timeline: 'Januari 2020 - Desember 2020',
                    url: 'http://simonta.id/',
                    description: 'built using Laravel, jQuery and PostgreSQL.'
                },
                {
                    title: 'Learning Management System (LMS)',
                    subtitle: 'Long distance learning applications',
                    timeline: 'Maret 2020 - Januari 2021',
                    url: 'http://lms.madinaschool.sch.id/',
                    description: 'Fullstack developer. built using Laravel, jQuery and PostgreSQL.'
                },
                {
                    title: 'Sistem Manajemen Arsip Terpadu (SMART) - PT Krakatau Steel (Persero), Tbk.',
                    subtitle: 'Correspondence application between divisions, positions, and between centers and subsidiaries',
                    timeline: 'Maret 2021 - November 2021',
                    url: 'https://smart.krakatausteel.com',
                    description: 'Fullstack developer. The stacks used include Laravel, Vue.js, MongoDB, Minio, Docker'
                },
                {
                    title: 'Sistem Informasi Rekapitulasi (SIREKAP) - Pemilu',
                    subtitle: 'Application for counting and recapitulation of votes in the 2024 Pemilu Election',
                    timeline: 'Agustus 2023 - Maret 2024',
                    url: 'https://sirekap-web.kpu.go.id/',
                    description: 'Frontend Developer. national scale application that built using stacks, VueJS 3, Pinia, Axios'
                },
                {
                    title: 'Info publik pemilu 2024',
                    subtitle: 'Public accessible application to monitor calculation results and recapitulation',
                    timeline: 'Agustus 2023 - Maret 2024',
                    url: 'https://pemilu2024.kpu.go.id/',
                    description: 'Frontend Developer. national scale application that built using stacks, VueJS 3, Axios'
                },
                {
                    title: 'Sistem Informasi Rekapitulasi (SIREKAP) - Pilkada',
                    subtitle: 'Application for counting and recapitulation of votes in the 2024 Pilkada Election',
                    timeline: 'Juni 2024 - December 2024',
                    url: 'https://sirekappilkada-web.kpu.go.id/',
                    description: 'Frontend Developer. national scale application that built using stacks, VueJS 3, Pinia, Axios'
                },
                {
                    title: 'Info publik pilkada 2024',
                    subtitle: 'Public accessible application to monitor calculation results and recapitulation',
                    timeline: 'Juni 2024 - December 2024',
                    url: 'https://pilkada2024.kpu.go.id/',
                    description: 'Frontend Developer. national scale application that built using stacks, VueJS 3, Axios'
                },
                {
                    title: 'Aplikasi Android SISDA Perum Jasatirta II',
                    subtitle: 'Android application for recording water resource variable measurements.',
                    timeline: 'Juni 2024 - Agustus 2024',
                    url: 'https://play.google.com/store/apps/details?id=co.id.jasatirta2.sisda&hl=en',
                    description: 'Built using kotlin as rewrite of React Native'
                },
                {
                    title: 'File Ingestion',
                    subtitle: 'Application for processing PDF data with the help of API from OpenAI',
                    timeline: 'September 2024 - November 2024',
                    url: 'https://ingest.wanakalapa.cloud/',
                    description: 'Full stack developer. tech stacks being used: express JS, MongoDB, VueJS 3, OpenAI'
                },
            ],
            skills: [
                {
                    name: 'Laravel',
                    icon: 'fa-brands fa-laravel',
                    stars: 4
                },
                {
                    name: 'Yii',
                    icon: 'fa-brands fa-php',
                    stars: 3
                },
                {
                    name: 'React JS',
                    icon: 'fa-brands fa-react',
                    stars: 4
                },
                {
                    name: 'React Native',
                    icon: 'fa-brands fa-react',
                    stars: 3
                },
                {
                    name: 'VueJS',
                    icon: 'fa-brands fa-vuejs',
                    stars: 4
                },
                {
                    name: 'CSS Framework',
                    icon: 'fa-brands fa-css3-alt',
                    stars: 4
                },
                {
                    name: 'MySql/MariaDB',
                    icon: 'fa-solid fa-database',
                    stars: 3
                },
                {
                    name: 'PostgreSQL',
                    icon: 'fa-solid fa-database',
                    stars: 3
                },
                {
                    name: 'MongoDB',
                    icon: 'fa-solid fa-database',
                    stars: 2
                },
                {
                    name: 'ExpressJS',
                    icon: 'fa-brands fa-node-js',
                    stars: 4
                },
                {
                    name: 'Kotlin',
                    icon: 'fa-brands fa-java',
                    stars: 3
                },
                {
                    name: 'Python',
                    icon: 'fa-brands fa-python',
                    stars: 3
                },
                {
                    name: 'Linux',
                    icon: 'fa-brands fa-linux',
                    stars: 3
                }
            ]
        }
    },
    mounted(){

    }
}).mount('#app')
