const templateFullScreen = document.createElement('template');
templateFullScreen.innerHTML = `

<style>
*{
	font-family: Arial, Helvetica, sans-serif;
}
.alert_overlay{
	position: fixed;
	box-sizing: border-box;
	padding: 0 50px;
	inset: 0;
	overflow-y: auto;
	z-index: 99999999999;
	background-color: rgba(0, 0, 0, .8);
    backdrop-filter: blur(2px);
	display: none;
	opacity:0;
	transition: all .25s linear;
}
#alert_mainContent{
	position: relative;
    opacity:0;
	font-family: Arial, Helvetica, sans-serif;
	z-index: 1;
	box-sizing: border-box;
	padding: 20px 36px 100px 36px;
	border-radius: 10px;
	background-color: rgba(255, 255, 255, .95);
	width: 100%;
	max-width: 600px;
	margin: 40px auto;
	overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

#alert_mainContent #alert_logo{
	width: 100%;
	max-width: 330px;
	height: 120px;
	margin: 15px auto 25px;
	background-image: url(assets/images/jcco_seal_horizontal_alert.png)!important;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: contain;
}
.alert_overlay #alert_mainContent h1{
	color: red;
	text-align: center;
	text-transform: uppercase;
	font-size: 32px !important;
	margin-top: 10px;
	margin-bottom: 50px;
	animation-name: flashAlert !important;
	animation-iteration-count: 8 !important;
	animation-fill-mode: forwards !important;
	animation-duration: .5s !important;
}

.firstHeaderRed{
	color:red !important;
	display:inline-block;
}

.drop_alert_mainContent{
    animation-name: slideDown;
	animation-fill-mode: forwards !important;
	animation-duration: .5s !important;
}

.singleMsg{
    display:block;
    margin-bottom:30px;
	width:100%;
	color: #533f03;
    // border-bottom:1px solid #d7c490;
}

.alert_overlay #alert_mainContent h3{
    display:block;
    text-transform: capitalize;
	width:100%;
	color: #2c2c2c;
	font-size: 1.27em !important;
}

.divider:before{
    content: "";
    display:block;
    position:relative;
    top:0px !important;
    margin:0 auto;
    height:0px;
    border-top:1px solid #ddd;
}

.alert_overlay #alert_mainContent p{
	color: #666 !important;
	font-size: 18px ;
	line-height: 1.4em;
    margin-top:-15px;
    margin-bottom:-15px;
}

#alert_mainContent p a{
	color:#007BFF;
	font-weight: bold;
	text-decoration: underline !important;
	transition: color .15s linear;
}

#alert_mainContent p a:hover{
	color:#093768;
}

#alert_mainContent span{ /* Bottom close button */
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	letter-spacing: .04em;
	bottom:30px;
	border-radius: 4px;
	left: 50%;
	z-index:2;
	transform: translate(-50%);
	height: 40px;
	padding: 0 20px;
	text-transform: capitalize;
	font-size: 13px;
	cursor: pointer;
	background-color: #777;
	color: #fff;
	min-width: 90px;
    transition: all .15s linear;
}

#alert_mainContent span:hover{ /* Bottom close button */
	background-color: #007BFF;
}

#topRightCloseAlert{
	right:10px;
	top:10px;
	transform-origin: center center;
	position:absolute;
	font-weight:bold;        
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 40px;
	width: 30px;
    background-color: #fff;
	height: 30px;
    font-size: 13px;
	cursor: pointer;
	color: #777;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
	transition: all .15s linear;
}

#topRightCloseAlert:hover{
	background-color: #007BFF;
	color: #fff;
	transform: scale(1.2);
}

#numberOfAlerts{
	font-weight:bold;
}
#alertReminder{
	position:fixed;
	z-index:999999;
	width:96%;
	max-width:850px;
	border-radius:4px;
	box-shadow: rgba(0, 0, 0, 0.19) 0px 8px 20px, rgba(0, 0, 0, 0.23) 0px 4px 6px;
	left: 50%;
	bottom: 14px;
	transform: translate(-50%, 0);
	height:32px;
	background-color:#007bff !important;
	color:white;
	display:none;
	cursor:pointer;
}
#alertReminder:hover{
	background-color:#0F5CAE !important;
}
#alertReminder:hover #alertReminder_CloseBtn{
	color:#000;
}
.alertReminder_Active{
	display:flex !important;
	align-items: center;
	justify-content: center;
}
#alertReminder_CloseBtn{
	position:absolute;
	display:flex !important;
	align-items: center;
	justify-content: center;
	color:black;
	width:18px;
	height:18px;
	right:14px; 
	font-size:13px;
	cursor:pointer;
	transition: font-size linear .1s;
}
#alertReminder_CloseBtn:hover{
	font-size:16px;
	color:black !important;
}
#alertReminderText{
	hight:32px;
	width:calc(100% - 80px);
	margin:0px;
	text-align:center;
}

@keyframes flashAlert {
	0% {color: red;}
	50% {color: rgba(255, 255, 255, .15);}
	100% {color: red;}
}

@keyframes slideDown{
    0% {transform:translateY(-20px); opacity:0;}
    100% {transform:translateY(0px); opacity:1;}
}

@media only screen and (max-width: 320px) { /* true up to 600px */
	.alert_overlay #alert_mainContent h1{
	  font-size: 26px;
	}
}

</style>

<div class="alert_overlay close">
    <div id="alert_mainContent">
    
		<div id="topRightCloseAlert" class="close">&#10005;</div>

        <div id="alert_logo"></div>

        <h1 class="flash">Attention!</h1>

        <div class="singleMsg" id="header1">
            <slot name="header1">
                <h3 id="testHeader"></h3>
                <p></p>
            </slot>
        </div>

        <div class="singleMsg" id="header2">
            <slot name="header2">
                <h3 id="testHeader2"></h3>
                <p></p>
            </slot>
        </div>

        <div class="singleMsg" id="header3">
            <slot name="header3">
                <h3 id="testHeader3"></h3>
                <p></p>
            </slot>
        </div>

        <div class="singleMsg" id="header4">
            <slot name="header4">
                <h3 id="testHeader4"></h3>
                <p></p>
            </slot>
        </div>

        <div class="singleMsg" id="header5">
            <slot name="header5">
                <h3 id="testHeader5"></h3>
                <p></p>
            </slot>
        </div>

        <span class="close">Close</span>
    </div>
</div>

<div id="alertReminder">
	<div id="alertReminder_CloseBtn">&#10005;</div>
	<p id="alertReminderText">Click to display&nbsp;(<span id="numberOfAlerts"></span>)&nbsp;County Clerk alerts</p>
</div>
`
class popUpAlert extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(templateFullScreen.content.cloneNode(true));
    }

    connectedCallback() {
        const popUpAlertOverlay = this.shadowRoot.querySelector('.alert_overlay');
        const mainContainer = this.shadowRoot.querySelector('#alert_mainContent');
		var visibleMsg = [];
		var theId;

        // Push all visible messages into visibleMsg array
		document.querySelectorAll('pop-up-alert .singleMsg').forEach(item => {
			theId=item.id
			visibleMsg.push(theId)
		})

		const alertOn = setTimeout(()=>{
			if(visibleMsg.length!=0){
				popUpAlertOverlay.style.display="block";
                mainContainer.classList.add("drop_alert_mainContent");
				document.querySelector('body, html').style.overflowY="hidden";
				setTimeout(()=>{
				popUpAlertOverlay.style.opacity=1;
				this.shadowRoot.querySelector('#numberOfAlerts').innerText=visibleMsg.length;
				},50);
			}
		},2000);		

		this.shadowRoot.querySelector('#alert_logo').addEventListener('click',(event)=>{
				event.stopPropagation();
		})
		this.shadowRoot.querySelector('h1').addEventListener('click',(event)=>{
			event.stopPropagation();
		})
		document.querySelectorAll('h3, p').forEach(item => {
			item.addEventListener('click',(event)=>{
				event.stopPropagation();
			})
		})

        // Grabs the lowest number order and makes the header red
        var arr = [];
        $('.singleMsg').each(function(){
            var $this = $(this);
            arr.push($this.data('order'));
        });


        // Add divider to messages
        document.querySelectorAll('.singleMsg').forEach(item => {
            item.classList.add("divider");
        })
        
        document.querySelectorAll('[data-order]').forEach(item => {
            if(item.getAttribute("data-order")==Math.min(...arr)){
                item.querySelector('h3').classList.add("firstHeaderRed");
                item.classList.remove("divider");
            }
        });


        // Sort messages by data-order attribute
        let mainContent = document.querySelector("pop-up-alert").shadowRoot.querySelector("#alert_mainContent");
    
        $(".singleMsg").sort(asc_sort).appendTo(mainContent);

        function asc_sort(a, b){
            return ($(a).attr("data-order")) - ($(b).attr("data-order")) ;    
        }
	

        /////////


		// If user closes the pop-up alert
        this.shadowRoot.querySelectorAll('.close').forEach(item => {
			item.addEventListener("click", ()=> {
				sessionStorage.setItem("pop-up-alert", "inactive");
				popUpAlertOverlay.style.opacity=0;
				document.querySelector('body, html').style.overflowY="auto";
				// alert reminder starts
				this.shadowRoot.getElementById("alertReminder").classList.add("alertReminder_Active");
				sessionStorage.setItem("alert-reminder", "active");
				sessionStorage.setItem("alert-number", visibleMsg.length);
				// alert reminder ends
				setTimeout(()=>{
					popUpAlertOverlay.style.display="none";
				},1000);
			})
		})

		// If user clicks on alert reminder
		this.shadowRoot.querySelector('#alertReminder').addEventListener('click',()=>{
			sessionStorage.setItem("pop-up-alert", "active");
			popUpAlertOverlay.style.opacity=1;
			popUpAlertOverlay.style.display="block";
			mainContainer.classList.add("drop_alert_mainContent");
			document.querySelector('body, html').style.overflowY="hidden";
			this.shadowRoot.getElementById("alertReminder").classList.remove("alertReminder_Active"); 
		})

        if(sessionStorage.getItem("pop-up-alert")=="inactive"){
			clearTimeout(alertOn); 
        } 

		// If user closes the alert reminder
		this.shadowRoot.querySelector('#alertReminder_CloseBtn').addEventListener('click',()=>{
			sessionStorage.setItem("alert-reminder", "inactive");
			this.shadowRoot.getElementById("alertReminder").classList.remove("alertReminder_Active"); 
		})

		// If user returns to homepage
		if(sessionStorage.getItem("pop-up-alert")=="inactive" && sessionStorage.getItem("alert-reminder")=="active"){
			this.shadowRoot.getElementById("alertReminder").classList.add("alertReminder_Active");
			this.shadowRoot.getElementById("numberOfAlerts").innerText=	sessionStorage.getItem("alert-number");
		}
		
    }// /connectedCallback	
}

window.customElements.define('pop-up-alert', popUpAlert);


////////////////////


