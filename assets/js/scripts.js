$(function(){
      FlipClock.Lang.Custom = { days:'Days', hours:'Hours', minutes:'Minutes', seconds:'Seconds' };
      var opts = {
        clockFace: 'DailyCounter',
        countdown: true,
        language: 'Custom'
      };
      opts.classes = {
        active: 'flip-clock-active',
        before: 'flip-clock-before',
        divider: 'flip-clock-divider',
        dot: 'flip-clock-dot',
        label: 'flip-clock-label',
        flip: 'flip',
        play: 'play',
        wrapper: 'flip-clock-small-wrapper'
      };
      var countdown = 1475719200 - ((new Date().getTime())/1000); // from: 10/06/2016 07:30 am +0530
      countdown = Math.max(1, countdown);
      $('.clock-builder-output').FlipClock(countdown, opts);
    });
