<template>
  <div class="tab_content">
    <div class="ImportantInformation">
      <div class="module_title">Основные принципы медицинской этики.</div>
      <div class="bgTab">ОСНОВНАЯ ИНФОРМАЦИЯ</div>
      <div class="tab_content-text tab_content-text">
        Впервые термин «этика» употребил Аристотель, как учение о
        нравственности, озна-чает систему непротиворечивых суждений о смысле и
        назначении морали, а также нормы, правила, обычаи, регулирующие
        поведение и взаимоотношения людей в обществе.
      </div>
      <div class="tab_content-text">
        Медицинская этика или медицинская деонтология – совокупность этических
        норм и принципов поведения медицинских работников при выполнении ими
        своих профессиональных обязанностей. Медицинская этика не только изучает
        нравственность человека, но и воздействует на его идеологическое
        формирование.
      </div>
      <div class="tab_content-block" style="margin-top: 30px">
        <div class="tab_content-text">
          <strong class="strongColor">Медицинская деонтология </strong> -
          совокупность этических норм и принципов поведения медицинских
          работников при выполнении своих профессиональных обязанностей. Она
          входит в раздел медицинской этики, поскольку последняя охватывает
          более широкий круг вопросов. Деонтология изучает принципы поведения
          медицинского персонала, направленные на максимальное повышение
          эффективности лечения, устранение неблагоприятных факторов в
          медицинской деятельности и вредных последствий неполноценной
          медицинской работы.
          <br />
          В связи с достижениями биологии, генетики и медицинской техники во
          второй половине ХХ столетия возникло новое понятие - биоэтика, под
          которым подразумевается анализ действий человека в биологии и медицине
          в свете нравственных ценностей.
        </div>
      </div>
      <div class="info_scientist">
        <div class="d-flex align-items-center">
          <p class="info_scientist-name">Аристотель – автор термина «этика»</p>
          <div class="info_scientist-img">
            <img class="w-100" src="/images/tabImg/image 179.png" alt="" />
          </div>
        </div>
        <div class="tabImg">
          <img src="/images/tabImg/126.jpg" alt="" />
        </div>
      </div>
      <div class="tab_content-text">
        <strong class="strongColor"> Ибн-Сина (Авиценна)</strong> - создатель
        «Канона врачебной науки» - рассматривая различ-ные стороны врачебной
        деятельности, подчеркивал неповторимость и индивидуальность
        обращающегося за помощью. Ему принадлежит изречение «Врач должен». Ибн
        Сина требовал особого подхода к больному: «Ты должен знать, что каждый
        отдельный человек обладает особой натурой, присущей ему лично. Редко
        бывает или совсем невозможно, чтобы кто-нибудь имел одинаковую с ним
        натуру». Большое значение имеет слово, что подразумевает не только
        культуру речи, но и чувство такта, умение поднять больному настроение,
        не ранить его неосторожным высказыванием.
      </div>
      <div class="tab_content-text">
        <strong class="strongColor"> Модель Гиппократа </strong>(«не навреди»)
        Принципы врачевания, заложенные «отцом медицины» Гиппократом (460-377гг.
        до н.э.), лежат у истоков врачебной этики как таковой. В своей
        знаменитой «Клятве», Гиппократ сформулировал обязанности врача перед
        пациентом. Прошли многие века, но «Клятва» не потеряла своей
        актуальности, более того, она стала эталоном построения многих этических
        документов.
      </div>
      <div class="info_scientist">
        <div class="info_scientist-item">
          <div class="info_scientist-img">
            <img class="w-100" src="/images/tabImg/127.jpg" alt="" />
          </div>
          <div class="mt-3">
            <p class="info_scientist-name">«Врач должен»</p>
            <p class="info_scientist-text">
              Ибн-Сина (Авиценна) - создатель «Канона врачебной науки»
            </p>
          </div>
        </div>
        <div class="info_scientist-item">
          <div class="info_scientist-img">
            <img class="w-100" src="/images/tabImg/128.jpg" alt="" />
          </div>
          <div class="mt-3">
            <p class="info_scientist-name">«Не навреди»</p>
            <p class="info_scientist-text">
              Гиппократ, «отец медицины», сформулировал принципы врачебной этики
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-1",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.tab_content-text {
  margin-bottom: 10px;
}
.info_scientist {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info_scientist-name {
  max-width: 154px;
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  font-weight: 700;
  color: #1f2136;
  margin: 0 auto;
}
.info_scientist-text {
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  color: #1f2136;
  max-width: 300px;
  width: 100%;
}
.info_scientist-img {
  max-width: 220px;
  width: 100%;
}
.info_scientist-img img {
  width: 100%;
  object-fit: contain;
}
.tabImg {
  max-width: 500px;
  width: 100%;
}
.tabImg img {
  width: 100%;
  object-fit: contain;
}
.tab_content-text {
  margin-top: 10px;
}
.info_scientist-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 15px;
  border-radius: 10px;
}
@media (max-width: 768px) {
  .info_scientist {
    flex-wrap: wrap;
    justify-content: center;
  }
  .tabImg {
    margin-top: 20px;
  }
}
</style>
