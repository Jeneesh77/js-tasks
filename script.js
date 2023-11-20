


function buttonClick(){
       
    const value=document.getElementById("hei").value; //height
    const value1=document.getElementById("wei").value; //weight
    const value2=document.getElementById("ag").value;  //age

    //alert message
    if((value=='') || (value1=='') || (value2=='')){
       alert("Note : Please enter a value")
    
    }
// for innerHTML
    let inner=document.getElementById("spn")
    let inner1=document.getElementById("spn1")
    let inner2=document.getElementById("spn2")

    if((value>304) || (value<=0)){     //height
        spn1.innerHTML=`<p class="text-danger"><i class="fa-solid fa-exclamation fa-fade fa-2xs" style="color: #ff0000;">Invalid height</i><p>`
    }

    if((value1>350) || (value1<=0)){  //weight
        spn2.innerHTML=`<p class="text-danger"><i class="fa-solid fa-exclamation fa-fade fa-2xs" style="color: #ff0000;">Invalid weight</i><p>`
    }
    if((value2>120) || (value2<=0)){ //age
        spn.innerHTML=`<p class="text-danger"><i class="fa-solid fa-exclamation fa-fade fa-2xs" style="color: #ff0000;">Invalid age</i><p>`
    }

    //BMI FORMULA  ::-- weight/(height/100)**2  //

    const bmi= value1/(value/100)**2;
    const result=document.getElementById('spn3')

    result.innerHTML=`<h3>YOUR BMI IS</h3>`+bmi
     

    if (bmi >= 35 ) { 
        spn4.innerHTML=`<h2 class="text-danger"> Morbid obesity 😵‍💫</h2> <h3 class="text-danger" > Time to run! </h3>`;
      } else if (bmi <= 35 && bmi >= 30) { 
        spn4.innerHTML=`<h2 class="text-danger"> Obesity 😳</h2> <h3 class="text-danger" > Time to run! </h3>`;
      } else if (bmi <= 29.9 && bmi >= 25) { 
        spn4.innerHTML=`<h2 style="color: orange;"> Overweight 😦</h2> <h3 class="text-danger" > Time to run! </h3>`; 
      } else if (bmi <= 24.9 && bmi >= 18.5){ 
        spn4.innerHTML=`<h2 class="text-success"> Normal 😀</h2> <h3 class="text-success" > Great shape! </h3>`; 
      }else { 
        spn4.innerHTML=` <h2 class="text-warning">Underweight  😕</h2><h3 class="text-danger" > Time to grab a bite! </h3>`; 

}
}  //

//reset

function buttonClick1() {

    const age=document.getElementById("ag")
    age.value=""
    const weight=document.getElementById("wei")
    weight.value=""
    const height=document.getElementById("hei")
    height.value=""
}
