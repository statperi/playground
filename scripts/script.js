var action = "Swim_forward_RM";

var animationIndex = 0;

var animations = [
	"Arm_Bear|Idle_2",
	"Arm_Bear|Agression",
	"Arm_Bear|attack_1",
	"Arm_Bear|attack_2",
	"Arm_Bear|attack_3",
	"Arm_Bear|Attack_4",
	"Arm_Bear|Attack_run_RM",
	"Arm_Bear|Attack_trot_RM",
	"Arm_Bear|Crouch_back_RM",
	"Arm_Bear|Crouch_bacl_L_RM",
	"Arm_Bear|Crouch_bacl_R_RM",
	"Arm_Bear|Crouch_forward_RM",
	"Arm_Bear|Crouch_left_RM",
	"Arm_Bear|Crouch_Right_RM",
	"Arm_Bear|Death_1",
	"Arm_Bear|Death_2",
	"Arm_Bear|Death_3",
	"Arm_Bear|Drink",
	"Arm_Bear|Eat_1",
	"Arm_Bear|Eat_2",
	"Arm_Bear|Fly_IP",
	"Arm_Bear|Fly_RM",
	"Arm_Bear|Hide",
	"Arm_Bear|Hide_Rot_L",
	"Arm_Bear|Hide_Rot_R",
	"Arm_Bear|Hit_agression",
	"Arm_Bear|Hit_back",
	"Arm_Bear|Hit_front",
	"Arm_Bear|Hit_middle",
	"Arm_Bear|Idle_1",
	"Arm_Bear|Idle_3",
	"Arm_Bear|Jump",
	"Arm_Bear|Jump_down",
	"Arm_Bear|Jump_run_RM",
	"Arm_Bear|Jump_trot_RM",
	"Arm_Bear|Landing",
	"Arm_Bear|Lie",
	"Arm_Bear|Rotate_180_L",
	"Arm_Bear|Rotate_180_R",
	"Arm_Bear|Rotate_90_L",
	"Arm_Bear|Rotate_90_R",
	"Arm_Bear|Rotate_Left",
	"Arm_Bear|Rotate_Right",
	"Arm_Bear|Run_forward_RM",
	"Arm_Bear|Run_left_RM",
	"Arm_Bear|Run_right_RM",
	"Arm_Bear|Run_stop_RM",
	"Arm_Bear|Sleep",
	"Arm_Bear|Swim_back_L_RM",
	"Arm_Bear|Swim_back_R_RM",
	"Arm_Bear|Swim_back_RM",
	"Arm_Bear|Swim_forward_RM",
	"Arm_Bear|Swim_Idle_RM",
	"Arm_Bear|Swim_left_RM",
	"Arm_Bear|Swim_right_RM",
	"Arm_Bear|Swim_Rot_L_RM",
	"Arm_Bear|Swim_Rot_R_RM",
	"Arm_Bear|Trot_forward_RM",
	"Arm_Bear|Trot_left_RM",
	"Arm_Bear|Trot_right_RM",
	"Arm_Bear|Walk_back_L_RM",
	"Arm_Bear|Walk_back_R_RM",
	"Arm_Bear|Walk_back_RM",
	"Arm_Bear|Walk_forward_RM",
	"Arm_Bear|Walk_hunted_RM",
	"Arm_Bear|Walk_left_RM",
	"Arm_Bear|Walk_right_RM"
]


window.onload = () => {

    document.querySelector('button[data-action="aggression-swim"]').addEventListener('click', function () {
        var bear = $('.bear')[0];
        if (bear) {
            action = action == "Agression" ? "Swim_forward_RM" : "Agression";
            //let config = {
            //    action: action,
            //    clip:'Arm_Bear|'+ action,
            //    loop: 'once',
            //    duration: 3,
            //    clampWhenFinished: true
            //}

            //animate(bear, 'clip: Arm_Bear|Death_1; loop: once; duration:3; clampWhenFinished: true;');

			let config = getConfig('Arm_Bear|' + action);
            animate(bear, config);
        }
    });

    document.querySelector('button[data-action="cycling"]').addEventListener('click', function () {
        var bear = $('.bear')[0];

		action = animations[animationIndex];
		animationIndex++;
		animationIndex = animations.length != animationIndex ? animationIndex : 0;

		if (bear) {
			//let config = {
			//	action: action,
			//	clip: action,
			//	loop: 'once',
			//	duration: 3,
			//	clampWhenFinished: true
			//}

			let config = getConfig(action);
			animate(bear, config);
		}
    });
};


function getConfig(action) {
	return {
		action: action,
		clip: action,
		loop: 'once',
		duration: 3,
		clampWhenFinished: true
	}
}

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

	$('.actionName').text(config.action);
}


