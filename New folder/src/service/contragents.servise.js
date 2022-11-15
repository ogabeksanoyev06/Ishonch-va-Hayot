import ApiService from "./apiService";
export default {
  getListLawyers(data) {
    return ApiService.post(
      `getInfo/lawyerList?search=${data.querys.search}&status=${data.querys.status}&contragentId=${data.querys.contragentId}&regionId=${data.querys.regionId}`,
      data.data
    );
  },
  getListContragents(data) {
    return ApiService.post(
      `contragent/list?search=${data.search}&typeId=&isArchive=false&regionId=`,
      {
        page: data.page,
        limit: data.limit,
      }
    );
  },
  countInfo() {
    return ApiService.post(`contragent/count-info`);
  },
  regions() {
    return ApiService.post(`directoryRegion/list`);
  },
  //   bulani endi vuexm, juda keladigan zapros muhim bomasa component ichidayam import qib ishlaturasiz masalan qanday akaa shatta ozgina tushungandayman akaa rahmatttt bopti unda yaxshi dam oling aka rahmat kattaa, ok o'zizam
};
