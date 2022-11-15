<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="hr_line"></div>
        <div class="text">Ishonch va Hayot © 2021</div>
        <div class="text">Политика конфиденциальности</div>
      </div>
    </div>
  </footer>
</template>

<script>
import "./footer.css";
export default {
  name: "AppFooter",
};
</script>
<style scoped>
.footer {
  background-color: #1f2136;
  padding: 40px 20px;
  color: #fff;
}
.hr_line {
  max-width: 1140px;
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0 auto;
  margin-bottom: 20px;
}
.footer__inner .text {
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  opacity: 0.8;
}
.footer__inner .text:nth-child(2) {
  margin-bottom: 10px;
}
</style>
