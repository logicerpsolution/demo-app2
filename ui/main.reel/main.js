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
    value: function() {
    var day = moment("Dec 25, 1995");
    console.log("Test:", day);
}
                                    }
                                    }

    
    
});
