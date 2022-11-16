<template>
  <div class="tab_content">
    <div class="module_title">Случай 1.</div>
    <div class="tab_content-text">
      18-летняя студентка получила стипендию для учебы в зарубежном университете
      на юридическом факультете. Со стороны девушки этому событию предшествовала
      серьезная подготовка, она была очень рада предоставленной ей возможности.
      Семья и друзья гордились ею. За две недели до отъезда организатор
      стипендиальной программы сообщил девушке, что для приема в университет ей
      необходимо пройти осмотр в специальном медицинском центре и сдать анализы
      крови. О типе проводимых тестов ей ничего не сообщили. Через два дня после
      сдачи анализов девушка получает письмо об аннулировании стипендии:
      консульство страны, в которой находится университет, отказало ей в визе на
      основании положительного результата теста на ВИЧ-инфекцию. К тому же, как
      выяснилось, университет, в котором девушка предполагала пройти курс
      обучения, не принимает ВИЧ-инфицированных студентов.
    </div>
    <div class="tab_content-text bgTab" style="max-width: 900px; width: 100%">
      Выберите наиболее подходящий вариант ответа. В этом задании может быть
      несколько правильных ответов
    </div>
    <div style="margin: 20px 0">
      <div class="formCheck">
        <input
          class="formCheck-input"
          checked
          type="checkbox"
          value=""
          id="1"
        />
        <label class="formCheck-label" for="1">
          Право на тайну личной жизни <br />
          · тестирование проводилось с нарушением принципа добровольности;
          <br />
          · при тестировании был нарушен принцип конфиденциальности: <br />
          · информация о результатах теста была передана третьим лицам
          (сотрудникам консульства и администрации университета);
        </label>
      </div>
      <div class="formCheck">
        <input class="formCheck-input" type="checkbox" value="" id="2" />
        <label class="formCheck-label" for="2">
          Право на образование <br />
          · ВИЧ-статус не может служить основанием для отказа в обучении;
        </label>
      </div>
      <div class="formCheck">
        <input class="formCheck-input" type="checkbox" value="" id="3" />
        <label class="formCheck-label" for="3">
          фундаментальное право на недискриминацию по ВИЧ-статусу (со стороны
          данной страны и университета)
        </label>
      </div>
      <div class="formCheck">
        <input class="formCheck-input" type="checkbox" value="" id="4" />
        <label class="formCheck-label" for="4"> Право на жизнь </label>
      </div>
      <div class="formCheck">
        <input class="formCheck-input" type="checkbox" value="" id="5" />
        <label class="formCheck-label" for="5">
          Право на свободу передвижения.
        </label>
      </div>
      <div class="formCheck">
        <input class="formCheck-input" type="checkbox" value="" id="6" />
        <label class="formCheck-label" for="6"> Право на безопасность </label>
      </div>
    </div>
    <div class="module_title">Случай 2.</div>
    <div class="tab_content-text">
      Молодой человек, 21 год, закончил учебу и сделал предложение своей давней
      подруге. Он — ВИЧ-положительный, но она об этом знала и приняла его
      предложение. Согласно обычаю народа, к которому они оба принадлежали,
      чтобы свадьба состоялась, нужно было получить согласие родителей. Когда
      пара обратилась к родителям, дядя невесты, врач по специальности, сообщил
      семье невесты, что молодой человек однажды сдавал донорскую кровь, и она
      оказалась ВИЧ-инфицированной. На этом основании он отказался дать согласие
      на свадьбу своей племянницы. Молодые люди пережили глубокое отчаяние:
      во-первых, из-за того, что все родственники и знакомые узнали о
      ВИЧ-статусе юноши, во-вторых, из-за отказа в бракосочетании.
    </div>
    <div class="tab_content-text bgTab" style="max-width: 900px; width: 100%">
      Выберите наиболее подходящий вариант ответа. В этом задании может быть
      несколько правильных ответов
    </div>
    <div style="margin: 20px 0">
      <div class="formCheck">
        <input
          class="formCheck-input"
          checked
          type="checkbox"
          value=""
          id="7"
        />
        <label class="formCheck-label" for="7">
          Принцип конфиденциальности
        </label>
      </div>
      <div class="formCheck">
        <input class="formCheck-input" type="checkbox" value="" id="8" />
        <label class="formCheck-label" for="8">
          Раскрытие врачебной тайны; разглашение ВИЧ-статуса третьим лицам
        </label>
      </div>
      <div class="formCheck">
        <input class="formCheck-input" type="checkbox" value="" id="9" />
        <label class="formCheck-label" for="9">
          Право на неприкосновенность частной и семейной жизни
        </label>
      </div>
      <div class="formCheck">
        <input class="formCheck-input" type="checkbox" value="" id="10" />
        <label class="formCheck-label" for="10"> Право на жизнь </label>
      </div>
      <div class="formCheck">
        <input class="formCheck-input" type="checkbox" value="" id="11" />
        <label class="formCheck-label" for="11">
          Право на свободу передвижения
        </label>
      </div>
      <div class="formCheck">
        <input class="formCheck-input" type="checkbox" value="" id="12" />
        <label class="formCheck-label" for="12"> Право на безопасность </label>
      </div>
    </div>
    <div class="test__details-item" @click="testFinish">
      <div class="d-flex">
        <div class="test__details-icon" style="margin-right: 5px">
          <img src="/icons/finish.svg" alt="" />
        </div>
        <p>Закончить</p>
      </div>
    </div>
    <app-modal v-if="closeDancing" @close="closeModalDancing">
      <div class="modal__wrap">
        <div>
          <div class="dancing__body">
            <p class="dancing__text">
              Давайте рассмотрим 2 случая, в которых есть нарушения прав
              человека. Вам необходимо проанализировать ситуации и ответить на
              вопросы
            </p>
            <div class="dancing__img">
              <img src="/images/moduleBanner1.png" alt="" />
            </div>
          </div>
          <button class="dancing__btn" @click="closeModalDancing">Ok</button>
        </div>
      </div>
    </app-modal>
    <AppModal v-if="finishModal" @close="closeModal">
      <div class="modal__wrap">
        <div class="modal__body">
          <div class="dancing__body">
            <p class="dancing__text">
              Поздравляем с успешным прохождением модуля №7
            </p>
            <div class="dancing__img">
              <img src="/images/moduleBanner1.png" alt="" />
            </div>
          </div>
          <button class="dancing__btn" @click="closeModal">Ok</button>
        </div>
      </div>
    </AppModal>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
