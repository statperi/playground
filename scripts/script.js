window.onload = () => {

    document.querySelector('button[data-action="skeleton"]').addEventListener('click', function () {
        console.log('skeleton');

        var skeleton = $('.skeleton')[0];
        var bear = $('.bear')[0];

        animate(skeleton, 'clip: Skeleton_Attak; loop: once; duration:1');
        animate(bear, 'clip: Arm_Bear|Death_1; loop: once; duration:1');
    });

    document.querySelector('button[data-action="bear"]').addEventListener('click', function () {
        console.log('bear');

        var skeleton = $('.skeleton')[0];
        animate(bear, 'clip: Arm_Bear|attack_1; loop: once; duration:1');
        animate(skeleton, 'clip: Skeleton_Death; loop: once; duration:1;');
    });
};


function animate(model, action) {
    // var skeleton = $('.skeleton')[0];
    model.setAttribute('animation-mixer', action);
    model.removeAttribute('animation-mixer');
}


