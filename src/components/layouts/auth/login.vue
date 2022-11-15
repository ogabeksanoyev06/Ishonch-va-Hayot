<template>
  <div class="auth__body auth__form">
    <app-loading
      :active="loading"
      :can-cancel="true"
      :color="'#008AE4'"
      :height="70"
      :is-full-page="true"
      :loader="'dots'"
      :opacity="0.8"
      :transition="''"
      :width="70"
    ></app-loading>
    <p class="auth__body-title">
      {{ $t("LogIn") }} <span>{{ errorMes }}</span>
    </p>
    <br />
    <form class="auth__login-form" @submit.prevent="loginToSystem">
      <div class="auth__login-form-group">
        <label for="login" class="auth__login-form-label">
          {{ $t("Telephone") }}
        </label>
        <div class="group_pre">
          <div class="auth-input-group__prepend">998</div>
          <input
            type="text"
            id="login"
            class="auth__login-form-input"
            :class="{ 'is-invalid': $v.request.login.$error }"
            placeholder="(71)123-45-67"
            v-model="request.login"
            v-mask="'#########'"
          />
        </div>
        <div v-if="$v.request.login.$error" class="invalid-feedback">
          <span v-if="!$v.request.login.required"> Phone is required </span>
          <span v-if="!$v.request.login.minLength">
            The number of characters should be at least 9!
          </span>
        </div>
      </div>
      <div class="auth__login-form-group">
        <label for="password" class="auth__login-form-label">
          {{ $t("Parol") }}
        </label>
        <div style="position: relative">
          <input
            type="text"
            id="password"
            class="auth__password-form-input"
            :class="{ 'is-invalid': $v.request.password.$error }"
            v-model="request.password"
          />
          <div class="showPasswordIcon">
            <img
              src="/icons/eye.svg"
              @click="showPasswordMethod"
              v-if="showPassword"
            />
            <img
              src="/icons/eye-closed2.svg"
              @click="showPasswordMethod"
              v-if="!showPassword"
            />
          </div>
        </div>
        <div v-if="$v.request.password.$error" class="invalid-feedback">
          <span v-if="!$v.request.password.required"> </span>
          <span v-if="!$v.request.password.minLength"> </span>
        </div>
      </div>
      <div class="bw__cn">
        <div></div>
        <!-- <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="check" />
          <label class="form-check-label" for="check"> Eslab qolish </label>
        </div> -->
        <router-link to="/" style="color: rgb(0, 138, 228) !important">
          {{ $t("ForgotPass") }}
        </router-link>
      </div>
      <button type="submit" class="login_btn">{{ $t("Enter") }}</button>
      <div class="d-flex flex-wrap text">
        <p>{{ $t("NotRegistered") }}?</p>
        <router-link
          :to="{ name: 'register' }"
          style="color: rgb(0, 138, 228) !important; margin-left: 5px"
        >
          {{ $t("Registration") }}
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import TokenService from "@/service/TokenService";
import Auth from "@/service/auth.service";
import { mapActions, mapMutations, mapState } from "vuex";
import "@/assets/styles/pages/login.css";
// import axios from "axios";
export default {
  name: "loginApp",
  components: {},
  data() {
    return {
      request: {
        login: "",
        password: "",
        client_id: 1,
      },
      errorMes: "",
      authError: "",
      showPassword: false,
      loading: false,
    };
  },
  validations: {
    request: {
      login: { required, minLength: minLength(9) },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  computed: {
    ...mapState(["user", "isLoggedOn"]),
  },
  methods: {
    ...mapMutations(["setIsLoggedOn", "setAccessToken"]),
    ...mapActions([""]),
    showPasswordMethod() {
      this.showPassword = !this.showPassword;
      document.getElementById("password").type = this.showPassword
        ? "text"
        : "password";
    },
    async loginToSystem() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }
      this.loading = true;
      try {
        let data = {
          login: this.request.login,
          password: this.request.password,
          device_id: "1",
        };
        let res = await Auth.login(data);
        if (res.data.error) {
          console.log(res.data.error);
        } else {
          TokenService.saveToken(res.data.result.access_token);
          TokenService.saveRefreshToken(res.data.result.refresh_token);
          this.$router.push({ name: "home" });
          this.$store.dispatch("getUser", TokenService.headersToken());
        }
      } catch (error) {
        console.log(error);
        this.$toast.error("Xatolik sodir bo'ldi");
      } finally {
        this.loading = false;
      }
      // await axios
      //   .post("auth/Login/GetToken", {
      //     login: this.request.login,
      //     password: this.request.password,
      //     device_id: "1",
      //   })
      //   .then((res) => {
      //     if (res.data.error) {
      //       console.log(res.data.error);
      //     } else {
      //       TokenService.saveToken(res.data.result.access_token);
      //       TokenService.saveRefreshToken(res.data.result.refresh_token);
      //       this.$router.push({ name: "home" });
      //       this.$store.dispatch("getUser", TokenService.headersToken());
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     this.$toast.error("Xatolik sodir bo'ldi");
      //   })
      //   .finally(() => {
      //     this.loading = false;
      //   });
    },
    setToken() {
      let accessToken = TokenService.getToken();
      if (accessToken !== null) {
        this.setAccessToken(accessToken);
        this.setIsLoggedOn(true);
      } else {
        this.setAccessToken(null);
        this.setIsLoggedOn(false);
      }
    },
  },
  async mounted() {
    if (TokenService.getToken()) {
      this.$store.dispatch("getUser", TokenService.headersToken());
    }
  },
  watch: {},
};
</script>
<style scoped>
.invalid-feedback {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 5;
  max-width: 100%;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-top: 0;
}
input.is-invalid {
  border-color: #eb5757;
}
input.is-invalid:focus {
  border-color: #eb5757;
}
.invalid-feedback-two {
  color: #eb5757;
}
</style>
