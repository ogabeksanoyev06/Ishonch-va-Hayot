<template>
  <headroom>
    <header
      class="header"
      :class="{
        greyBg: $route.path === '/',
        header__shadow: $route.path !== '/',
      }"
    >
      <div class="container">
        <div class="header__inner">
          <div class="header__left">
            <router-link to="/" class="logo">
              <img src="/svg/logo1.svg" alt="logo" />
            </router-link>
            <ul class="header__menu">
              <li
                class="header__menu-item"
                v-for="(item, index) in menu"
                :key="index"
                :class="
                  (activeId === index ? 'active' : '',
                  $route.path !== '/' ? 'header__menu-black' : '')
                "
                @click="activeLink(index)"
                v-on="handleShowDropdownInner(item.id)"
              >
                <router-link class="header__menu-link" :to="item.link">
                  {{ $t(item.title) }}
                </router-link>
                <transition name="slide">
                  <div class="dropdown__menu" v-if="item.id === subActiveId">
                    <ul class="dropdown__menu-inner">
                      <li
                        class="dropdown__menu-item"
                        v-for="(submenu, idx) in item.children"
                        :key="idx"
                      >
                        <router-link
                          :to="{
                            path: submenu.link,
                          }"
                          class="dropdown__menu-link"
                        >
                          {{ $t("Module") }} {{ idx + 1 }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </transition>
              </li>
            </ul>
          </div>
          <div class="header__right">
            <div
              class="header__language"
              @click="languageDropdown = !languageDropdown"
              v-on-click-outside:excludedClass="hideLanguageDropdown"
            >
              <div class="header__language-icon">
                <img src="/icons/globe.svg" alt="" />
              </div>
              <div
                class="header__dropdown"
                :class="languageDropdown ? 'active' : ''"
              >
                <ul class="header__dropdown-wrap">
                  <li
                    @click="changeLanguage('ru')"
                    class="header__dropdown-item"
                  >
                    <a class="header__dropdown-link"> <span>Russian</span> </a>
                  </li>
                  <li
                    @click="changeLanguage('uz')"
                    class="header__dropdown-item"
                  >
                    <a class="header__dropdown-link"> <span>Uzbek</span> </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="header__auth" v-if="!userIsLoggedOn">
              <button
                class="header__login"
                @click="$router.push({ name: 'login' })"
                :class="$route.path === '/' ? 'header__login-white' : ''"
              >
                {{ $t("Enter") }}
              </button>
              <button
                class="header__register"
                @click="$router.push({ name: 'register' })"
              >
                {{ $t("Registration") }}
              </button>
            </div>
            <div
              class="header__account"
              v-if="userIsLoggedOn"
              @click="accountDropdown = !accountDropdown"
              v-on-click-outside:excludedClass="hideAccountDropdown"
            >
              <div class="header__account-photo">
                <img src="/images/user-photo.webp" alt="" />
              </div>
              <div
                class="header__dropdown"
                :class="accountDropdown ? 'active' : ''"
              >
                <ul class="header__dropdown-wrap">
                  <li class="header__dropdown-item">
                    <router-link to="/cabinet" class="header__dropdown-link">
                      <span> {{ $t("Profile") }} </span>
                    </router-link>
                  </li>
                  <li class="header__dropdown-item" @click.prevent="logout">
                    <router-link to="/" class="header__dropdown-link">
                      <span> {{ $t("Output") }} </span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="hamburger__menu"
              @click="showNavigationDrawer"
              :class="{ active: navigationDrawer }"
            >
              <svg
                data-v-545dd0d4=""
                width="100"
                height="100"
                viewBox="0 0 100 100"
                class="svg-icon"
                style="width: 24px; height: 24px"
              >
                <path
                  data-v-545dd0d4=""
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                  class="line line1"
                ></path>
                <path
                  data-v-545dd0d4=""
                  d="M 20,50 H 80"
                  class="line line2"
                ></path>
                <path
                  data-v-545dd0d4=""
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                  class="line line3"
                ></path>
              </svg>
              <span>Menu</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <NavigationDrawer
      :isActive="navigationDrawer"
      @closeNavigationDrawer="closeDrawer"
    />
    <div
      class="overlay"
      v-if="navigationDrawer"
      @click="navigationDrawer = false"
    ></div>
  </headroom>
</template>
<script>
import "./header.css";
import i18n from "@/locales/i18n";
import NavigationDrawer from "./NavigationDrawer";
import TokenService from "@/service/TokenService";
import { mapGetters, mapMutations } from "vuex";
import { headroom } from "vue-headroom";
export default {
  name: "AppHeader",
  components: { NavigationDrawer, headroom },
  data() {
    return {
      menu: [
        {
          id: 1,
          title: "Главная",
          link: "/",
        },
        {
          id: 2,
          title: "Модули",
          link: "/modules",
          children: [
            {
              id: 4,
              title: "Модуль 1",
              link: "/module-one",
            },
            {
              id: 5,
              title: "Модуль 2",
              link: "module-two",
            },
            {
              id: 6,
              title: "Модуль 3",
              link: "module-three",
            },
            {
              id: 7,
              title: "Модуль 4",
              link: "module-four",
            },
            {
              id: 8,
              title: "Модуль 5",
              link: "module-five",
            },
            {
              id: 9,
              title: "Модуль 6",
              link: "module-six",
            },
            {
              id: 10,
              title: "Модуль 7",
              link: "module-seven",
            },
            {
              id: 11,
              title: "Модуль 8",
              link: "module-eight",
            },
            {
              id: 12,
              title: "Модуль 9",
              link: "/module-nine",
            },
          ],
        },
        {
          id: 3,
          title: "Контакты",
          link: "/contact",
        },
      ],
      navigationDrawer: false,
      showDropdown: false,
      accountDropdown: false,
      languageDropdown: false,
      activeId: 0,
      subActiveId: null,
    };
  },

  computed: {
    ...mapGetters(["isLoggedOn", "user"]),
    userIsLoggedOn() {
      return this.isLoggedOn;
    },
  },
  methods: {
    ...mapMutations([
      "setAccessToken",
      "setIsLoggedOn",
      "setTestResults",
      "setLang",
    ]),
    activeLink(id) {
      this.activeId = id;
    },
    showNavigationDrawer() {
      this.navigationDrawer = !this.navigationDrawer;
    },
    closeDrawer() {
      this.navigationDrawer = false;
    },
    changeLanguage(lang) {
      localStorage.setItem("lang", lang);
      i18n.locale = lang;
      if (lang === "ru") {
        this.setLang(true);
      } else {
        this.setLang(false);
      }
    },
    hideAccountDropdown() {
      this.accountDropdown = false;
    },
    hideLanguageDropdown() {
      this.languageDropdown = false;
    },
    setToken() {
      this.setAccessToken(null);
      this.setIsLoggedOn(false);
    },
    logout() {
      TokenService.removeToken();
      TokenService.removeRefreshToken();
      this.setToken();
      this.$router.push({ name: "home" });
    },
    handleShowDropdownInner(id) {
      return {
        click: () => (this.subActiveId = this.subActiveId === id ? null : id),
        mouseenter: () => (this.subActiveId = id),
        mouseleave: () => (this.subActiveId = null),
      };
    },
  },
  mounted() {},
  created() {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "ru");
    }
    i18n.locale = localStorage.getItem("lang");
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #ffffff96;
  z-index: 49;
}
</style>
