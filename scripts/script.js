window.onload = () => {

    document.querySelector('button[data-action="attack"]').addEventListener('click', function () {
        console.log('attack');
        animate('clip: Skeleton_Attak; loop: once; duration:1');
    });

    document.querySelector('button[data-action="attack"]').addEventListener('click', function () {
        console.log('die');
        animate('clip: Skeleton_Death; loop: once; duration:1; clampWhenFinished:true;');
    });
};


function animate(action) {
    $('.skeleton').setAttribute('animation-mixer', action);
}


