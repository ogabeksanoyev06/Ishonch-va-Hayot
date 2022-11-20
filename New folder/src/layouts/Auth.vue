<template>
  <kinesis-container>
    <div class="auth">
      <div class="auth__column auth__content">
        <div class="auth__wrap">
          <div class="auth__header w-100">
            <div style="margin-bottom: 30px">
              <router-link to="/" class="logo-auth d-flex">
                <img src="/svg/logo1.svg" class="" alt="" />
                <div>
                  Ишонч <br />
                  ва <br />
                  Ҳаёт
                </div>
              </router-link>
            </div>
          </div>
          <RouterView />
          <!-- <div class="auth__footer">
            <p>Муаллифлик ҳуқуқи © 2022 Cовид платформаси</p>
          </div> -->
        </div>
      </div>
      <!-- right -->
      <div class="auth__column auth__photo greyBg">
        <img src="/images/login/login.png" class="auth__banner" alt="" />

        <div class="auth__professor">
          <kinesis-element class="layer" :strength="8">
            <img src="/images/login/login-professor.png" alt="" />
          </kinesis-element>
        </div>

        <div class="auth__science">
          <kinesis-element class="layer" :strength="10">
            <img src="/images/login/login-science.png" alt="" />
          </kinesis-element>
        </div>

        <div class="auth__test">
          <kinesis-element class="layer" :strength="12">
            <img src="/images/login/login-test.png" alt="" />
          </kinesis-element>
        </div>

        <div class="auth__round">
          <kinesis-element class="layer" :strength="15">
            <img src="/icons/round.svg" alt="" />
          </kinesis-element>
        </div>
      </div>
    </div>
    <!-- <notifications group="admin" position="top right" :width="250" /> -->
  </kinesis-container>
</template>
<script>
// import { mapMutations } from "vuex";
import { KinesisContainer, KinesisElement } from "vue-kinesis";

import "../assets/styles/pages/auth.css";

export default {
  name: "AuthApp",
  components: {
    "kinesis-container": KinesisContainer,
    "kinesis-element": KinesisElement,
  },

  methods: {},
  mounted() {},
  beforeDestroy() {},
};
</script>

<style>
.vue-notification {
  padding: 10px;
  margin: 5px 5px 5px;
  font-size: 16px;
  color: #ffffff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;
}
</style>
