
// //component init


QuestionLoader.loadQuestion('#question');
var userHP;
var enemyHP;
var battleTimer;
var monsterType=battle_data.getMonster().getMonsterType();
$(document).ready(function() {
    //fighting page countdown clock
    battleTimer = Object.create(batontimer);
    battleTimer.setUpClock('#counter', 20, 'red', 'circle', function() {
        userHP.modifyHP(-50, 1);
        gameStatus.changeBattleStatus(userHP);
    });
    battleTimer.reset();
    battleTimer.start();

    //luckystar coountdown clock
    var hintTimer = Object.create(batontimer);
    hintTimer.setUpClock('#hint-timer', 30, 'red', 'circle', function() {
        $.fancybox.close();
    });
    luckystar.setFancybox('#luckystar', hintTimer, battleTimer, '#luckyCount');
    //Handle paramater, usage: BatonHunter/battlepage.html?train=1

    // BOSSparameter ===   Object {train: "1"}

    
    var BOSSparameter=getPara.get();
    //


    userHP = new HP(battle_data.getPlayer().getHp(), $("#user-hp"));
    enemyHP = new HP(battle_data.getMonster(BOSSparameter.monster).getHp(), $("#enemy-hp"));

    $('#herbsCount').text(' X ' + battle_data.getPlayer().getHerbQuantity());
    $('#herb').on("click", {
        dom_id: "#herb",
        value: battle_data.getPlayer().getHerbQuality(),
        type: 1,
        count_id: "#herbsCount"
    }, userHP.heal);
});

