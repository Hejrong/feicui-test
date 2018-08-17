// animate动画函数 target是移动的距离 speed是移动的速度
function animate(elememt, target, speed) {
    if (element.timerId) {
        clearInterval(element.timerId);
        timerId = null;
    }

    element.timerId = setInterval(function () {
        // 步进 每次移动的距离
        var step = speed;
        // 盒子当前的位置
        var current = element.offsetLeft;

        if(current >= target) {
            // 让定时器停止
            clearInterval(element.timerId);
            element.style.left = target + 'px';
            return;
        }
        // 移动盒子
        current += step;
        element.style.left = current + 'px';
    },30)
}