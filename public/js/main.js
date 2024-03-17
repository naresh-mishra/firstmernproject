const submitbtn=document.getElementById("submitbtn");
const cityname=document.getElementById("cityname");
const city_name=document.getElementById("city_name");
const temp_real_val=document.getElementById("temp_real_val");
const temp_status=document.getElementById("temp_status");
const datahide=document.querySelector(".middle_layer");
const city_name1=document.querySelector("#city_name1");
const today_data=document.querySelector("#today_data");
const getcurrentday=()=>{
    let weekday=new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";
    let currentTime=new Date();
    let day =weekday[currentTime.getDay()];
    return day;
}
city_name1.innerText=getcurrentday();

const getcurrentmonth=()=>{
    let month=new Array(12);
    month[0]="Jan";
    month[1]="feb";
    month[2]="March";
    month[3]="April";
    month[4]="May";
    month[5]="June";
    month[6]="July";
    month[7]="August";
    month[8]="Sep";
    month[9]="Oct";
    month[10]="Nov";
    month[11]="Dec";
    let currentTime=new Date();
    let month1=month[currentTime.getMonth()];
    return month1;
}
    let currentTime=new Date();
    let date=currentTime.getDate();

today_data.innerText=`${date},${getcurrentmonth()}`;

const getInfo=async(event)=>{
    event.preventDefault();
    let cityval=cityname.value;
     if(cityval==""){
        city_name.innerText="Please write the name before you search";
        datahide.classList.add('data_hide');
     }
     else{
        try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=071eff6ddd6efc2fccbf9b7e354d107a`;
        const response= await fetch(url);
        const data= await response.json();
        const arrdata=[data];
        city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
        temp_real_val.innerText=arrdata[0].main.temp;
        // temp_status.innerText=arrdata[0].weather[0].main;
        const tempmood=arrdata[0].weather[0].main;
        if(tempmood=="Clear"){
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"
        }else if(tempmood=="Clouds"){
            temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
        }
        else if(tempmood=="Rain"){
             temp_status.innerHTML="<i class='fas fa-rain' style='color:#a4b0be;'></i>"
        }
        else {
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>"
       }
          datahide.classList.remove('data_hide');
       
       }catch{
        city_name.innerText="Please enter the city name properly";
        datahide.classList.add('data_hide');
       }
         
     }
    }
     submitbtn.addEventListener('click',getInfo);
