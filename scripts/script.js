window.onload = () => {

    document.querySelector('button[data-action="skeleton"]').addEventListener('click', function () {
        var skeleton = $('.skeleton')[0];
        var skeleton2 = $('.skeleton2')[0];
        
        // var bear = $('.bear')[0];

        animate(skeleton, 'clip: Skeleton_Attak; loop: once; duration:3; clampWhenFinished: true;');
        animate(skeleton2, 'clip: Skeleton_Death; loop: once; duration:3; clampWhenFinished: true;');
        // animate(bear, 'clip: Arm_Bear|Death_1; loop: once; duration:1');
    });

    document.querySelector('button[data-action="bear"]').addEventListener('click', function () {
        var skeleton = $('.skeleton')[0];
        var skeleton2 = $('.skeleton2')[0];
        // var bear = $('.bear')[0];
        // animate(bear, 'clip: Arm_Bear|attack_1; loop: once; duration:1');
        animate(skeleton2, 'clip: Skeleton_Attak; loop: once; duration:3; clampWhenFinished: true;');
        animate(skeleton, 'clip: Skeleton_Death; loop: once; duration:3; clampWhenFinished: true;');
    });
};


function animate(model, action) {
    // var skeleton = $('.skeleton')[0];
    model.setAttribute('animation-mixer', action);
    // model.removeAttribute('animation-mixer');
}


