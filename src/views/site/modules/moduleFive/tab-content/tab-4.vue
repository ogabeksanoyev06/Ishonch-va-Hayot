<template>
  <div class="tab_content">
    <div class="module_title">
      Безопасное грудное вскармливание в период COVID-19
    </div>
    <div class="tab_content-text">
      На сегодняшний день фактов передачи COVID-19 через грудное молоко не
      зарегистрировано, поэтому передача COVID-19 от матери к ребенку во время
      грудного вскармливания маловероятна. Исследователи продолжают изучать
      грудное молоко матерей с подтвержденными и предположительными случаями
      заболевания COVID-19. Грудное кормление и телесный контакт, а также раннее
      исключительно грудное вскармливание помогают ребенку полноценно
      развиваться, что положительно сказывается на нем в течение всей жизни. В
      грудном молоке содержатся антитела, которые укрепляют иммунитет детей и
      защищают их от многих инфекций. Грудное вскармливание значительно снижает
      риск смерти среди новорожденных и младенцев раннего возраста, обеспечивает
      пожизненную пользу для здоровья детей и укрепляет здоровье матерей.
    </div>
    <div class="tabImg" style="max-width: 800px">
      <img class="w-100" src="/images/tabImg/162.png" alt="wewe" />
    </div>
    <div class="tab_content-text" style="margin-bottom: 20px">
      Необходимо поддерживать телесный контакт со своим новорожденным ребенком.
      Класть ребенка нужно рядом с собой, что позволит начать грудное
      вскармливание как можно раньше. Время играет очень важную роль, поэтому
      рекомендуется начать грудное вскармливание в первые часы жизни ребенка.
    </div>
    <div class="tab_content-text">
      <strong class="strongColor">Меры предосторожности</strong> включают в себя
      ношение маски, мытье рук с мылом и водой или обработка рук до и после
      контакта с ребенком. Сюда также входят регулярная очистка и дезинфекция
      поверхностей. Необходимо помыть грудь, если мать только что покашляла. В
      других случаях мыть грудь перед каждым кормлением не нужно.
    </div>
    <div class="tabImg" style="max-width: 800px">
      <img class="w-100" src="/images/tabImg/163.png" alt="wewe" />
    </div>
    <div class="tab_content-text">
      Независимо от того, заразился ли ребенок COVID-19 или заболел другой
      болезнью, важно продолжать кормить его грудным молоком. Грудное
      вскармливание повышает иммунную систему ребенка, и антитела передадутся
      ему через грудное молоко, помогая бороться с инфекциями. Если мать
      чувствует слабость и не может кормить грудью, можно попробовать другие
      способы безопасного кормления ребенка грудным молоком. Можно сцедить
      молоко и дать его ребенку с помощью чистой чашки или ложки. Сцеживание
      также важно для обеспечения выработки грудного молока. Это позволит
      продолжить грудное вскармливание, когда мать почувствует себя лучше.
      Определенного срока времени для выжидания после подтвержденного или
      подозреваемого случая заражения COVID-19 нет.
    </div>
    <div class="tabImg" style="max-width: 800px">
      <img class="w-100" src="/images/tabImg/164.png" alt="wewe" />
    </div>
    <div class="tabImg" style="max-width: 800px">
      <img class="w-100" src="/images/tabImg/165.png" alt="wewe" />
    </div>
    <div class="tab_content-text">
      Рекомендуется продолжать грудное вскармливание после вакцинации, чтобы
      защитить своего ребенка. Ни одна из используемых в настоящее время вакцин
      COVID-19, одобренных ВОЗ, не содержит живого вируса, поэтому риск передачи
      вируса своему ребенку через грудное молоко отсутствует.
    </div>
    <div class="tab_content-text bgTab" style="max-width: 800px; width: 100%">
      Для закрепления пройденного материала посмотрите видеоролик по грудному
      вскармливанию
    </div>
    <div class="video-player-wrap">
      <div class="video-player">
        <iframe
          style="width: 100%; height: 400px; object-fit: contain"
          src="https://www.youtube.com/embed/_tMIZn4qmKw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-4",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.content_flex-img {
  max-width: 250px;
  width: 100%;
}
.tabImg {
  width: 100%;
  margin: 30px auto;
}
.tab_content-text {
  margin-bottom: 10px;
}
.tabImg img {
  width: 100%;
  object-fit: contain;
}
.content_flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content_flex-info {
  max-width: 500px;
  width: 100%;
}
.tab_content-text {
  margin-bottom: 10px;
}
.video-player-wrap {
  margin: 20px 0;
}
.video-player {
  width: 100%;
}
@media (max-width: 768px) {
  .content_flex {
    flex-wrap: wrap;
  }
  .content_flex-img {
    order: 1;
  }
  .content_flex-info {
    order: 2;
  }
}
</style>
