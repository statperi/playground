var action = "Swim_Idle_RM";

window.onload = () => {

    document.querySelector('button[data-action="aggression-swim"]').addEventListener('click', function () {
        var bear = $('.bear')[0];
        if (bear) {
            action = action == "Agression" ? "Swim_Idle_RM" : "Agression";
            var config = {
                action: action,
                clip:'Arm_Bear |'+ action,
                loop: 'once',
                duration: 3,
                clampWhenFinished: true
            }

            //animate(bear, 'clip: Arm_Bear|Death_1; loop: once; duration:3; clampWhenFinished: true;');
            animate(bear, config);
        }
    });

    //todo : rotate/cycle through the animations
    //document.querySelector('button[data-action="cycling"]').addEventListener('click', function () {
    //    var bear = $('.bear')[0];

    //    if (bear) 
    //        animate(bear, 'clip: Arm_Bear|attack_1; loop: once; duration:3; clampWhenFinished: true;');
    //});
};


function animate(model, config) {
    let animationMixer = 'clip:' + config.clip + ';';

    if (config.loop) {
        animationMixer += 'loop:' + config.loop + ';';
    }

    if (config.duration) {
        animationMixer += 'duration:' + config.duration + ';';
    }

    model.setAttribute('animation-mixer', animationMixer);
    // model.removeAttribute('animation-mixer');
}


