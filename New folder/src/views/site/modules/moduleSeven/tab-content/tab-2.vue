<template>
  <div class="tab_content container">
    <div class="module_title">{{ $t("Text7-1-28") }} 1.</div>
    <div class="tab_content-text">
      {{ $t("Text7-1-29") }}
    </div>
    <div class="tab_content-text bgTab" style="max-width: 900px; width: 100%">
      {{ $t("Text7-1-30") }}
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
          {{ $t("Text7-1-31") }} <br />
          · {{ $t("Text7-1-32") }}
          <br />
          · {{ $t("Text7-1-33") }} <br />
          · {{ $t("Text7-1-34") }}
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
    <div class="module_title">{{ $t("Text7-1-28") }} 2.</div>
    <div class="tab_content-text">
      {{ $t("Text7-1-35") }}
    </div>
    <div class="tab_content-text bgTab" style="max-width: 900px; width: 100%">
      {{ $t("Text7-1-30") }}
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
          {{ $t("Text7-1-36") }}
        </label>
      </div>
      <div class="formCheck">
        <input class="formCheck-input" type="checkbox" value="" id="8" />
        <label class="formCheck-label" for="8">
          {{ $t("Text7-1-37") }}
        </label>
      </div>
      <div class="formCheck">
        <input class="formCheck-input" type="checkbox" value="" id="9" />
        <label class="formCheck-label" for="9">
          {{ $t("Text7-1-38") }}
        </label>
      </div>
      <div class="formCheck">
        <input class="formCheck-input" type="checkbox" value="" id="10" />
        <label class="formCheck-label" for="10"> {{ $t("Text7-1-39") }} </label>
      </div>
      <div class="formCheck">
        <input class="formCheck-input" type="checkbox" value="" id="11" />
        <label class="formCheck-label" for="11">
          {{ $t("Text7-1-40") }}
        </label>
      </div>
      <div class="formCheck">
        <input class="formCheck-input" type="checkbox" value="" id="12" />
        <label class="formCheck-label" for="12"> {{ $t("Text7-1-41") }} </label>
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
              {{
                $t(
                  "Давайте рассмотрим 2 случая, в которых есть нарушения прав человека. Вам необходимо проанализировать ситуации и ответить на вопросы"
                )
              }}
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
    <router-link :to="{ name: 'module-eight' }">
      <button data-v-4cc884a4="" class="prevDetailed">
        {{ $t("Module") }} 8
      </button>
    </router-link>
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
