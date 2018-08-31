function renderStatistics(ctx, names, times) {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
	ctx.fillRect(110, 20, 420, 270);
	ctx.fillStyle = 'white';
	ctx.fillRect(100, 10, 420, 270);
	ctx.fillStyle="rgba(0, 0, 0, 1)";
	ctx.font = '16px PT Mono';
	ctx.fillText('Ура вы победили!', 110, 50);
	ctx.fillText('Список результатов:', 110, 70);

	var resultTime = [],
			steep = 0,
			opacity = 1,
		  maxTime = 0;

  for (var i = 0; i < times.length; i++) {
  	if (times[i] > maxTime) {
  		maxTime = Math.round(times[i]);
		}
		resultTime.push(Math.round(times[i]))
	}

	for (var j = 0; j < names.length; j++) {
  	var prz = (resultTime[j] / maxTime) * 150;

		if (names[j] === 'Вы') {
			ctx.fillStyle="rgba(0, 0, 0, 1)";
			ctx.font = '16px PT Mono';
			ctx.fillText(resultTime[j] + '', 130 + steep, 240 - prz );
			ctx.fillStyle = 'rgba(255, 0, 0, 1)';
			ctx.fillRect(130 + steep, 250, 40, -prz);
			ctx.fillStyle='rgba(0, 0, 0, 1)';
			ctx.fillText(names[j] + '', 130 + steep, 270);
		} else {
			ctx.fillStyle="rgba(0, 0, 0, 1)";
			ctx.font = '16px PT Mono';
			ctx.fillText(resultTime[j] + '', 130 + steep, 240 - prz );
			ctx.fillStyle = 'rgba(0, 0, 255, ' + opacity + ')';
			ctx.fillRect(130 + steep, 250, 40, -prz);
			ctx.fillStyle='rgba(0, 0, 0, 1)';
			ctx.fillText(names[j] + '', 130 + steep, 270);
		}

		opacity -= 0.2;
		steep += 100;
	}
}