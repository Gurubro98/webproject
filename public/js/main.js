const submitbtn = document.getElementById('submitbtn');
const cityName = document.getElementById('cityName');
const  city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_value');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');


const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    console.log(cityVal);
    if(cityVal === ""){
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');
    } else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=4171ab562bd401b563bf124ec42236a2`;
            const response = await fetch(url);
            const data = await response.json();
            arrData = [data];
            let temp = arrData[0].main.temp - 273.15;
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_real_val.innerText = temp.toFixed(2);

            const tempMood = arrData[0].weather[0].main;

            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'>";
            }
            else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
            }
            else if(tempMood == "Rainy"){
                temp_status.innerHTML = "<i class='fas fa-cloud-showers' style='color:#a4b0be'></i>";
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
            }
   
            
            datahide.classList.remove('data_hide');
        } catch(error) {
            city_name.innerText = `Plz enter the name correctly`;
            datahide.classList.add('data_hide');
        }
    }
}

submitbtn.addEventListener('click', getInfo);