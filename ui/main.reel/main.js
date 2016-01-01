/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    }
    
    
    
 
   // exports.Main = Component.specialize(/** @lends Main# */ {
    templateDidLoad: {
      value: function(event) {
    console.log(this);
    this.templateObjects.button.itemLinkElement.addEventListener("click",function(event){
    console.log("test");
});
}

   
                                    
    
    
});
