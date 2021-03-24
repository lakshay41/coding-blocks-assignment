const api_key='127c957c9b26a082f79ddbf426b7cbda';
const inp=document.getElementById("inp");
let city=document.getElementById("city");
let date=document.getElementById("date");
let temp=document.getElementById("temp");
let maxmintemp=document.getElementById("maxmintemp");
let nature=document.getElementById("nature");
let d;
let com;
window.addEventListener('load',(e)=>{
	fetch('https://geo.ipify.org/api/v1?apiKey=at_Rtqo86jw2K6N3Y2E5vpggv6gr0std')
	.then((res)=>{
		return res.json();
	})
	.then((res)=>{
		let currentcity=res.location.city;
		gettemp(currentcity);
	})
})
inp.addEventListener('keypress', (e)=>{
  // console.log(e);
  if(e.keyCode===13) {
  	gettemp(inp.value);
  }
});
function gettemp(city_name) {
	// console.log("working");
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${api_key}`)
	.then((res)=>{
		// console.log(res);
		return res.json();
	})
	.then((res)=>{
		// console.log(res);
		inp.setAttribute("placeholder","Enter city name")
		city.innerText=`${res.name}, ${res.sys.country}`;
		fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=D746O161OT6N&format=json&by=position&lat=${res.coord.lat}&lng=${res.coord.lon}`)
		.then((res)=>{
			return res.json();
		})
		.then((res)=>{
			d=res.formatted;
			com=d.slice(11,13);
			com=parseInt(com);
			// console.log(com);
			date.innerText=d.slice(0,11);
		})
		.catch((e)=>{
			console.log("error");
		})
		// console.log(res.main.temp);
		temp.innerHTML=`${Math.round(res.main.temp)} <span>&#x2103;</span>`;
		// console.log(res.weather[0].main);
		nature.innerText=`${res.weather[0].main}`;
	    if(com>=13&&com<=24 || com>=0 && com<=6) {
	        if(res.weather[0].main==='Clouds') {
	    	document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1595788766882-78691b147b8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80')";
	    	}
	        if(res.weather[0].main==='Clear') {
	    	document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1607059991386-5b05bacfaf65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')";
	        }
	        if(res.weather[0].main==='Haze') {
	    	document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1533113354171-490d836238e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')";
	        }
	        if(res.weather[0].main==='Smoke') {
	    	document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1512349161995-252cf5e2307a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')";
	        }


	    }
	    if(com>=6&&com<=12) {
	        if(res.weather[0].main==='Clouds') {
	    	document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1596961069812-6d4c63a5538a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')";

	        }
	        if(res.weather[0].main==='Clear') {
	    	document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1111321767250-08dae27bb8e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80')";
	        }
	        if(res.weather[0].main==='Haze') {
	    	document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1605575301713-cb4e8d1980db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80')";
	        }
	        if(res.weather[0].main==='Smoke') {
	    	document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1596961069812-6d4c63a5538a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')";
	        }


	    }
	    if(com>=13&&com<=17) {
	        if(res.weather[0].main==='Clouds') {
	    	document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80')";
	        }
	        if(res.weather[0].main==='Clear') {
	    	document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1504386106331-3e4e71712b38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80')";
	        }
	        if(res.weather[0].main==='Haze') {
	    	document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80')";
	        }
	        if(res.weather[0].main==='Smoke') {
	    	document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1596961069812-6d4c63a5538a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')";
	        }


	    }
		// console.log(res.main.temp_min);
		maxmintemp.innerHTML=`${Math.floor(res.main.temp_min)}<span>&#x2103;</span>/${Math.ceil(res.main.temp_max)}<span>&#x2103;</span>`;
		inp.value="";


	})
	.catch((e)=>{
		console.log("Error");
		inp.setAttribute("placeholder","Please enter valid city");
		inp.value="";
	})
}
