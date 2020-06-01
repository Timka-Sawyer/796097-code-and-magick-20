'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_Y = 90;
var NAMES_Y = 260;
var MAX_BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  var maxTime = Math.max.apply(null, times);

  for (var i = 0; i < players.length; i++) {
    var fontGap = 10;
    var columnHeight = (MAX_BAR_HEIGHT * times[i]) / maxTime;
    var columnX = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var columnY = BAR_Y + (MAX_BAR_HEIGHT - columnHeight);

    ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(250, ' + Math.round(255 * Math.random()) + '% , 50%)';
    ctx.fillRect(columnX, columnY, BAR_WIDTH, columnHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, BAR_Y + MAX_BAR_HEIGHT - columnHeight - fontGap);
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, NAMES_Y);
  }
};

