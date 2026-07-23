let data = JSON.parse(localStorage.getItem("mulk")) || {

  pullups:0,

  pushups:0,

  crunches:0,

  foods:[]

};

function save(){

  localStorage.setItem("mulk", JSON.stringify(data));

}

function addRep(type){

  data[type]++;

  save();

  update();

}

function addFood(){

  let food = {

    name: document.getElementById("food").value,

    calories: Number(document.getElementById("calories").value),

    protein: Number(document.getElementById("protein").value),

    carbs: Number(document.getElementById("carbs").value),

    fat: Number(document.getElementById("fat").value),

    fiber: Number(document.getElementById("fiber").value)

  };

  data.foods.unshift(food);

  save();

  update();

  document.getElementById("food").value="";

  document.getElementById("calories").value="";

  document.getElementById("protein").value="";

  document.getElementById("carbs").value="";

  document.getElementById("fat").value="";

  document.getElementById("fiber").value="";

}

function deleteFood(index){

  data.foods.splice(index,1);

  save();

  update();

}

function update(){

  document.getElementById("pullups").innerHTML=data.pullups;

  document.getElementById("pushups").innerHTML=data.pushups;

  document.getElementById("crunches").innerHTML=data.crunches;

  let totals={

    calories:0,

    protein:0,

    carbs:0,

    fat:0,

    fiber:0

  };

  data.foods.forEach(f=>{

    totals.calories += f.calories;

    totals.protein += f.protein;

    totals.carbs += f.carbs;

    totals.fat += f.fat;

    totals.fiber += f.fiber;

  });

  document.getElementById("totalCalories").innerHTML=totals.calories;

  document.getElementById("totalProtein").innerHTML=totals.protein;

  document.getElementById("totalCarbs").innerHTML=totals.carbs;

  document.getElementById("totalFat").innerHTML=totals.fat;

  document.getElementById("totalFiber").innerHTML=totals.fiber;

  let list="";

  data.foods.forEach((f,index)=>{

    list += `

    <div style="border-top:1px solid #ddd;padding:8px">

    <b>${f.name}</b><br>

    ${f.calories} cal |

    ${f.protein}g protein |

    ${f.carbs}g carbs |

    ${f.fat}g fat |

    ${f.fiber}g fiber

    <br>

    <button onclick="deleteFood(${index})">Delete</button>

    </div>

    `;

  });

  document.getElementById("foodList").innerHTML=list;

}

update();
