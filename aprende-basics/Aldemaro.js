
function simplifyRational(numerador,denominador){

	if(denominador<=0){
		return "Error, denominador no cumple con las condiciones"; 
	}
	else{

	while(isSimplify(numerador,denominador)){
	var array ="";
		var aux=0;
		if(numerador%2==0 && denominador%2==0){
			aux = numerador/2;
			numerador= aux;
			array="("+aux+"/";
			aux = denominador/2;
			denominador=aux;
			array+=aux+")";


		}
		else{
			
			if(numerador%3==0 && denominador%3==0){
				aux = numerador/3;
				numerador= aux;
				array="("+aux+"/";
				aux = denominador/3;
				denominador=aux;
				array+=aux+")";
			}
		else{

			if(numerador%5==0 && denominador%5==0){
					aux = numerador/5;
					array="("+aux+"/";
					numerador= aux;
					aux = denominador/5;
					denominador=aux;
					array+=aux+")";
				}
		
		}
		
		}
		
	}
		array = "("+numerador+"/"+denominador+")";
	}	
	return array;
}

function isSimplify(numerador,denominador){
	var flag = false;

	if(numerador%2==0 && denominador%2==0){
			flag= true;

		}else{
			if(numerador%3==0 && denominador%3==0){
				flag = true;
			}
			else
				if(numerador%5==0 && denominador%5==0)
					flag = true;
				
			}	
				return flag;
}

var vector = [[3,2],[1,1],[3,2],[6,1],[0,1],[2,1]];



function visiblePoints(array){

	var trianguloinf=[];
	var triangulosup=[];
	for(let i=0;i<array.length;i++){

		var angulo1 = Math.atan(array[i][1]/array[i][0])*180/Math.PI;

		for(let j = i+1; j<array.length-1;j++){

			var angulo2 = Math.atan(array[j][1]/array[j][0])*180/Math.PI;

				if( angulo2>= angulo1-45 && angulo2<=angulo1){
				trianguloinf[i]++;
				}
				else{
					if(angulo2>=angulo1 && angulo2<=angulo1+45){
					triangulosup[i]++;
					}
				}

				if(triangulosup[i]>trianguloinf[i]){
			console.log("La cantidad mayor de puntos es: "+triangulosup[i]);
		}else{
			console.log("La cantidad mayor de puntos es: "+trianguloinf[i]);
		}
		}
		
	}
}

visiblePoints(vector);
