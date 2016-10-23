<template>
    <div class="main container">
        <div v-if="isLoading" class="app-loading">
            <div class="text">Loading</div>
            <div class="loading-anim">
                <div class="loading spin-1">
                    <div class="loading spin-2">
                        <div class="loading spin-3">
                            <div class="loading spin-4">
                                <div class="loading spin-5">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <header ref="header" class="global-header">
        <div class="bg"></div>

        <h1 class="site-logo">Thai Le</h1>
        <div class="tagline">Web developer</div>

        <div class="info">Brooklyn, NY</div>

        <div class="socials">
            <a v-on:click="onSocialClick('facebook')" class="icon-facebook-white site-icon"></a>
            <a v-on:click="onSocialClick('twitter')" class="icon-twitter-white site-icon"></a>
            <a v-on:click="onSocialClick('linkedin')" class="icon-linkedin-white site-icon"></a>
        </div>

        <div v-on:click="goToProjects" class="cta"><span class="text">Projects</span> <span class="site-icon icon-down-arrow-white"></span></div>
    </header>

    <section class="projects-section main-section">
        <ul>
            <li v-for="project in projects" class="project">
                <a :href="project.url" v-on:click.prevent="onProjectClick(project.title, project.url)">
                    <div class="thumb">
                        <img :src="'src/images/projects/' + project.image_thumb">
                    </div>
                    <div class="info">
                        <h2>{{ project.title }}</h2>
                    </div>
                </a>
            </li>
        </ul>
    </section>
</template>

<script>
    import './scss/style.scss';
    import './images/icons/icons.data.svg.css';
    import projects from './fixtures/projects';

    function scrollAnimate(top, scrollDuration) {
        var scrollStep = top / (scrollDuration / 15);
        var body = document.body;
        var html = document.documentElement;
        var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        var winHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        var scrollInterval = setInterval(() => {
            if (window.scrollY != top
                && (body.scrollTop + winHeight < docHeight)
            ) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15 );
    }

    module.exports = {
        replace: false,
        data() {
            return {
                isLoading: false,
                projects: projects
            }
        },
        ready() {
                var mainHeaderHeight = this.$refs;
                console.log('header height: ', mainHeaderHeight);
        },
        methods: {
            goToProjects() {
                if(!this.$refs.header) {
                    return;
                }

                scrollAnimate(parseInt(this.$refs.header.offsetHeight, 10), 300);

				window.ga("send", "event", "cta", "click", "go to projects");
            },
            onProjectClick(title, url) {
                if(!title || !url) {
                    return;
                }

				window.ga("send", "event", "projects", "click", title);

                if(url) {
                    window.open(url);
                }
            },
			onSocialClick(socialName) {
                if(!socialName) {
                    return;
                }

                var social;

				window.ga("send", "event", "socials", "click", socialName);

				switch(socialName) {
					case 'facebook':
						social = 'http://facebook.com/thai.viet.le';
						break;
					case 'twitter':
						social = 'http://www.twitter.com/buddharage';
						break;
					case 'linkedin':
						social = 'http://www.linkedin.com/in/thaivietle';
						break;
				}

                if(social) {
                    window.open(social);
                }
			},
        }
    };
</script>
