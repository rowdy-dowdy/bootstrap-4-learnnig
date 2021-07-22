// CLICK OUTSIDE

function resetAllElementActive(that = 0) {
	if (headerDropdown.classList.contains('active') && that !== headerDropdown)
		headerDropdown.classList.remove('active')

	if (headerSerach.classList.contains('active') && that !== headerSerach)
		headerSerach.classList.remove('active')

  if (sidebar.classList.contains('show') && that !== sidebar 
    && widthPage < responsive['lg'])
    sidebar.classList.remove('show')
}

document.addEventListener('click', function(e) {
	e.preventDefault()
	e.stopPropagation()

	resetAllElementActive()
})

// HEADER DROPDOWN TOGGLE
let headerDropdown = document.querySelector('.header-user')

headerDropdown.addEventListener('click', function(e) {
	e.preventDefault()
	e.stopPropagation()

	resetAllElementActive(this)

	this.classList.toggle('active')
})

headerDropdown.nextElementSibling.addEventListener('click', function(e) {
	e.preventDefault()
	e.stopPropagation()
})

// HEADER SEARCH
let headerSerach = document.querySelector('.header__search')
let buttonSerach = document.querySelector('.header__search .bx-search')

buttonSerach.addEventListener('click', function(e) {
	e.preventDefault()
	e.stopPropagation()

	resetAllElementActive(this)
	headerSerach.classList.toggle('active')
})

headerSerach.lastElementChild.addEventListener('click', function(e) {
	e.preventDefault()
	e.stopPropagation()
})


// toogle sidebar
var buttonToggleSidebar = document.querySelector('.toogle-sidebar')
var sidebar = document.querySelector('.sidebar')

buttonToggleSidebar.addEventListener('click',function(e) {
  e.preventDefault()
  e.stopPropagation()

  resetAllElementActive(sidebar)
  sidebar.classList.toggle('show')
})

sidebar.addEventListener('click', function(e) {
  e.preventDefault()
  e.stopPropagation()
})




//
// CHART JS
//


var lineChar = new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    datasets: [
    	{ 
        data: [482,450,411,502,535,509,447,402,370,567],
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: {above: "#8e5ea21a" , value: 0}
      }, { 
        data: [168,170,178,190,203,276,408,547,675,734],
        label: "Europe",
        borderColor: "#3cba9f",
        fill: {above: "#3cba9f1a" , value: 0}
      }, { 
        data: [40,20,10,16,24,38,74,167,508,784],
        label: "Latin America",
        borderColor: "#e8c3b9",
        fill: {above: "#e8c3b91a" , value: 0}
      }, { 
        data: [6,3,2,2,7,26,82,172,312,433],
        label: "North America",
        borderColor: "#c45850",
        fill: {above: "#c458501a" , value: 0}
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart'
      },
      filler: {
        propagate: false
      },
      'samples-filler-analyser': {
        target: 'chart-analyser'
      }
    },
    tension: 0.5,
    maintainAspectRatio: false
  },
});


var doughnutChartData = {
  labels: ['Pre Sale', 'Team', 'Master nodes', 'Project', 'Advisors', 
  	'Program'],
  datasets: [
  	{ 
      label: "Dataset 1",
      backgroundColor: ["#5E1084", "#1dc9b7","#5578eb","#ffb822",
      	"#fd397a", "#6c757d"],
      borderWidth: 0,
      cutout: '80%',
      data: [20,25,25,20,30,40],
      fill: false
    }
  ]
}

var doughnutChartProgress = document.querySelector(".chart-wrapper__progress")

var sumDataDoughnut = 0
doughnutChartData.datasets[0].data.forEach( v => {
	sumDataDoughnut += v;
})

doughnutChartData.datasets[0].data.forEach( (v,i) => {
	let div1 = document.createElement("div");

	let div2 = document.createElement("div");
	let p1 = document.createElement("p")
	let p2 = document.createElement("p")

	let widthProgress = Math.round(((v / sumDataDoughnut) * 100) * 100) / 100
	div2.classList.add('row')
	p1.innerHTML = `${doughnutChartData.labels[i]}`;
	p2.innerHTML = `${widthProgress}%`;
	div2.appendChild(p1)
	div2.appendChild(p2)
	div1.appendChild(div2)

	let div3 = document.createElement("div")
	div3.classList.add('progress');
	let div4 = document.createElement("div")
	div4.classList.add('progress__bar');
	div4.style.width = `${widthProgress * 3}%`
	div4.style.background = `${doughnutChartData.datasets[0].backgroundColor[i]}`
	div3.appendChild(div4)
	div1.appendChild(div3)

	// console.log(div2)
	doughnutChartProgress.appendChild(div1);
})

