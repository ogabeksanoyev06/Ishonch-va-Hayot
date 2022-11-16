<template>
  <transition name="slide">
    <div class="general-information">
      <p class="title">{{ $t("BasicInformation") }}</p>
      <div class="cabinet__content">
        <form class="grid-block" style="max-width: 660px">
          <div class="input__block">
            <label class="input__block-label" for="firstName">
              {{ $t("FirstName") }}
            </label>
            <input
              class="input__block-input"
              type="text"
              id="firstName"
              v-model="user.data.result.firstName"
            />
            <div></div>
          </div>
          <div class="input__block">
            <label class="input__block-label" for="lastName">
              {{ $t("LastName") }}</label
            >
            <input
              class="input__block-input"
              type="text"
              id="lastName"
              v-model="user.data.result.lastName"
            />
            <div></div>
          </div>
          <div class="input__block">
            <label class="input__block-label" for="login">
              {{ $t("Email") }}</label
            >
            <input
              class="input__block-input"
              type="email"
              id="login"
              v-model="user.data.result.login"
            />
            <div></div>
          </div>
        </form>
        <p class="title">{{ $t("ChangePassword") }}</p>
        <form class="grid-block" style="max-width: 660px">
          <div class="input__block">
            <label class="input__block-label" for="Password">
              {{ $t("OldPassword") }}
            </label>
            <div style="position: relative">
              <input
                class="input__block-input"
                type="password"
                id="Password"
                v-model="password"
                v-mask="'######'"
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
            <div></div>
          </div>
          <div class="input__block">
            <label class="input__block-label" for="newPassword">
              {{ $t("NewPassword") }}
            </label>
            <div style="position: relative">
              <input
                class="input__block-input"
                type="password"
                id="newPassword"
                v-model="newPassword"
              />
              <div class="showPasswordIcon">
                <img
                  src="/icons/eye.svg"
                  @click="showNewPasswordMethod"
                  v-if="showNewPassword"
                />
                <img
                  src="/icons/eye-closed2.svg"
                  @click="showNewPasswordMethod"
                  v-if="!showNewPassword"
                />
              </div>
            </div>
            <div></div>
          </div>
          <button type="button" class="updateBtn" @click="updateProfile">
            {{ $t("SaveChanges") }}
          </button>
        </form>
      </div>
    </div>
  </transition>
</template>
<script>
import TokenService from "@/service/TokenService";
import { mapGetters, mapMutations } from "vuex";
import axios from "axios";
export default {
  name: "my-account",
  components: {},
  data() {
    return {
      login: "930819140",
      firstName: "Og'abek",
      lastName: "Sanoyev",
      phoneNumber: "",
      email: "",
      password: "",
      newPassword: "",
      showPassword: false,
      showNewPassword: false,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapMutations(["setAccessToken", "setIsLoggedOn"]),
    logout() {
      TokenService.removeToken();
      TokenService.removeRefreshToken();
      this.setToken();
      this.$router.push({ name: "home" });
    },
    setToken() {
      this.setAccessToken(null);
      this.setIsLoggedOn(false);
    },
    showPasswordMethod() {
      this.showPassword = !this.showPassword;
      document.getElementById("Password").type = this.showPassword
        ? "text"
        : "password";
    },
    showNewPasswordMethod() {
      this.showNewPassword = !this.showNewPassword;
      document.getElementById("newPassword").type = this.showNewPassword
        ? "text"
        : "password";
    },
    updateProfile() {
      let form = new FormData();
      form.append("FirstName", this.user.data.result.firstName);
      form.append("LastName", this.user.data.result.lastName);
      form.append("MiddleName", this.user.data.result.middleName);
      form.append("Telefon", this.user.data.result.telefon);
      form.append("PhotoFile", this.user.data.result.photo);
      axios
        .put("main/User/ProfileUpdate", form, TokenService.headersToken())
        .then((res) => {
          if (!res.error && res.statusCode === 200) {
            this.user = res;
          }
        });
    },
  },
  mounted() {
    this.updateProfile();
  },
};
</script>
<style scoped>
.title {
  font-size: 14px;
  line-height: 26px;
  font-weight: 700;
  color: #95abc6;
  margin-bottom: 20px;
}
.grid-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 30px;
  margin-bottom: 20px;
}
.input__block {
  margin-bottom: 15px;
  max-width: 350px;
  width: 100%;
}
.input__block-label {
  display: block;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  margin-bottom: 10px;
}
.input__block-input {
  border: 1px solid #e5ecf5;
  border-radius: 10px;
  width: 100%;
  height: 46px;
  font-size: 18px;
  padding: 10px 15px;
  outline: none !important;
  font-size: 18px;
  font-weight: 500;
  line-height: 17px;
}
.updateBtn {
  font-size: 18px;
  font-weight: 600;
  padding: 0 20px;
  max-width: 250px;
  width: 100%;
  height: 50px;
  background: linear-gradient(278.92deg, #00d06c -7.77%, #a6ffdf 158.52%);
  border-radius: 10px;
  margin-top: 20px;
}
.showPasswordIcon img {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.pdf-preview {
  position: fixed;
  max-width: 600px !important;
  width: 100%;
  height: 80vh;
  top: 100px;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  box-shadow: 0 0 10px #00000048;
  background-color: #fff;
}
@media (max-width: 768px) {
  .grid-block {
    grid-template-columns: 1fr;
  }
  .input__block {
    max-width: 100%;
  }
}
</style>
