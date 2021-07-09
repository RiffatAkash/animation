// const day_1 = new Date("July 09,2021").getTime();
// const day_2 = new Date("July 10,2021").getTime();
// const day_3 = new Date("July 11,2021").getTime();
// var date1 = '09/07/2021';
// var date2 = '10/07/2021';
// const now = new Date();
// const gap = new Date(date1)-now;
// const gap2 = new Date(date2)-now;
// const gap3 = day_3-now;
// console.log(gap);
// console.log(gap2);
// console.log(gap3);
const countdown = () => {
    date1 = new Date();
    date2 = new Date("July 09,2021");
    date3 = new Date("July 10,2021");
    date4 = new Date("July 11,2021");
    if(date1.setHours(0,0,0,0)==date2.setHours(0,0,0,0))
    {
      document.querySelector(
        ".day"
      ).innerHTML = `<img src="assets/3day.png" alt="">`;
    }else if(date1.setHours(0,0,0,0)==date3.setHours(0,0,0,0)){
      document.querySelector(
        ".day"
      ).innerHTML = `<img src="assets/2day.png" alt="">`;
    }else {
      document.querySelector(
        ".day"
      ).innerHTML = `<img src="assets/1day.png" alt="">`;
    }
  };

  setInterval(countdown,1000);