import AppModal from "@/components/shared-components/AppModal.vue";
export default {
  name: "tab-2",
  components: { AppModal },
  data() {
    return {
      closeDancing: true,
      finishModal: false,
    };
  },
  methods: {
    closeModalDancing() {
      this.closeDancing = false;
    },
    closeModal() {
      this.finishModal = false;
    },
    testFinish() {
      this.finishModal = true;
    },
  },
};
</script>
<style scoped>
.dancing__body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
}
.dancing__text {
  max-width: 503px;
  width: 100%;
  font-weight: 600;
  font-size: 30px;
  line-height: 130%;
  text-align: center;
  color: #00419e;
}
.dancing__img {
  max-width: 160px;
  width: 100%;
}
.dancing__img img {
  width: 100%;
  object-fit: contain;
}
.dancing__btn {
  min-width: 65px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00419e;
  margin: 0 auto;
}
.formCheck {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.formCheck-input {
  margin-right: 10px;
  cursor: pointer;
  width: 12px;
  height: 12px;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid #7cb500;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-radius: 50%;
}
.formCheck-input:checked {
  background-color: #7cb500;
}
.formCheck-input:checked + .formCheck-label {
  color: #7cb500;
}
.formCheck-label {
  flex: 1;
  font-weight: 500;
  font-size: 20px;
  line-height: 148%;
  text-align: justify;
  color: #0f101d;
  cursor: pointer;
}
.test__details-item {
  margin-left: 10px;
  background: #ffffff;
  display: flex;
  justify-content: end;
  padding: 14px 17px;
  cursor: pointer;
}
.tab_content-text {
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .dancing__body {
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
  }
  .dancing__text {
    order: 2;
    font-size: 18px;
    margin-top: 10px;
  }
}
</style>
