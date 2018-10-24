function texto_aleatorio(){
	var frases = new Array()
	frases[0] = "Definitivamente no"
	frases[1] = "Fuck yeah!"
	frases[2] = "Quizás"
	frases[3] = "Estás loco?"
	frases[4] = "Estas de suerte"
	frases[5] = "Depende de tu humor"
	frases[6] = "Lograras todo lo que te propongas"
	frases[7] = "No está en tu destino"
	frases[8] = "No cuentes con ello"
	frases[9] = "Definitivamente si"

	aleatorio = Math.random() * (frases.length);
	aleatorio = Math.floor(aleatorio);

	auxiliar = (frases[aleatorio]);

	alert("El marcianito dice que: "+auxiliar);
}



