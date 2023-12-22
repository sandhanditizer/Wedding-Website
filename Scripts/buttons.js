// Wrap the code in a window load event listener
window.addEventListener('load', function() {
    
    // For the lodging buttons
    var quad1 = document.getElementById("quad1-button");
    quad1.addEventListener("click", function() {
        window.location.href = "https://www.hotelverdant.com";
    });
    
    var quad2 = document.getElementById("quad2-button");
    quad2.addEventListener("click", function() {
        window.location.href = "https://www.hilton.com/en/hotels/racgldt-doubletree-racine-harbourwalk/";
    });
    
    var quad3 = document.getElementById("quad3-button");
    quad3.addEventListener("click", function() {
        window.location.href = "https://www.redlion.com/americas-best-value-inn/wi/racine/americas-best-value-inn-suites-racine";
    });
    
    var quad4 = document.getElementById("quad4-button");
    quad4.addEventListener("click", function() {
        window.location.href = "https://www.wyndhamhotels.com/travelodge/racine-wisconsin/travelodge-waters-edge-hotel-racine/overview";
    });

    // Registy buttons
    var giftButton = document.getElementById("gift-button");
    giftButton.addEventListener("click", function() {
        window.location.href = "https://www.myregistry.com/wedding-registry/zachariah-kline-and-claire-trietsch-baraboo-wi/4080534";
    });
    
    var fundButton = document.getElementById("fund-button");
    fundButton.addEventListener("click", function() {
        window.location.href = "https://www.myregistry.com/Visitors/Giftlist/CashGiftProcess.aspx?cashGiftId=1190394&registryId=4080534";
    });
});