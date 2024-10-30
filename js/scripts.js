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
                    timeline: 'September 2013 - Sekarang',
                    url: 'http://jasatirta2.id/',
                    description: 'Fullstack developer dan Project Manager. Aplikasi ini dikembangkan dengan menggunakan Laravel, Vue, React Native, PostgreSQL. Antara Backend dan Front serta aplikasi Android terhubung satu sama lain dengan menggunakan API.'
                },
                {
                    title: 'Optimally Organic',
                    subtitle: 'Platform e-commerce',
                    timeline: 'April 2015 - Juni 2015',
                    url: 'https://www.optimallyorganic.com/',
                    description: 'Fullstack developer. dibangun dengan menggunakan framework Magento, MySql, Prototype.js'
                },
                {
                    title: 'e-Procurement',
                    subtitle: 'Sistem Informasi Lelang pekerjaan Perum Jasatirta II',
                    timeline: 'September 2016 - Februari 2017',
                    url: 'http://eproc.jasatirta2.co.id/',
                    description: 'Fullstack developer. dibangun menggunakan Laravel, jQuery dan PostgreSQL.'
                },
                {
                    title: 'Marketplace media promosi',
                    subtitle: 'Platform e-commerce',
                    timeline: 'Oktober 2018 - Januari 2019',
                    url: 'http://adpoint.id/',
                    description: 'Backend developer. dibangun menggunakan framework Magento2, MariaDB, dan Elastic search.'
                },
                {
                    title: 'Aplikasi akunting',
                    subtitle: 'Aplikasi akunting untuk dinas kebersihan kota Bandung',
                    timeline: 'Januari 2019 - April 2019',
                    url: 'http://adm-pdk.com/',
                    description: 'Fullstack developer. dibangun menggunakan Laravel, jQuery dan PostgreSQL'
                },
                {
                    title: 'Aplikasi angkut sampah untuk dinas kebersihan kota Bandung.',
                    subtitle: 'Aplikasi pengangkutan sampah',
                    timeline: 'April 2019 - Agustus 2019',
                    url: 'http://angkutsampah.com/bdg/',
                    description: 'Fullstack developer. dibangun dengan menggunakan Laravel, jQuery, React Native dan postgreSQL. antara Backend dan Android app (React Native) dihubungkan dengan menggunakan API. selain mengembangkan webapp/API, disini juga dikembangkan aplikasi android untuk petugas lapangan.'
                },
                {
                    title: 'Sistem Informasi Manajemen Monitoring Pertambangan',
                    subtitle: 'Aplikasi pemantauan aktifitas pertambangan beserta legalisasi dokumen perusahaan tambang di provinsi Maluku Utara',
                    timeline: 'Januari 2020 - Desember 2020',
                    url: 'http://simonta.id/',
                    description: 'dibangun menggunakan Laravel, jQuery, dan PostgreSQL.'
                },
                {
                    title: 'Learning Management System (LMS)',
                    subtitle: 'Aplikasi pembelajaran jarak jauh',
                    timeline: 'Maret 2020 - Januari 2021',
                    url: 'http://lms.madinaschool.sch.id/',
                    description: 'Fullstack developer. LMS ini dibangun menggunakan Laravel, jQuery, PostgreSQL.'
                },
                {
                    title: 'Sistem Manajemen Arsip Terpadu (SMART) - PT Krakatau Steel (Persero), Tbk.',
                    subtitle: 'Aplikasi surat menyurat antar divisi, antar jabatan, serta antar pusat dan anak perusahaan',
                    timeline: 'Maret 2021 - November 2021',
                    url: 'https://smart.krakatausteel.com',
                    description: 'Fullstack developer. stack yang digunakan antara lain Laravel, Vue.js, MongoDB, Minio, Docker'
                },
                {
                    title: 'Sistem Informasi Rekapitulasi (SIREKAP)',
                    subtitle: 'Aplikasi penghitungan dan rekapitulasi pemungutan suara pada Pemilu 2024',
                    timeline: 'Agustus 2023 - Maret 2024',
                    url: 'https://sirekap-web.kpu.go.id/',
                    description: 'Sebagai Frontend Developer. stack yang digunakan antara lain, VueJS 3, Pinia, Axios'
                },
                {
                    title: 'Aplikasi Android SISDA Perum Jasatirta II',
                    subtitle: 'Aplikasi Android untuk pencatatan pengukuran variabel sumber daya air.',
                    timeline: 'Juli 2024 - Agustus 2024',
                    url: 'https://play.google.com/store/apps/details?id=co.id.jasatirta2.sisda&hl=en',
                    description: 'Dibangun dengan menggunakan Kotlin'
                },
                {
                    title: 'File Ingestion',
                    subtitle: 'Aplikasi untuk memproses data PDF dengan bantuan API dari OpenAI',
                    timeline: 'September 2024 - November 2024',
                    url: 'https://ingest.wanakalapa.cloud/',
                    description: 'Full stack developer. teknologi yang digunakan antara lain, express JS, MongoDB, VueJS 3, OpenAI'
                },
            ],
            skills: [
                {
                    name: 'Laravel',
                    icon: 'fa-brands fa-laravel',
                    percent: '80%'
                },
                {
                    name: 'Yii',
                    icon: 'fa-brands fa-php',
                    percent: '70%'
                },
                {
                    name: 'React JS',
                    icon: 'fa-brands fa-react',
                    percent: '70%'
                },
                {
                    name: 'React Native',
                    icon: 'fa-brands fa-react',
                    percent: '70%'
                },
                {
                    name: 'VueJS',
                    icon: 'fa-brands fa-vuejs',
                    percent: '85%'
                },
                {
                    name: 'CSS Framework',
                    icon: 'fa-brands fa-css3-alt',
                    percent: '80%'
                },
                {
                    name: 'MySql/MariaDB',
                    icon: 'fa-solid fa-database',
                    percent: '60%'
                },
                {
                    name: 'PostgreSQL',
                    icon: 'fa-solid fa-database',
                    percent: '60%'
                },
                {
                    name: 'MongoDB',
                    icon: 'fa-solid fa-database',
                    percent: '60%'
                },
                {
                    name: 'ExpressJS',
                    icon: 'fa-brands fa-node-js',
                    percent: '80%'
                },
                {
                    name: 'Kotlin',
                    icon: 'fa-brands fa-java',
                    percent: '70%'
                },
                {
                    name: 'Python',
                    icon: 'fa-brands fa-python',
                    percent: '60%'
                },
                {
                    name: 'Linux',
                    icon: 'fa-brands fa-linux',
                    percent: '70%'
                }
            ]
        }
    },
    mounted(){

    }
}).mount('#app')
