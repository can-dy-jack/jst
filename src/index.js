var jst = {};

// 保护本地变量不被外部变量污染
(function KartJim(jst){
    jst.init = function(){}
    jst.select = function select(str) {
        this.node = document.getElementById(str);
        return this;
    }
    jst.style = function(attr, val) {
        this.node.style[attr] = val;
    }
})(jst);

/* 
 * test code
 */
jst.select("app")
    .style("color", "red");

