
module.exports = {
    controller: 'HomeCtrl',
    template: `
        <div class="flex-center position-ref full-height">
            <div class="content">
                <div class="title m-b-md">
                    {{msg}}
                </div>
                <span class="glyphicon glyphicon-user"></span>
                <span class="glyphicon glyphicon-heart"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-signal"></span>
                <span class="glyphicon glyphicon-home"></span>
                <span class="glyphicon glyphicon-cog"></span>
            </div>
        </div>
    `
};