var doughnutChart = new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: doughnutChartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'Chart.js Doughnut Chart'
      },
    },
  },
});


var barChart = new Chart(document.getElementById("bar-chart-grouped"), {
  type: 'bar',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
      	categoryPercentage: 0.75,
      	barPercentage: 0.70,
				// borderWidth: 0.7,
				stacked: false,
        label: "Africa",
        backgroundColor: "#1dc9b7",
        data: [133,221,783,478,572,346,386,312]
      }, {
      	categoryPercentage: 0.75,
      	barPercentage: 0.70,
      	// borderWidth: 0.7,
      	stacked: false,
        label: "Europe",
        backgroundColor: "#6f42c1",
        data: [408,547,675,734,467,431,516,349]
      }
    ]
  },
  options: {
	  responsive: true,
    maintainAspectRatio: false,
	  plugins: {
	    legend: {
	      display: false
	    },
	    title: {
	      display: false,
	      text: 'Chart.js Doughnut Chart'
	    },
	  },
	},
});






//
// collapse dropdown mobile
//
var dropdowns = document.querySelectorAll('.dropdown')

var delayToggle = false
var checkEventToogle = false;

function toogleHeight(el,h) {
  event.preventDefault()
  event.stopPropagation()

  if(delayToggle) return;

  if (el.getAttribute('aria-expanded') == 'false' 
    || el.getAttribute('aria-expanded') == undefined) {
    el.style.height = `${h}px`
    el.setAttribute('aria-expanded',true)
    el.offsetParent.classList.add('child-collapse')

    delayToggle = true

    setTimeout(function(){
      delayToggle = false
      el.style.height = 'initial'
    },300)
  } else {
    el.style.height = el.offsetHeight + 'px'
    setTimeout(()=> {
      el.style.height = `0px`
    },1)
    el.setAttribute('aria-expanded',false)
    el.offsetParent.classList.remove('child-collapse')

    delayToggle = true

    setTimeout(function(){
      delayToggle = false
    },300)
  }
}


var bindToogle = []

function addToggleDropdowns() {
  checkEventToogle = true
  sidebar.classList.add('show')

  for(let i = 1; i < dropdowns.length; i++) {
    let el = dropdowns[i]
    let h = el.scrollHeight

    // console.log(elClone)

    bindToogle[i-1] = toogleHeight.bind(event,el,h)
    dropdowns[i].parentNode.addEventListener('click', bindToogle[i-1])
  }

  sidebar.classList.remove('show')
}

function removeToggleDropdowns() {
  checkEventToogle = false

  for(let i = 1; i < dropdowns.length; i++) {
    dropdowns[i].parentNode.removeEventListener('click', bindToogle[i-1])
  }
}


//
// RESPONSIVE
//

var responsive = {
  'sm': 576,
  'md': 768,
  'lg': 992,
  'xl': 1200,
  '2xl': 1440
}

var widthPage = window.innerWidth;

function dropdownMobile() {
  // console.log(responsive['xl'])
  if (widthPage < responsive['xl'] && checkEventToogle == false) {
    addToggleDropdowns()
    console.log('add')
  } else if (widthPage > responsive['xl'] && checkEventToogle == true) {
    removeToggleDropdowns()
    console.log('remove')
  }

}

function dropdownScreenXL() {
  if (widthPage >= responsive['xl']) {
    for(let i = 1; i < dropdowns.length; i++) {
      let el = dropdowns[i]

      if (el.getAttribute('aria-expanded') == 'false' 
        || el.getAttribute('aria-expanded') == undefined) {
        el.style.height = `initial`
        el.setAttribute('aria-expanded',true)
      }
    }
  } else {
    for(let i = 1; i < dropdowns.length; i++) {
      let el = dropdowns[i]

      if (el.getAttribute('aria-expanded') == 'true') {
        el.style.height = `0px`
        el.setAttribute('aria-expanded',false)
      }
    }
  }
}

window.onresize = function(e) {
  widthPage = window.innerWidth
  dropdownScreenXL()
  dropdownMobile()
}



function main() {
  //add event dropdown mobile
  dropdownScreenXL()
  dropdownMobile()

}

main();